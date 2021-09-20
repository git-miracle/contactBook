const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

//Initial middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'server is online' }));

//define our routes aka endpoints
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server start on port:${port}`));
