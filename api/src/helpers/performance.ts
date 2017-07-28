
import now = require("performance-now");

export function performance(req: any, res: any, next: any) {
  const dateTime = new Date(Date.now());
  const start = now();

  next();

  const end = now();
  console.log(`${res.statusCode} ${req.method} ${req.url} ${String((end - start).toFixed(3)) + 'ms'} ${dateTime}`);
}
