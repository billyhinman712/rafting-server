var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	firstName: {
    type: String,
    minlength: 1,
    maxlength: 99
  },
  lastName: {
    type: String,
    minlength: 1,
    maxlength: 99
  },
  description: {
  	type: String,
  	required: true,
  	minlength: 1,
  	maxlength: 250
  },
  star: {
  	type: Number,
  	required: true,
  	min: 1,
  	max: 5
  }
});

commentSchema.set('toJSON', {
  transform: function(doc, comment, options) {
    var returnJson = {
      id: comment._id,
      firstName: comment.firstName,
      lastName: comment.lastName,
      description: comment.description,
      star: comment.star
    };
    return returnJson;
  }
});

module.exports = mongoose.model('Comment', commentSchema);