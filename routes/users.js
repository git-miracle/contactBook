const express = require('express');
const router = express.Router();

//@route  POST api/users
//@desc   register auser
//@access public
router.post('/', (req, res) => {
  res.send('register user');
});

module.exports = router;
