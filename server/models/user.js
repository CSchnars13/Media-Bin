import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
  role: {type: 'String', required: true },
  albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
  subscribed: [{ type: Schema.Types.ObjectId, ref: 'User' }],

});

export default mongoose.model('User', userSchema);