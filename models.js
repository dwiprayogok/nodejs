var restful = require('node-restful');
var mongoose = restful.mongoose;


var statusSchema = new mongoose.Schema({
	username:String,
	password:String
});

module.exports = restful.model('tbluser',statusSchema);