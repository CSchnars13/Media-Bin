import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: { type: 'String', required: true },
  artist: { type: 'String', required: true },
  date: { type: 'String', required: true },
  rating: { type: 'Number', required: true },
  comment: { type: 'String', required: true },
});

export default mongoose.model('Album', albumSchema);