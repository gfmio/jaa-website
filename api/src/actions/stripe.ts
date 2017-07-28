
import stripeLib = require('stripe');

class Stripe {
  constructor(apiKey) {
    this.stripe = stripeLib(apiKey);
  }

  public createCharge(amount, currency, customer, callback) {
    stripe.charges.create({
      amount,
      currency,
      customer: customer.id,
    }, function(err, charge) {
      if (err) {
        // bad things
      } else {
        // successful charge
      }
    });
  }
}
