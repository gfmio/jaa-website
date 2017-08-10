
import stripeLib = require('stripe');

class Stripe {
  constructor(apiKey) {
    this.stripe = stripeLib(apiKey);
  }

  public createCustomer(email, sourceToken) {

  }

  public createCharge(amount, currency, customerId, callback) {
    this.stripe.charges.create({
      amount,
      currency,
      customer: customerId,
    }, function(err, charge) {
      if (err) {
        // bad things
      } else {
        // successful charge
      }
    });
  }
}
