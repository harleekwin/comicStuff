import * as express from 'express';
import comicBook from '../models/comicBook';

let router = express.Router();


router.get('/', (req, res) => {
  comicBook.find().populate('books').then((comicbooks)=> {
      res.json(comicBook);
  }).catch((err) => {
      res.status(500);
      console.error(err);
  })
});


export default router;
