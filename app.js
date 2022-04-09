const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
//const { result } = require('lodash');
const { result } = require('lodash');
const blogRoute = require('./Routes/blogroutes');
const app = express();

//mongodb connection
const dbURI = 'mongodb+srv://studyuser:1234@cluster0.hro8s.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log('Error : ' + err));

//register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); //to load data from browser
app.use(morgan('dev'))

//blog routes
app.use(blogRoute);

app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root : __dirname});
    res.status(404).render('404', {title: "Not found"});
});