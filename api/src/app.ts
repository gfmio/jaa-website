
import { JaaApi } from "./server";
import { PassportGoogleStrategy } from "./config/passport"

(() => (new JaaApi({
  http: {
    enabled: true,
  },
  passport: {
    strategies: [
      new PassportGoogleStrategy({
        authOptions: {
          hd: "jacobs-alumni.de",
          scope: ["profile", "email"],
        },
        config: {
          callbackURL: "http://localhost:3001/login/google/return",
          clientID: "1002114963762-2hpna88s87t7qntgg3sq34rm4f1luoa0.apps.googleusercontent.com",
          clientSecret: "YwAjtTXFPJdgRSc11bT8l4wR",
        },
      }),
    ],
  },
})).main())();
