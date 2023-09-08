import mongoose from 'mongoose';

const User_Schema = new mongoose.Schema({
	user: {
		email: { type: String, require: true, unique: true },
		password: { type: String, require: true },
		name: { type: String, require: true }
	},
	recipe: [
		{
			title: { type: String },
			description: { type: String },
			createdAt: { type: String },
			publishedAt: { type: String },
			updatedAt: { type: String },
			public: { type: Boolean },
			tags: { type: Object },
			id: { type: String }
		}
	]
});

export const User_Model = mongoose.model('User', User_Schema);
