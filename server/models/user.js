import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
  active: {type: 'Boolean', required: true},
  albums: [{
  	title: {type: 'String', required: true},
  	artist: {type: 'String', required: true},
  	date: {type: 'Number', required: true},
  	rating: {type: 'Number', default: 5, required: true},
  	comment: {type: 'String', default: "", required: true},
    dateLogged: {type: 'Date', default: Date.now, required: true},
  }],
  events: [{
    name: {type: 'String', required: true},
    location: {type: 'String', required: true},
    date: {type: 'String', required: true},
    dateLogged: {type: 'Date', default: Date.now, required: true},
  }],
  subscribed: [{ type: Schema.Types.ObjectId, ref: 'User' }],

});

export default mongoose.model('User', userSchema);
