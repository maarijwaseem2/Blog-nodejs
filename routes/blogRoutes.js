const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',          // Hostname
    user: 'root',      // MySQL username
    password: '',  // MySQL password
    database: 'blogs'   // MySQL database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});


router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;