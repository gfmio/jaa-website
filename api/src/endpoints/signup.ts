
import generatePassword = require("password-generator");
import { Schema } from "mongoose";

import { JaaApi } from "../server";
import { Mail } from "../helpers/mailer";

export enum Sex {
  male,
  female,
  other,
  preferNotToSay,
}

// const sexValues: string[] = [
//   "male",
//   "female",
//   "other",
//   "preferNotToSay"
// ];

export enum Country {
}

export enum MemberCategory {
  alumni,
  faculty,
  staff,
  hostFamily,
  other,
}

const memberCategoryValues: string[] = [
  "alumni",
  "faculty",
  "staff",
  "hostFamily",
  "other",
];

export enum College {
  krupp,
  mercator,
  ciii,
  nordmetall,
  notApplicable,
}

// const collegeValues: string[] = [
//   "krupp",
//   "mercator",
//   "ciii",
//   "nordmetall",
//   "notApplicable",
// ];

export enum Degree {
  ba,
  bsc,
  ma,
  msc,
  phd,
  mba,
}

// const degreeValues: string[] = [
//   "ba",
//   "bsc",
//   "ma",
//   "msc",
//   "phd",
//   "mba",
// ];

export enum Major {

}

export enum Industry {

}

export enum JobField {

}

export enum SubscriptionPlan {
  starter,
  contributor,
  patron,
}

const subscriptionPlanValues: string[] = [
  "starter",
  "contributor",
  "patron"
];

export interface IGoogleUserProps {
  givenName: string;
  familyName: string;
}

export interface IGoogleUser {
  name: {
    givenName: string,
    familyName: string,
    fullName: string,
  };
  primaryEmail: string;

  hashFunction: string;
  password: string;
  changePasswordAtNextLogin: boolean;

}

export class GoogleUser implements IGoogleUser {
  public name: {
    givenName: string,
    familyName: string,
    fullName: string,
  };
  public primaryEmail: string;

  public hashFunction: string = "SHA-1";
  public password: string;
  public changePasswordAtNextLogin: boolean = true;

  public service: any;

  constructor(props: IGoogleUserProps, service: any) {
    this.service = service;

    this.name = {
      familyName: props.familyName,
      fullName: props.givenName + " " + props.familyName,
      givenName: props.givenName,
    };

    this.primaryEmail = "";
    this.password = "";
    this.generatePassword();
  }

  public generateEmail(callback: any, n?: number) {
    // console.log(this.name.givenName.slice(0, 1).toLowerCase(), this.name.familyName.toLowerCase(), n);
    const suggestedEmail = this.name.givenName.slice(0, 1).toLowerCase() +
      this.name.familyName.toLowerCase() +
      (n === undefined ? "" : n.toString()) +
      "@jacobs-alumni.de";

    console.log(suggestedEmail);

    this.service.users.get({ userKey: suggestedEmail }, (result: any, error: any) => {
      // console.log("here", result, error);

      if (result === null) {
        this.generateEmail(callback, n === undefined ? 2 : n + 1);
      } else {
        console.log("email works", suggestedEmail);
        this.primaryEmail = suggestedEmail;
        callback()
      }
    });
  }

  public generatePassword() {
    this.password = generatePassword(12, false);
  }

  public register(callBack: (result: any) => void) {
    this.service.users.insert({
      key: "AIzaSyA1Pg7f93MRS8OvGCuHmT1dP7AaV7kSfqk",
      name: {
        givenName: this.name.givenName,
        familyName: this.name.familyName,
        fullName: this.name.fullName,
      },
      primaryEmail: this.primaryEmail,

      hashFunction: "SHA-1",
      password: this.password,
      changePasswordAtNextLogin: true,
    }, callBack);
  }
}

export interface IMember {
  personal: {
    firstName: string,
    lastName: string,
    sex: string,
    email: string,
    address: {
      line1: string,
      line2: string,
      city: string,
      zipCode: string,
      state: string,
      country: string
    },
    nationalities: string[],
    category: string,
    social: {
      facebook: string,
      twitter: string,
      linkedIn: string,
      instagram: string,
      homepage: string,
    },
  };
  study: {
    college: string,
    class: string,
    degree: string,
    majors: string[],
    includeOnAlumniMap: boolean,
  };
  employer: {
    employer: string,
    position: string,
    industry: string,
    jobField: string,
    studentContact: boolean,
  };
  subscriptionPlan: string;
}

