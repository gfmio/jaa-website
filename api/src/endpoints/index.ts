
import { JaaApi } from "../server";

import { registerHC2017Endpoint } from "./hc2017";
import { registerUserSignupEndpoint } from "./signup";

export function registerEndpoints(api: JaaApi) {
  registerHC2017Endpoint(api);
  registerUserSignupEndpoint(api);
}
