
const mongoose = require('mongoose')

var Payment = {
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  dateTime: { type: Date, default: Date.now },
  paymentId: String
}

module.exports = Payment