class Member implements IMember {
  public personal: {
    firstName: string,
    lastName: string,
    sex: string,
    email: string,
    address: {
      line1: string,
      line2: string,
      city: string,
      zipCode: string,
      state: string,
      country: string
    },
    nationalities: string[],
    category: string,
    social: {
      facebook: string,
      twitter: string,
      linkedIn: string,
      instagram: string,
      homepage: string,
    },
  };
  public study: {
    college: string,
    class: string,
    degree: string,
    majors: string[],
    includeOnAlumniMap: boolean,
  };
  public employer: {
    employer: string,
    position: string,
    industry: string,
    jobField: string,
    studentContact: boolean,
  };
  public subscriptionPlan: string;
  public stripe: {
    customerId: string;
    subscriptionId: string;
  };
  public google: {
    alumniEmail: string,
    userId: string,
  };

  constructor(member: IMember) {
    this.personal = member.personal;
    this.study = member.study;
    this.employer = member.employer;
    this.subscriptionPlan = member.subscriptionPlan;
    // console.log(this);
    // code...
  }

  public validate() {
    return { state: "valid" };
  }
}

//
// API endpoint
//

export function registerUserSignupEndpoint(api: JaaApi) {
  const memberSchema = new Schema({}, { strict: false });
  const Member = api.dbConnection.model('Member', memberSchema)

  api.app.post("/signup", (req: any, res: any) => {
    // console.log(req.body);
    if (req.body.member.subscriptionPlan === "starter") {
      if (req.body.member.starterPlanReason === undefined) {
        res.status(400).json({ errors: ["You need to provide a reason for applying for the starter plan."] });
        return
      }
    } else if ((req.body.member.subscriptionPlan === "contributor") ||
               (req.body.member.subscriptionPlan === "patron")) {
      if (req.body.paymentToken === undefined) {
        res.status(400).json({ errors: ["There was an error in processing your payment. Please try again."] });
        return
      }
    } else {
      res.status(400).json({ errors: ["There was an error in your subscription plan selection. Please go back and re-select your plan."] });
    }

    //
    // Check if all user data is valid
    //

    const member = new Member({
      personal: {
        firstName: req.body.member.firstName,
        lastName: req.body.member.lastName,
        sex: req.body.member.sex,
        email: req.body.member.email,
        address: {
          line1: req.body.member.addressLine1,
          line2: req.body.member.addressLine2,
          city: req.body.member.addressCity,
          zipCode: req.body.member.addressZipCode,
          state: req.body.member.addressState,
          country: req.body.member.addressCountry
        },
        nationalities: req.body.member.nationalities,
        category: req.body.member.category,
        social: {
          facebook: req.body.member.facebook,
          twitter: req.body.member.twitter,
          linkedIn: req.body.member.linkedIn,
          instagram: req.body.member.instagram,
          homepage: req.body.member.homepage,
        },
      },
      study: {
        college: req.body.member.colledge,
        class: req.body.member.graduationClass,
        degree: req.body.member.degree,
        majors: req.body.member.majors,
        includeOnAlumniMap: req.body.member.includeOnAlumniMap,
      },
      employer: {
        employer: req.body.member.employer,
        position: req.body.member.position,
        industry: req.body.member.industry,
        jobField: req.body.member.jobField,
        studentContact: req.body.member.studentContact,
      },
      subscriptionPlan: req.body.member.subscriptionPlan
    });

    // Check if the info is valid
    const v = member.validate();
    if (v.state != "valid") {
      res.status(400).json({});
      return
    }

    // console.log(member);

    // res.status(400).json({errors: [], obj: member})
    // return

    let stripeCustomer: any = undefined;
    let stripeSubscription: any = undefined;

    const step1 = () => {
      console.log("step1");
      const stripeCustomerProps: any = {
        email: member.personal.email,
        metadata: {
          firstName: member.personal.firstName,
          lastName: member.personal.lastName
        },
      };
      if (req.body.paymentToken !== undefined) {
        stripeCustomerProps.source = req.body.paymentToken;
      }

      api.stripe.customers.create(stripeCustomerProps, function(err: any, customer: any) {
        if (err) {
          api.log(err);
          res.status(400).json({ errors: [err] });
          return
        }

        stripeCustomer = customer;
        member.stripe = {
          customerId: stripeCustomer.id,
          subscriptionId: ""
        };

        step2();
      });
    }

    const step2 = () => {
      console.log("step2");

      if (member.subscriptionPlan === subscriptionPlanValues[SubscriptionPlan.starter]) {
        return step3();
      }

      const subscriptionProps: any = {
        customer: stripeCustomer.id,
        items: [],
      };

      if (member.subscriptionPlan === subscriptionPlanValues[SubscriptionPlan.contributor]) {
        subscriptionProps.items.push({ plan: "contributor-membership" });
      } else if (member.subscriptionPlan === subscriptionPlanValues[SubscriptionPlan.patron]) {
        subscriptionProps.items.push({ plan: "patron-membership" });
      }

      // console.log(member.personal.category, memberCategoryValues[MemberCategory.alumni], member.study.class)

      if (member.personal.category === memberCategoryValues[MemberCategory.alumni]) {
        if (member.study.class == "2017") {
          subscriptionProps.trial_end = stripeCustomer.created + 2 * 365 * 24 * 60 * 60
        } else if (member.study.class == "2016") {
          subscriptionProps.trial_end = stripeCustomer.created + 365 * 24 * 60 * 60
        } else {
          subscriptionProps.trial_end = stripeCustomer.created + 365 * 12 * 60 * 60
        }
      }

      // console.log(subscriptionProps.trial_end);

      api.stripe.subscriptions.create(subscriptionProps, function(err: any, subscription: any) {
        if (err) {
          api.log(err);
          res.status(400).json({ errors: [err] });
          return
        }

        stripeSubscription = subscription;
        member.stripe.subscriptionId = subscription.id;
        step3();
      });
    }

    let googleUser: any = undefined;

    const step3 = () => {
      googleUser = new GoogleUser({
        givenName: member.personal.firstName,
        familyName: member.personal.lastName
      }, api.google);

      googleUser.generateEmail(() => {
        googleUser.register((result: any) => {
          // console.log(result);
          // if ("errors" in result) {
          //   res.status(400).json({ errors: result.errors.map((e: any) => e.message) })
          //   return
          // }

          member.google = {
            alumniEmail: googleUser.primaryEmail,
            userId: result.id
          };

          step4();
        });
      });
    };


    const step4 = () => {
      console.log("step4");
      // Write to MongoDB
      const newMember = new Member(member);
      newMember.save();

      step5();
    };

    const step5 = () => {
      console.log("step5");
      // Send email

      const htmlEmailText = '<p>Dear ' + member.personal.firstName + ',</p><p>Welcome to the Jacobs Alumni Association! Thank you for joining us. We\'re excited to have you as part of our growing community of Jacobs alumni.</p><p>Your Jacobs Alumni email is <b>' + member.google.alumniEmail + '</b> and your password is <b>' + googleUser.password + '</b>.</p><p><b>Important next steps</b></p><p>Please go to <a target="_blank" href="http://mail.jacobs-alumni.de/">http://mail.jacobs-alumni.de/</a> and log in with these credentials.</p><p>Then choose a new, secure account password <b>and note it somewhere</b>. (We recommend using a password manager. Most password managers can generate a strong, random password for you, save it and synchronise it between your devices.)</p><p>Google will also ask you to <b>set up a recovery phone number</b> to recover your account access if you ever forget your password. <b>This is important, because if you don\'t, we have to personally do it and as we are all volunteers, it will cause unnecessary work for us and an annoying delay for you.</b></p><p>With your Jacobs Alumni Google account, you can also access the <b>Google Drive with unlimited storage</b> at <a target="_blank" href="https://drive.google.com">https://drive.google.com</a>. For help on how to set up and use Google Drive, please check the <a target="_blank" href="https://support.google.com/drive/?hl=en">Google Drive help</a>.</p><p>For setting up your alumni email address in your email client and devices, please refer to the respective help section for your client / device. Many clients provide a special setup option for Google accounts, which you can use to set up your Jacobs Alumni email. For help and instructions for various clients see:</p><ul><li><a target="_blank" href="https://support.office.com/en-us/article/Import-Gmail-to-Outlook-20fdb8f2-fed8-4b14-baf0-bf04b9c44bf7">Outlook</a></li><li><a target="_blank" href="https://support.apple.com/mail">Apple Mail on Mac OS X and iOS</a></li><li><a target="_blank" href="https://support.google.com/a/users/answer/1738362?hl=en">Android</a></li><li><a target="_blank" href="https://support.mozilla.org/en-US/kb/thunderbird-and-gmail">Thunderbolt</a></li></ul><p>Also, please check out and join our <a target="_blank" href="https://www.facebook.com/groups/119890224726756/">Jacobs Alumni Facebook Group</a>, if you haven\'t done so already, and the various groups of our Alumni chapters all over the world.</p><p>Using your Alumni Google Account, you can also log in on our website, for example to purchase tickets for Homecoming. We are also always working hard on adding new features to the site. If you have any ideas and want to get involved, reach out to us anytime.</p><p>If you have any questions or problems, let us know at <a href="mailto:support@jacobs-alumni.de">support@jacobs-alumni.de</a> or on Facebook.</p><p><b>Finally, thanks again for joining us and welcome to the Jacobs Alumni Association!</b></p><p>Your Alumni Board</p>';
      // console.log(htmlEmailText);

      api.mailer.sendMail(new Mail({
        from: "board@jacobs-alumni.de",
        to: [member.personal.email],
        subject: "Welcome to the Jacobs Alumni Association",
        html: htmlEmailText,
      }), () => {
        res.status(200).send({ 'success': true })
      })
    };

    step1();
  });
}
