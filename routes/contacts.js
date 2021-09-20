const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

//@route  GET api/contacts
//@desc   get all users contacts
//@access private
router.get('/', auth, async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Errror');
  }
});

//@route  POST api/contacts
//@desc   add new users contacts
//@access private
router.post('/', [auth, [check('name', 'Name is require').not().isEmpty()]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, type } = req.body;
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id,
    });

    const contact = await newContact.save();

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  PUT api/contacts/:id
//@desc   edit users contacts
//@access private
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  // Build contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    // make sure user own the contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' });
    }
    //find the contact by ID and update it
    contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactFields }, { new: true });
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  DELETE api/contacts/:id
//@desc   delete users contacts
//@access private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    // make sure user own the contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' });
    }
    //fin the contact by ID and remove it
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: 'contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
