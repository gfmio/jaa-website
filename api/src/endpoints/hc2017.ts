
import { JaaApi } from "../server";

interface ITicketModel {
  basicAmount: number;
  halfAmount: number;
  fullAmount: number;
  brunchAmount: number;
}

class TicketModel implements ITicketModel {
  public basicAmount: number = 0;
  public halfAmount: number = 0;
  public fullAmount: number = 0;
  public brunchAmount: number = 0;

  constructor(props: Partial<ITicketModel>) {
    this.basicAmount = props.basicAmount || this.basicAmount;
    this.halfAmount = props.halfAmount || this.halfAmount;
    this.fullAmount = props.fullAmount || this.fullAmount;
    this.brunchAmount = props.brunchAmount || this.brunchAmount;
  }

  public calcPrice() {
    return this.basicAmount * 15 +
           this.halfAmount * 45 +
           this.fullAmount * 75 +
           this.brunchAmount * 10;
  }

  public description() {
    const ticketStrings = [];
    if (this.basicAmount > 0) {
      ticketStrings.push(this.basicAmount.toString() + "x Basic");
    }
    if (this.halfAmount > 0) {
      ticketStrings.push(this.halfAmount.toString() + "x Half");
    }
    if (this.fullAmount > 0) {
      ticketStrings.push(this.fullAmount.toString() + "x Full");
    }
    if (this.brunchAmount > 0) {
      ticketStrings.push(this.brunchAmount.toString() + "x Brunch Only");
    }

    return "Homecoming tickets \n(" + ticketStrings.join(", ") + ")";
  }
}

export function registerHC2017Endpoint(api: JaaApi) {
  api.app.post("/buy-hc2017-tickets", (req: any, res: any) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const token = req.body.stripeToken || "";
    const email = req.body.email || "";

    const tickets = new TicketModel({
      basicAmount: Number(req.body["tickets[basicAmount]"]) || 0,
      halfAmount: Number(req.body["tickets[halfAmount]"]) || 0,
      fullAmount: Number(req.body["tickets[fullAmount]"]) || 0,
      brunchAmount: Number(req.body["tickets[brunchAmount]"]) || 0,
    });

    const chargeObj = {
      amount: tickets.calcPrice() * 100,
      currency: "eur",
      description: tickets.description(),
      receipt_email: email,
      source: token,
    };

    api.stripe.charges.create(chargeObj, (err: any, charge: any) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({});
        // res.status(200).json(charge);
      }
    });
  });
}
