
import now = require("performance-now");
import { JaaApi } from "../server";

export function performance(api: JaaApi) {
  return (req: any, res: any, next: any) => {
    const dateTime = new Date(Date.now());
    const start = now();

    next();

    const end = now();
    api.log(`${res.statusCode} ${req.method} ${req.url} ${String((end - start).toFixed(3))}ms ${dateTime}`);
  };
}
