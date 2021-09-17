const express = require('express');
const router = express.Router();

//@route  GET api/auth
//@desc   get  logged in user
//@access privet
router.get('/', (req, res) => {
  res.send('get login  user');
});
//@route  post api/auth
//@desc   auth user get token
//@access public
router.post('/', (req, res) => {
  res.send('login  user');
});

module.exports = router;
