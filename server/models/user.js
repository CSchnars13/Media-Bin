import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
  role: {type: 'String', required: true },
  albums: [{
  	title: {type: 'String', required: true},
  	artist: {type: 'String', required: true},
  	date: {type: 'Number', required: true},
  	rating: {type: 'Number', required: true},
  	comment: {type: 'String', required: true},
  }],
  subscribed: [{ type: Schema.Types.ObjectId, ref: 'User' }],

});

export default mongoose.model('User', userSchema);
