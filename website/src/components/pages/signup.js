
var validator = require('validator');

const c = require('csam/lib/component');

const countries = require('../../models/countries');
const majors = require('../../models/majors');
const industries = require('../../models/industries');
const jobFields = require('../../models/job-fields');

const Link = require('../uikit/link');

const formComponents = require('../uikit/form-components');
const InputWrapper = formComponents.InputWrapper;
const CheckBoxWrapper = formComponents.CheckBoxWrapper;
const Input = formComponents.Input;
const Textarea = formComponents.Textarea;
const RadioGroup = formComponents.RadioGroup;
const Select = formComponents.Select;
const CheckBox = formComponents.CheckBox;

const sections = ["intro", "signup-form", "form-step-1", "form-step-2", "form-step-3", "form-step-4", "form-step-5", "pre-signup", "signup-complete"];
const steps = [
  ["pre-signup", "intro"],
  ["pre-signup", "signup-form", "form-step-1"],
  ["pre-signup", "signup-form", "form-step-2"],
  ["pre-signup", "signup-form", "form-step-3"],
  ["pre-signup", "signup-form", "form-step-4"],
  ["pre-signup", "signup-form", "form-step-5"],
  ["signup-complete"]
]

const showSection = function(n) {
  if (n >= steps.length) {
    return
  }

  $(sections.map(function(e) { return "#" + e }).join(",")).fadeOut(200).addClass("uk-hidden");
  $(steps[n].map(function(e) { return "#" + e }).join(",")).hide().removeClass("uk-hidden").fadeIn(200);
}

const stepHandler = function(n, condition) {
  condition = condition || function() {
    return true;
  }
  return function(e) {
    e.preventDefault();
    if (condition()) {
      showSection(n);
    }
    return false;
  }
}

//
// Form fields
//

const Field = function Field(validation, formMetadata) {
  this.value = undefined;
  this.state = "empty"
  this.validation = validation;
  this.errors = [];
  this.formMetadata = formMetadata;
}

Field.prototype.validate = function validate() {
  const v = this.validation(this.value);
  this.state = v.state;
  this.errors = v.errors || [];
}

Field.prototype.update = function update(value) {
  this.value = value;
  this.validate();
  // console.log(this);
}

//
// Validators
//


const required = function(value) {
  if ((value !== undefined) && (value !== null) && (value !== "") && (value !== false)) {
    return { state: "valid" };
  } else {
    return { state: "invalid", errors: ["This value is required."] }
  }
}

const optional = function(value) {
  if ((value !== undefined) && (value !== null) && (value !== "")) {
    return { state: "valid" };
  } else {
    return { state: "empty" };
  }
}

const and = function() {
  var validators = [];
  var n = 0;
  while (n < arguments.length) {
    validators.push(arguments[n]);
    n = n + 1;
  }

  return function(value) {
    var validationResults = validators.map(function(e){ return e(value) });
    // console.log(validationResults);
    var errors = [];
    var state = "valid";
    for (var n in validationResults) {
      var res = validationResults[n]
      errors = errors.concat(res.errors || []);
      if (state != "invalid") {
        if ((res.state == "invalid") && (state != "empty")) {
          state = "invalid"
        }
        if (res.state == "empty") {
          state = "empty"
        }
      }
    }

    return { state: state, errors: errors };
  }
}

const emailValidator = function(value) {
  if (validator.isEmail(value)) {
    return { state: "valid", errors: [] }
  } else if (value.length == 0) {
    return { state: "empty", errors: [] }
  } else {
    return { state: "invalid", errors: ["You need to provide a valid email address."] }
  }
}

const urlValidator = function(value) {
  if (validator.isURL(value)) {
    return { state: "valid", errors: [] }
  } else if (value.length == 0) {
    return { state: "empty", errors: [] }
  } else {
    return { state: "invalid", errors: ["You need to provide a valid URL."] }
  }
}

const dateValidator = function(value) {
  if (validator.isISO8601(value)) {
    return { state: "valid", errors: [] }
  } else if (value.length == 0) {
    return { state: "empty", errors: [] }
  } else {
    return { state: "invalid", errors: ["You need to provide a valid date in the format YYYY-MM-DD."] }
  }
}

const enumValidator = function(values) {
  return function(value) {
    if (validator.isIn(value, values)) {
      return { state: "valid", errors: [] }
    } else if (value.length == 0) {
      return { state: "empty", errors: [] }
    } else {
      return { state: "invalid", errors: ["The selected value is invalid."] }
    }
  }
}

const multipleSelectValidator = function(values) {
  return function(selectedValues) {
    if (selectedValues.length == 0) {
      return { state: "empty", errors: [] };
    }

    state = "valid";
    errors = [];

    for (var n in selectedValues) {
      var value = selectedValues[n];
      if (!validator.isIn(value, values)) {
        state = "invalid";
        errors.push("The selected option \"" + value + "\" is invalid.");
      }
    }

    return { state: state, errors: errors };
  }
}

