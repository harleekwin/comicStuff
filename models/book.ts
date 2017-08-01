import * as mongoose from 'mongoose';

export interface IBook extends mongoose.Document {
  category: mongoose.Types.ObjectId;
  comicName: string;
  comicIssue: number;
  comicPublisher: string;
  alreadyOwn: 'Y' | 'N';
}

let bookSchema = new mongoose.Schema({
  comicName: {
   type: String,
   required: true
},
  comicIssue: {
   type: Number,
   required: true,
   min: new Number(1)
},
  comicPublisher: {
    type: String,
    required: true,
},
  alreadyOwn: {
    enum:['Y', 'N'],
    type: String,
    required: true
  }
});


export default mongoose.model<IBook>('Book', bookSchema);
