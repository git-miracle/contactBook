const express = require('express');
const router = express.Router();

//@route  get api/contacts
//@desc   get all users contacts
//@access private
router.get('/', (req, res) => {
  res.send('get all contacts');
});

//@route  post api/contacts
//@desc   add new users contacts
//@access private
router.post('/', (req, res) => {
  res.send('add new contacts');
});
//@route  put api/contacts/:id
//@desc   edit users contacts
//@access private
router.put('/:id', (req, res) => {
  res.send('edit contacts');
});
//@route  delete api/contacts/:id
//@desc   delete users contacts
//@access private
router.delete('/:id', (req, res) => {
  res.send('delete contacts');
});

module.exports = router;