//
// Model
//

const SignupModel = function() {
  this.firstName = new Field(required, {
    name: "firstName",
    label: "First name",
    placeholder: "Your first name"
  });
  this.lastName = new Field(required, {
    name: "lastName",
    label: "Last name",
    placeholder: "Your last name"
  });
  this.email = new Field(and(required, emailValidator), {
    type: "email",
    name: "email",
    label: "E-mail address",
    placeholder: "Your private e-mail address"
  });
  const sexOptions = {
    male: "Male",
    female: "Female",
    other: "Other",
    preferNotToSay: "Prefer not to say"
  };
  this.sex = new Field(and(required, enumValidator(Object.keys(sexOptions))), {
    tag: "RadioGroup",
    name: "sex",
    label: "Sex",
    options: sexOptions
  });
  this.birthday = new Field(and(required, dateValidator), {
    type: "date",
    name: "birthday",
    label: "Birthday",
    placeholder: "Your birthday"
  });
  this.nationalities = new Field(and(required, multipleSelectValidator(Object.keys(countries))), {
    tag: "Select",
    name: "nationalities",
    label: "Nationalities",
    multiple: true,
    notes: ['You can select multiple options by holding the Ctrl key (on Windows or Linux) or Cmd key (on Mac) while clicking.'],
    options: countries
  });
  const categoryOptions = {
    alumni: "Alumni (former student)",
    faculty: "Faculty",
    staff: "Staff",
    hostFamily: "Host family",
    other: "Friend of the association"
  };
  this.category = new Field(and(required, enumValidator(Object.keys(categoryOptions))), {
    tag: "RadioGroup",
    name: "category",
    label: "Category",
    options: categoryOptions
  });

  this.addressLine1 = new Field(required, {
    name: "addressLine1",
    label: "Address line 1",
    placeholder: "E.g. Campus Ring 1"
  });
  this.addressLine2 = new Field(optional, {
    name: "addressLine2",
    label: "Address line 2",
    placeholder: "e.g. Apt 007 (optional)"
  });
  this.addressCity = new Field(required, {
    name: "addressCity",
    label: "City",
    placeholder: "e.g. Bremen"
  });
  this.addressZipCode = new Field(required, {
    name: "addressZipCode",
    label: "Zip code",
    placeholder: "e.g. 28759"
  });
  this.addressState = new Field(optional, {
    name: "addressState",
    label: "State",
    placeholder: "e.g. Bremen (optional)"
  });
  this.addressCountry = new Field(required, {
    tag: "Select",
    name: "addressCountry",
    label: "Country",
    options: countries
  });

  this.facebook = new Field(and(optional, urlValidator), {
    type: "url",
    name: "facebook",
    label: "Facebook",
    placeholder: "Your Facebook URL (optional)",
    required: false
  });
  this.twitter = new Field(and(optional, urlValidator), {
    type: "url",
    name: "twitter",
    label: "Twitter",
    placeholder: "Your Twitter URL (optional)",
    required: false
  });
  this.linkedIn = new Field(and(optional, urlValidator), {
    type: "url",
    name: "linkedIn",
    label: "LinkedIn",
    placeholder: "Your LinkedIn URL (optional)",
    required: false
  });
  this.instagram = new Field(and(optional, urlValidator), {
    type: "url",
    name: "instagram",
    label: "Instagram",
    placeholder: "Your Instagram URL (optional)",
    required: false
  });
  this.website = new Field(and(optional, urlValidator), {
    type: "url",
    name: "website",
    label: "Homepage / Blog",
    placeholder: "The URL of your homepage / blog (optional)",
    required: false
  });

  const collegeOptions = {
    krupp: "Krupp",
    mercator: "Mercator",
    ciii: "CIII",
    nordmetall: "Nordmetall",
    "n/a": "n/a"
  };
  this.college = new Field(and(required, multipleSelectValidator(Object.keys(collegeOptions))), {
    tag: "Select",
    name: "college",
    label: "College",
    multiple: true,
    notes: ['You can select multiple options by holding the Ctrl key (on Windows or Linux) or Cmd key (on Mac) to select multiple entries.'],
    options: collegeOptions
  });
  const graduationClassOptions = {
    2004: 2004,
    2005: 2005,
    2006: 2006,
    2007: 2007,
    2008: 2008,
    2009: 2009,
    2010: 2010,
    2011: 2011,
    2012: 2012,
    2013: 2013,
    2014: 2014,
    2015: 2015,
    2016: 2016,
    2017: 2017,
    "n/a": "n/a"
  };
  this.graduationClass = new Field(and(required, enumValidator(Object.keys(graduationClassOptions))), {
    tag: "Select",
    name: "graduationClass",
    label: "Class (first graduation)",
    options: graduationClassOptions
  });
  const degreeOptions = {
    ba: "B.A.",
    bsc: "B.Sc.",
    ma: "M.A.",
    msc: "M.Sc.",
    phd: "Ph.D.",
    mba: "MBA",
    "n/a": "n/a"
  };
  this.degree = new Field(and(required, enumValidator(Object.keys(degreeOptions))), {
    tag: "Select",
    name: "degree",
    label: "Degree",
    options: degreeOptions
  });
  this.majors = new Field(and(required, multipleSelectValidator(Object.keys(majors))), {
    tag: "Select",
    name: "majors",
    label: "Majors",
    multiple: true,
    notes: ['You can select multiple options by holding the Ctrl key (on Windows or Linux) or Cmd key (on Mac) to select multiple entries.'],
    options: majors
  });
  this.includeOnAlumniMap = new Field(optional, {
    tag: "CheckBox",
    name: "includeOnAlumniMap",
    label: "Include me on the Alumni map",
    notes: ["Please include me on the global alumni map, which will be visible to registered alumni graduates (former students) only, so I can enjoy all functions of AlmaLink and find Alumni in my city or company. This feature is currently in the works."]
  });

  this.employer = new Field(optional, {
    name: "employer",
    label: "Employer",
    placeholder: "Your employer (optional)"
  });
  this.position = new Field(optional, {
    name: "position",
    label: "Position",
    placeholder: "Your position (optional)"
  });
  this.industry = new Field(and(optional, enumValidator(Object.keys(industries))), {
    tag: "Select",
    name: "industry",
    label: "Industry",
    options: industries
  });
  this.jobField = new Field(and(optional, enumValidator(Object.keys(jobFields))), {
    tag: "Select",
    name: "jobField",
    label: "Job field",
    options: jobFields
  });
  this.listAsContactForStudents = new Field(optional, {
    tag: "CheckBox",
    name: "listAsContactForStudents",
    label: "",
    notes: ["I want to be listed as a contact for students who want to join my field."]
  });

  this.subscriptionPlan = new Field(required, {
  });

  this.starterPlanReason = new Field(optional, {
    tag: "Textarea",
    name: "starterPlanReason",
    label: "Reason for applying for the starter plan",
    placeholder: "Please provide a reason for applying for the starter plan.",
  });

  this.agreeTermsConditions = new Field(required, {
    tag: "CheckBox",
    name: "agreeTermsConditions",
    label: "Agree to Terms & Conditions",
    notes: [(
      <div>
        <p>
          By clicking the “Submit your membership application” button, you give your consent for Jacobs University Bremen Alumni Association e.V. (“JUBAA”) to save and use the data you disclose in connection with your user account (see list of data in the Privacy Policy)
        </p>
        <ul>
          <li>to ensure that you can be found through the website’s search function by other registered users (only alumni graduates, not associate members), using your work and home location (geolocation) if necessary,</li>
          <li>and to enable other registered users to contact you for networking purposes.</li>
        </ul>
        <p>
          You further give your consent for both JUBAA and Jacobs University Bremen to save and use this data
        </p>
        <ul>
          <li>to contact you themselves for networking purposes</li>
          <li>and to inform you by e-mail or post about events, surveys, fundraising campaigns and other subjects relating to Jacobs University Bremen.</li>
        </ul>
        <p>
          You give your consent for JUBAA to forward your data - with the exception of your payment data – to Jacobs University Bremen for that purpose.
        </p>
      </div>
    )]
  });
}

