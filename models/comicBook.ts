import * as mongoose from 'mongoose';
import {IBook} from './book';

export interface IComicBook extends mongoose.Document {
  title : string;
  books: IBook[]
}


let comicBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  books : [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
});

export default mongoose.model<IComicBook>('ComicBook', comicBookSchema);
