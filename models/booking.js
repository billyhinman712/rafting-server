var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
	name: {
    type: String,
    required: true
  },
  date: {
  	type: Date,
  	required: true
  },
  time: {
    type: Number,
    required: true
  },
  userId: {
  	type: Number,
  	required: true
  }
});

bookingSchema.set('toJSON', {
  transform: function(doc, booking, options) {
    var returnJson = {
      id: booking._id,
      name: booking.name,
      cost: booking.cost,
      date: booking.date,
      time: booking.time

    };
    return returnJson;
  }
});

module.exports = mongoose.model('Booking', bookingSchema);