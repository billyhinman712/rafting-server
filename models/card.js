var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
	firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  cardNumber: {
    type: Number,
    required: true
  },
  cardType: {
    type: String,
    required: true,
  },
  experation: {
    type: Date,
    required: true
  },
  securityCode: {
    type: Number,
    required: true,
    min: 3,
    max: 3
  },
  billingAddress: {
    type: String,
    required: true
  },
  userId: {
    type: Number,
    required: true
  }
});

cardSchema.set('toJSON', {
  transform: function(doc, card, options) {
    var returnJson = {
      id: card._id,
      firstName: card.firstName,
      lastName: card.lastName,
      cardNumber: card.cardNumber,
      cardType: card.cardType,
      experation: card.experation,
      securityCode: card.securityCode,
      billingAddress: card.billingAddress,
      userId: card.userId

    };
    return returnJson;
  }
});

module.exports = mongoose.model('Card', cardSchema);