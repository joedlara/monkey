var mongoose = require('mongoose');

var MonkeySchema = new mongoose.Schema({
	name: {type: String, require: true},
	color: {type: String, require: true},
	age: {type: Number, require: true},
}, {timestamps: true});


mongoose.model('Monkey', MonkeySchema )







