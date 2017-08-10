
const google = require("googleapis");
import generatePassword = require("password-generator");

export interface IGoogleUserProps {
  name: {
    givenName: string,
    familyName: string,
  };
}

export class GoogleUser {
  public name: {
    givenName: string,
    familyName: string,
    fullName: string,
  };
  public primaryEmail: string;

  public hashFunction: string = "SHA-1";
  public password: string;
  public changePasswordAtNextLogin: boolean = true;

  constructor(props: IGoogleUserProps, service: any) {
    this.name = {
      familyName: props.name.familyName,
      fullName: props.name.givenName + " " + props.name.familyName,
      givenName: props.name.givenName,
    };

    this.primaryEmail = "";
    this.password = "";
    this.generateEmail(service);
    this.generatePassword();
  }

  public generateEmail(service: any, n?: number) {
    const suggestedEmail = this.name.givenName.slice(0,1) + this.name.familyName + (n === undefined ? "" : n.toString()) + "@jacobs-alumni.de";
    service.users.get({ userKey: suggestedEmail }, (result: any) => {
      // console.log(result);
      this.primaryEmail = suggestedEmail;
    });
  }

  public generatePassword() {
    this.password = generatePassword(12, false);
  }
}

export class Google {
  public service: any;

  constructor() {
    this.service = google.admin("directory_v1");
    // this.auth = undefined;
  }

  public addUser(userProps: IGoogleUserProps) {
    const user = new GoogleUser(userProps, this.service);
    console.log(user);
    this.service.users.insert(user, (result: any) => {
      // console.log(result);
    });
  }
}

// $name = new \Google_Service_Directory_UserName();
//             $name->setGivenName($this->_user->first_name);
//             $name->setFamilyName($this->_user->last_name);

//             $user = new \Google_Service_Directory_User();
//             $user->setName($name);
//             $user->setHashFunction("SHA-1");
//             $user->setPrimaryEmail($generated_alumni_email);
//             $user->setPassword(hash("sha1", $this->_user->raw_password));
//             if (!empty($this->_user->email)) {
//                 $user->setEmails(array($this->_user->email));
//             }
