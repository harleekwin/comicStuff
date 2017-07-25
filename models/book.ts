import * as mongoose from 'mongoose';

export interface IBook extends mongoose.Document {
  comicName: string;
  comicIssue: number;
  comicPublisher: string;
  currentlyOwns: boolean
}

let bookSchema = new mongoose.Schema({
  comicName: {
    type:String,
    required: true,
    minlength: 2,
    maxlength: 15
  },
  comicIssue: {
    type:Number,
    required:true,
    validate:{
      validator:(value) => value !== '5',
      message: '{VALUE} is not a book!'
    }
  },
  comicPublisher: {
    type:String,
    required: true,
    minlength: 2,
    maxlength: 10
  },
  currentlyOwns: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model<IBook>('Book', bookSchema);
