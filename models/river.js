var mongoose = require('mongoose');

var riverSchema = new mongoose.Schema({
	name: {
    type: String,
    required: true
  },
  conent: {
    type: String,
    required: true
  }
  image: {
  	type: String,
  	required: true
  },
  description: {
    type: String,
    required: true
  }
});

riverSchema.set('toJSON', {
  transform: function(doc, river, options) {
    var returnJson = {
      id: river._id,
      name: river.name,
      content: river.content,
      image: river.image,
      description: river.description

    };
    return returnJson;
  }
});

module.exports = mongoose.model('River', riverSchema);