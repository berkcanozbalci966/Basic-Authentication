const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

// İmport Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected DB"
    ));

// Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)



app.listen(3000, () => console.log('Server up and runnig'))