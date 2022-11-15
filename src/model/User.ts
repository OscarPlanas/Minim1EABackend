import { Schema, model } from 'mongoose';

const User = new Schema({
	name: String,
	username: String,
	password: String,
	birthdate: Date,
	email: String,
	serie: [{
		type: Schema.Types.ObjectId,
		ref: 'Series'
	}],
	config: [{
		type: Schema.Types.ObjectId,
		ref: 'ExamConfiguration'
	}]

});

export default model('User', User);