//
// Components
//

module.exports = function(props, children) {
  var props = props || {}

  const model = new SignupModel();

  const validatePage1 = function() {
    return (
      (model.firstName.state == "valid") &&
      (model.lastName.state == "valid") &&
      (model.sex.state == "valid") &&
      (model.birthday.state == "valid") &&
      (model.email.state == "valid") &&
      (model.address.state == "valid") &&
      (model.nationalities.state == "valid") &&
      (model.category.state == "valid") &&
      (model.facebook.state != "invalid") &&
      (model.twitter.state != "invalid") &&
      (model.linkedIn.state != "invalid") &&
      (model.instagram.state != "invalid") &&
      (model.website.state != "invalid")
    )
  }
  const validatePage2 = function() {
    return (
      (model.college.state == "valid") &&
      (model.graduationClass.state == "valid") &&
      (model.degree.state == "valid") &&
      (model.majors.state == "valid") &&
      (model.includeOnAlumniMap.state != "invalid")
    )
   }
  const validatePage3 = function() {
    return (
      (model.employer.state != "invalid") &&
      (model.position.state != "invalid") &&
      (model.industry.state != "invalid") &&
      (model.jobField.state != "invalid") &&
      (model.listAsContactForStudents.state != "invalid")
    )
  }
  const validatePage4 = function() {
    return true;
  }
  const validatePage5 = function() {
    return model.agreeTermsConditions == "valid"
  }

  const updateNextButtons = function() {
    $("#nextStep1Button").prop("disabled", !validatePage1());
    $("#nextStep2Button").prop("disabled", !validatePage2());
    $("#nextStep3Button").prop("disabled", !validatePage3());
    $("#nextStep4Button").prop("disabled", !validatePage4());
    $("#submitButton").prop("disabled", !(
      validatePage1() &&
      validatePage2() &&
      validatePage3() &&
      validatePage4() &&
      validatePage5()));
    $("#submitPayButton").prop("disabled", !(
      validatePage1() &&
      validatePage2() &&
      validatePage3() &&
      validatePage4() &&
      validatePage5()));
  }

  const updateForm = function() {
    // If not an alumnus, disable starter option, appropriate hint
    var isAlumnus = (model.category.value === "alumni");
    var isLessThan2YearsSinceGraduation = (["2016", "2017"].indexOf(model.graduationClass.value !== -1));
    // var starterPlanEligible = (isAlumnus && isLessThan2YearsSinceGraduation)

    if (!isAlumnus) {
      $("#starterPlanButton")
        .prop("disabled", true)
        .hide();
      $("#starterPlanReasonFieldWrapper").hide();
      $("#starterPlanComment")
        .show()
        .text("Unfortunately, you are not eligable for this plan.");

      $("#contributorPlanComment, #patronPlanComment")
        .hide()
        .text("");
    } else {
      $("#starterPlanButton")
        .prop("disabled", model.starterPlanReason.state !== "valid")
        .show();
      $("#starterPlanReasonFieldWrapper").show();
      $("#starterPlanComment")
        .hide()
        .text("");

      if (isLessThan2YearsSinceGraduation) {
        $("#contributorPlanComment, #patronPlanComment")
          .show()
          .text("As your graduation is less than 2 years ago, your free starter period of up to 2 years will automatically be applied. Billing of your membership fees will start when your starter period expires.");
      } else {
        $("#contributorPlanComment, #patronPlanComment")
          .hide()
          .text("");
      }
    }

    var text = '';

    if (model.subscriptionPlan.value == 'starter') {
      text = "You have selected the starter plan. You will not pay any membership fees today, but we will review your application and contact you, if there are any issues. Your starter plan status will be valid for one year, after which we will ask you to upgrade your membership plan or you can submit another request for free membership.";
    } else {
      var plan = '';
      var amount = '';
      if (model.subscriptionPlan.value == "contributor") {
        plan = "Contributor"
        amount = "39,00 EUR"
      } else if (model.subscriptionPlan.value == "patron") {
        plan = "Patron"
        amount = "249,00 EUR"
      }
      text = "You have selected the " + plan + " plan.";

      if (isAlumnus && isLessThan2YearsSinceGraduation) {
        if (model.graduationClass.value == "2017") {
          freeMembershipDuration = "2 years";
        } else if (model.graduationClass.value == "2016") {
          freeMembershipDuration = "1 year";
        } else {
          freeMembershipDuration = "6 months";
        }

        text = text + " Since you graduated from Jacobs University Bremen in " + model.graduationClass.value + ", you get " + freeMembershipDuration + " free membership, after which your membership fee of " + amount + " is billed yearly."
      } else {
        text = text + " Your membership fee of " + amount + " is due immediately and will be billed yearly."
      }
    }

    $("#submissionAlert").text(text);
  }

  const showForm = stepHandler(1);
  const prevStep1 = stepHandler(0);
  const nextStep1 = stepHandler(2, validatePage1);
  const prevStep2 = stepHandler(1);
  const nextStep2 = stepHandler(3, validatePage2);
  const prevStep3 = stepHandler(2);
  const nextStep3 = stepHandler(4, validatePage3);
  const prevStep4 = stepHandler(3);
  const nextStep4 = stepHandler(5, validatePage4);
  const prevStep5 = stepHandler(4);

  const submitApplication = function(e) {
    e.preventDefault();
    console.log(model);
    stepHandler(6)(e);
    return false;
  }

  const changeHandler = function(formElement, id, updateFn) {
    return function(e) {
      // formElement.field.update(e.target.value);
      updateFn(formElement, e.target);

      const targetInput = $("#signup-form #" + id + " .uk-form-controls");
      const targetAlerts = $("#signup-form #" + id + " ul.alerts");
      var children = targetInput.children()
      var len = targetInput.children().length;
      for (var i = 0; i < len; i++) {
        var child = children[i]

        if (formElement.state == "valid") {
          $(child).removeClass("uk-form-danger").addClass("uk-form-success");
        } else if (formElement.state == "invalid") {
          $(child).removeClass("uk-form-success").addClass("uk-form-danger");
        } else if (formElement.state == "empty") {
          $(child).removeClass("uk-form-success").removeClass("uk-form-danger");
        }
      }

      targetAlerts.html(
        (formElement.formMetadata.notes || []).map(function(e) { return '<li>' + e + '</li>' }).concat(
          formElement.errors.map(function(e) { return '<li class="uk-text-danger">' + e + '</li>' })).join(''));

      updateNextButtons();
      updateForm();
    }
  }

  const simpleChangeHandler = function(formElement, id) {
    return changeHandler(formElement, id, function(field, target) {
      field.update(target.value)
    })
  }

  const multipleSelectChangeHandler = function(formElement, id) {
    return changeHandler(formElement, id, function(field, target) {
      var selectedValues = []
      for (var i in target.options) {
        var opt = target.options[i]
        if (opt.selected) {
          selectedValues.push(opt.value)
        }
      }
      field.update(selectedValues)
    })
  }

  const checkBoxChangeHandler = function(formElement, id) {
    return changeHandler(formElement, id, function(field, target) {
      field.update(target.checked)
    })
  }

  const selectPlanHandler = function(plan) {
    return function(e) {
      e.preventDefault();
      if (["starter", "contributor", "patron"].indexOf(plan) === -1) {
        console.log("unexpected plan");
        return
      }

      model.subscriptionPlan.update(plan);
      updateNextButtons();
      updateForm();
      nextStep4(e);
    }
  }

  const FieldInput = function(props, children) {
    var tag = props.data.formMetadata.tag || "Input";
    var id = props.data.formMetadata.id || props.data.formMetadata.name + "Field";
    if (tag == "Input") {
      return <Input
        id={ id }
        alerts={ props.data.formMetadata.notes }
        type={ props.data.formMetadata.type || "text" }
        name={ props.data.formMetadata.name }
        label={ props.data.formMetadata.label }
        placeholder={ props.data.formMetadata.placeholder || props.data.formMetadata.label }
        on={{
          keyup: simpleChangeHandler(props.data, id),
          change: simpleChangeHandler(props.data, id),
          blur: simpleChangeHandler(props.data, id) }} />;
    } else if (tag == "Textarea") {
      return <Textarea
        id={ id }
        alerts={ props.data.formMetadata.notes }
        name={ props.data.formMetadata.name }
        label={ props.data.formMetadata.label }
        placeholder={ props.data.formMetadata.placeholder || props.data.formMetadata.label }
        on={{
          keyup: simpleChangeHandler(props.data, id),
          change: simpleChangeHandler(props.data, id),
          blur: simpleChangeHandler(props.data, id) }} />;
    }else if (tag == "RadioGroup") {
      return <RadioGroup
        id={ id }
        alerts={ props.data.formMetadata.notes }
        name={ props.data.formMetadata.name }
        label={ props.data.formMetadata.label }
        options={ props.data.formMetadata.options }
        on={{
          keyup: simpleChangeHandler(props.data, id),
          change: simpleChangeHandler(props.data, id),
          blur: simpleChangeHandler(props.data, id) }} />;
    }
    else if (tag == "Select") {
      if (props.data.formMetadata.multiple === true) {
        return <Select
          id={ id }
          alerts={ props.data.formMetadata.notes }
          name={ props.data.formMetadata.name }
          label={ props.data.formMetadata.label }
          multiple={ props.data.formMetadata.multiple || false }
          options={ props.data.formMetadata.options }
          on={{
            keyup: multipleSelectChangeHandler(props.data, id),
            change: multipleSelectChangeHandler(props.data, id),
            blur: multipleSelectChangeHandler(props.data, id) }} />;
      }
      else {
        return <Select
          id={ id }
          alerts={ props.data.formMetadata.notes }
          name={ props.data.formMetadata.name }
          label={ props.data.formMetadata.label }
          multiple={ props.data.formMetadata.multiple || false }
          options={ props.data.formMetadata.options }
          on={{
            keyup: simpleChangeHandler(props.data, id),
            change: simpleChangeHandler(props.data, id),
            blur: simpleChangeHandler(props.data, id) }} />;
      }
    }
    else if (tag == "CheckBox") {
      return <CheckBox
        id={ id }
        alerts={ props.data.formMetadata.notes }
        name={ props.data.formMetadata.name }
        label={ props.data.formMetadata.label }
        on={{
          keyup: checkBoxChangeHandler(props.data, id),
          change: checkBoxChangeHandler(props.data, id),
          blur: checkBoxChangeHandler(props.data, id) }} />;
    }
  }

  return (
    <article class="uk-article">
      <div id="pre-signup">
        <h1 class="uk-article-title">Join the Jacobs Alumni Association</h1>

        <div id="intro">
          <p class="uk-text-lead">
            In order to become a member of the association, you need to provide some personal information about yourself, which will require 5 to 10 minutes of your time.
          </p>
          <p class="uk-text-lead">
            Students of the current graduating class can enjoy up to two years free membership, students of the previous graduating class can enjoy up to one years free membership and all other new alumni members enjoy 6 months free membership.
          </p>
          <div class="uk-margin">
            <a class="uk-button uk-button-primary" href="" on={{ click: showForm }}>Get started</a>
          </div>
        </div>

        <div id="signup-form" class="uk-hidden">
          <form class="uk-form" on={{ submit: function(e){ e.preventDefault(); return false; }}}>
            <fieldset id="form-step-1" class="uk-fieldset uk-margin uk-hidden">
              <legend class="uk-legend uk-margin-bottom">
                Step 1 of 4: General information
                <span class="uk-text-muted"> - just the basics</span>
              </legend>

              <FieldInput data={ model.firstName } />
              <FieldInput data={ model.lastName } />
              <FieldInput data={ model.email } />
              <FieldInput data={ model.sex } />
              <FieldInput data={ model.birthday } />
              <FieldInput data={ model.nationalities } />
              <FieldInput data={ model.category } />

              <h3>Residential Address</h3>
              <FieldInput data={ model.addressLine1 } />
              <FieldInput data={ model.addressLine2 } />
              <FieldInput data={ model.addressCity } />
              <FieldInput data={ model.addressZipCode } />
              <FieldInput data={ model.addressState } />
              <FieldInput data={ model.addressCountry } />

              <h3>Social media</h3>
              <FieldInput data={ model.facebook } />
              <FieldInput data={ model.twitter } />
              <FieldInput data={ model.linkedIn } />
              <FieldInput data={ model.instagram } />
              <FieldInput data={ model.website } />

              <div class="uk-margin uk-grid uk-child-width-expand" uk-grid>
                <div>
                  <button class="uk-button uk-button-default" on={{ click: prevStep1 }}>Previous</button>
                </div>
                <div style={{ textAlign: "right" }}>
                  <button id="nextStep1Button" class="uk-button uk-button-primary" on={{ click: nextStep1 }} disabled>Continue</button>
                </div>
              </div>
            </fieldset>

            <fieldset id="form-step-2" class="uk-fieldset uk-margin uk-hidden">
              <legend class="uk-legend uk-margin-bottom">
                Step 2 of 4: Alumni data
                <span class="uk-text-muted"> - tell us about what you did @ jacobs</span>
              </legend>

              <FieldInput data={ model.college } />
              <FieldInput data={ model.graduationClass } />
              <FieldInput data={ model.degree } />
              <FieldInput data={ model.majors } />
              <FieldInput data={ model.includeOnAlumniMap } />
              { /* furtherDegrees */ }

              <div class="uk-margin uk-grid uk-child-width-expand" uk-grid>
                <div>
                  <button class="uk-button uk-button-default" on={{ click: prevStep2 }}>Previous</button>
                </div>
                <div style={{ textAlign: "right" }}>
                  <button id="nextStep2Button" class="uk-button uk-button-primary" on={{ click: nextStep2 }} disabled>Continue</button>
                </div>
              </div>
            </fieldset>

            <fieldset id="form-step-3" class="uk-fieldset uk-margin uk-hidden">
              <legend class="uk-legend uk-margin-bottom">
                Step 3 of 4: Employer information
                <span class="uk-text-muted"> - tell us what you do</span>
              </legend>

              <FieldInput data={ model.employer } />
              <FieldInput data={ model.position } />
              <FieldInput data={ model.industry } />
              <FieldInput data={ model.jobField } />
              <FieldInput data={ model.listAsContactForStudents } />

              <div class="uk-margin uk-grid uk-child-width-expand" uk-grid>
                <div>
                  <button class="uk-button uk-button-default" on={{ click: prevStep3 }}>Previous</button>
                </div>
                <div style={{ textAlign: "right" }}>
                  <button id="nextStep3Button" class="uk-button uk-button-primary" on={{ click: nextStep3 }} disabled>Continue</button>
                </div>
              </div>
            </fieldset>

            <fieldset id="form-step-4" class="uk-fieldset uk-margin uk-hidden">
              <legend class="uk-legend uk-margin-bottom">
                Step 4 of 4: Choose your membership plan
                <span class="uk-text-muted"> - { 'it\'s all about the network' }</span>
              </legend>

              <p class="uk-margin-remove">
                Your contributions make the association a rapidly growing and autonomous organisation that will make a difference to our alma mater as well as our network via scholarships, direct alumni support and many more projects we have in our pipeline! Alumni membership can be deducted from (German) taxes and for further information on the contribution model just follow <a href="https://docs.google.com/presentation/d/19guVw-fBrtHWBJ9Ejq8n73C7wU7zlCMURn943qwlka4/edit?usp=sharing" target="_blank">this link</a>.
              </p>
              <p class="uk-text-bold">
                It works because of your support!
              </p>

              <div class="uk-grid uk-grid-small uk-grid-match uk-child-width-1-2@s" uk-grid>
                <div>
                  <div class="uk-card uk-card-default uk-card-small uk-card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div class="uk-card-badge uk-label">39,00 € / year</div>
                    <div class="fill">
                      <div class="uk-card-header">
                        <h3 class="uk-card-title">
                          Contributor
                        </h3>
                      </div>
                      <p>
                        Ideal for young alumni and associate members, who are part of our network! You contribute to the development and growth of the association and its alumni.
                      </p>
                      <p>
                        Get the value of this membership for the cost of just one Jacobs coffee per month:
                      </p>
                      <ul>
                        <li>
                          Stay involved with the university, other alumni and current students while finding valuable business contacts through the Alumni Network.
                        </li>
                        <li>
                          Google account with e-mail, apps and unlimited storage.
                        </li>
                        <li>
                          Find Alumni in your city, class or company on our online platform.
                        </li>
                        <li>
                          Lifelong learning and career services in collaboration with the university.
                        </li>
                        <li>
                          Job and networking opportunities.
                        </li>
                        <li>
                          Continuously growing Alumni network with homecomings, chapters and other events.
                        </li>
                        <li>
                          Relive the fun times you had with your friends at reunions on campus.
                        </li>
                      </ul>
                    </div>
                    <div class="uk-card-footer uk-padding-remove-left uk-padding-remove-right">
                      <div id="contributorPlanComment" class="uk-alert" uk-alert></div>
                      <button id="contributorPlanButton" class="uk-button uk-button-primary uk-width-1-1" on={{ click: selectPlanHandler("contributor") }}>
                        Select Contributor Plan
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="uk-card uk-card-default uk-card-small uk-card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div class="uk-card-badge uk-label uk-secondary">249,00 € / year</div>
                    <div class="fill">
                      <div class="uk-card-header">
                        <h3 class="uk-card-title">
                          Patron
                        </h3>
                      </div>
                      <p>
                        Our membership for alumni and friends who have made it and want to give back even more and see the Jacobs spirit grow!
                      </p>
                      <ul>
                        <li>
                          Includes all of the benefits of the Contributor Membership.
                        </li>
                        <li>
                          Engraved Jacobs Alumni Brick and special mention.
                        </li>
                        <li>
                          Enable the Alumni Association to help young and future alumni grow and really make a difference in their lives.
                        </li>
                        <li>
                          Be one of a very few generous Alumni Patrons!
                        </li>
                      </ul>
                    </div>
                    <div class="uk-card-footer uk-padding-remove-left uk-padding-remove-right">
                      <div id="patronPlanComment" class="uk-alert" uk-alert></div>
                      <button id="patronPlanButton" class="uk-button uk-button-primary uk-width-1-1" on={{ click: selectPlanHandler("patron") }}>
                        Select Patron Plan
                      </button>
                    </div>
                  </div>
                </div>

                <div class="uk-width-1-1">
                  <div class="uk-card uk-card-small uk-card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div class="uk-card-badge uk-label uk-background-muted uk-text-muted">free</div>
                    <div class="fill">
                      <div class="uk-card-header">
                        <h3 class="uk-card-title">
                          Starter
                        </h3>
                      </div>
                      <p>
                        If you are a graduate and can not afford our membership contributions but would still like to be a member
                      </p>
                      <ul>
                        <li>
                          You get this powerful membership for free for a year.
                        </li>
                        <li>
                          All the perks of the contributor membership are included in this special offer for you too!
                        </li>
                        <li>
                          Get connected with our senior alumni, be it virtually or in a city near you.
                        </li>
                      </ul>
                    </div>

                    <div id="starterPlanReasonFieldWrapper" class="uk-form-controls">
                      <label class="">{ model.starterPlanReason.formMetadata.placeholder }</label>
                      <textarea
                        id="starterPlanReasonField"
                        class="uk-input"
                        placeholder={model.starterPlanReason.formMetadata.placeholder}
                        on={{
                          keyup: simpleChangeHandler(model.starterPlanReason, "starterPlanReasonField"),
                          change: simpleChangeHandler(model.starterPlanReason, "starterPlanReasonField"),
                          blur: simpleChangeHandler(model.starterPlanReason, "starterPlanReasonField") }}>
                      </textarea>
                    </div>

                    { /* <FieldInput data={ model.starterPlanReason } /> */ }

                    <div class="uk-card-footer uk-padding-remove-left uk-padding-remove-right">
                      <div id="starterPlanComment" class="uk-alert" uk-alert>Unfortunately, you are not eligable for this plan.</div>
                      <button id="starterPlanButton" class="uk-button uk-button-default" on={{ click: selectPlanHandler("starter") }}>
                        Select Starter Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="uk-margin uk-grid uk-child-width-expand" uk-grid>
                <div>
                  <button class="uk-button uk-button-default" on={{ click: prevStep4 }}>Previous</button>
                </div>
              </div>
            </fieldset>

            <fieldset id="form-step-5" class="uk-fieldset uk-margin uk-hidden">
              <legend class="uk-legend uk-margin-bottom">
                Submission, Terms & Condition & Payment
              </legend>

              <FieldInput data={ model.agreeTermsConditions } />

              <div id="submissionAlert" class="uk-alert" uk-alert></div>
              <div id="submissionErrorAlert" class="uk-alert uk-alert-danger uk-hidden" uk-alert></div>

              <div class="uk-margin uk-grid uk-child-width-expand" uk-grid>
                <div>
                  <button class="uk-button uk-button-default" on={{ click: prevStep5 }}>Previous</button>
                </div>
                <div style={{ textAlign: "right" }}>
                  <button id="submitButton" class="uk-button uk-button-primary" on={{ click: submitApplication }} disabled>Submit your membership application</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <div id="signup-complete" class="uk-hidden">
        <h1>Welcome to the Jacobs Alumni Association!</h1>
        <p class="uk-text-lead">
          <strong>Thank you for joining us. We're excited to have you as part of our growing community of Jacobs alumni.</strong>
        </p>
        <h2>Important next steps</h2>
        <p>
          You should receive a welcome email from us with your Jacobs Alumni email address and a temporary password. If you can't find either email, please check your SPAM folder. If you haven't received anything, please let us know at <a href="mailto:support@jacobs-alumni.de">support@jacobs-alumni.de</a> and we will investigate the issue.
        </p>
        <p>
          Once you have received your email credentials from Google, please go to <Link href="http://mail.jacobs-alumni.de/">http://mail.jacobs-alumni.de/</Link> and log in with the credentials you have received.
        </p>
        <p>
          Then choose a new, secure account password <strong>and note it somewhere</strong>. (We recommend using a password manager. Most password managers can generate a strong, random password for you, save it and synchronise it between your devices.)
        </p>
        <p>
          Google will also ask you to <strong>set up a recovery phone number</strong> to recover your account access if you ever forget your password. <strong>This is important, because if you don't, we have to personally do it and as we are all volunteers, it will cause unnecessary work for us and an annoying delay for you.</strong>
        </p>
        <p>
          With your Jacobs Alumni Google account, you can also access the <strong>Google Drive with unlimited storage</strong> at <Link href="https://drive.google.com">https://drive.google.com</Link>. For help on how to set up and use Google Drive, please check the <Link href="https://support.google.com/drive/?hl=en">Google Drive help</Link>.
        </p>
        <p>
          For setting up your alumni email address in your email client and devices, please refer to the respective help section for your client / device. Many clients provide a special setup option for Google accounts, which you can use to set up your Jacobs Alumni email. For help and instructions for various clients see:
        </p>
        <ul>
          <li><Link href="https://support.office.com/en-us/article/Import-Gmail-to-Outlook-20fdb8f2-fed8-4b14-baf0-bf04b9c44bf7">Outlook</Link></li>
          <li><Link href="https://support.apple.com/mail">Apple Mail on Mac OS X and iOS</Link></li>
          <li><Link href="https://support.google.com/a/users/answer/1738362?hl=en">Android</Link></li>
          <li><Link href="https://support.mozilla.org/en-US/kb/thunderbird-and-gmail">Thunderbolt</Link></li>
        </ul>
        <p>
          Also, please check out and join our <Link href="https://www.facebook.com/groups/119890224726756/">Jacobs Alumni Facebook Group</Link>, if you haven't done so already, and the various groups of our Alumni chapters all over the world.
        </p>
        <p>
          Using your Alumni Google Account, you can also log in on our website, for example to purchase tickets for Homecoming. We are also always working hard on adding new features to the site. If you have any ideas and want to get involved, reach out to us anytime.
        </p>
        <p>
          If you have any questions or problems, let us know at <a href="mailto:support@jacobs-alumni.de">support@jacobs-alumni.de</a> or on Facebook.
        </p>
        <p class="uk-text-lead">
          <strong>Finally, thanks again for joining us and welcome to the Jacobs Alumni Association!</strong>
        </p>
      </div>
    </article>
  )
}
