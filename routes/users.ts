import * as express from 'express';
import passport = require('passport');
import jwt = require('jsonwebtoken');
import User from '../models/user';
let router = express.Router();

router.post('/Register', (req, res) => {
  let user:any = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save(function(err, newUser) {
    if(err) {
      console.log(err)
    } else {
      res.end()
    }
  })
})


export default router;
