
import google = require("googleapis");

class Google {
  public service: any;

  constructor() {
    this.service = google.admin("directory_v1");
    // this.auth = undefined;
  }

  public addUser() {
    // ...
  }
}
