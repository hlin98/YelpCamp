var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	avatar: String,
	firstName: String,
	lastName: String,
	email: String,
	isAdmin: {type: Boolean, default: false}
});

// gives all these methods to user model
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);