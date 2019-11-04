const express = require('express');
const cors = require('cors');
// mongoose allows to connect to MongoDB
const mongoose = require('mongoose');
const config = require('config');

// congifure to have environment variables
require('dotenv').config();

// create Express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware, allow to parse JSON which the server is sending and receiving
app.use(cors());
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// setup routes: import & use
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);



// starts server, starts listening on a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});