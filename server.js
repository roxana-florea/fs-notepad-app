const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//import routes
const notesRoute = require('./routes/routes');

//DB connection
mongoose.connect('mongodb+srv://roxana:test123@cluster0.wsneg.mongodb.net/notepad',
 { useNewUrlParser: true, useUnifiedTopology: true},
  ()=>{ console.log('Connected to MongoDB succesfully')})

//middleware
app.use(cors());
app.use(express.json());
//routes middlewares
app.use('/', notesRoute)



app.listen(5000, ()=> console.log('server is running on port 5000'))