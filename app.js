const express = require('express');
const morgan = require('morgan');
// const mongoose = require('mongoose');
const mysql = require('mysql');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blogs' 
});


db.connect((err) => {
  if (err) {
      console.log('Error connecting to MySQL:', err);
  } else {
      console.log('Connected to MySQL database');
      app.listen(3000, () => {
          console.log('Server is running on http://localhost:3000');
      });
  }
});
app.locals.db = db;

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});