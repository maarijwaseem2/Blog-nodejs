const mysql = require('mysql');

// Create MySQL connection
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
    }
});

// // Define MySQL schema
// const blogSchema = `CREATE TABLE blogs (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     snippet VARCHAR(255) NOT NULL,
//     body TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// )`;

// // Create blogs table
// db.query(blogSchema, (err, result) => {
//     if (err) {
//         console.log('Error creating blogs table:', err);
//     } else {
//         console.log('Blogs table created successfully');
//     }
// });

module.exports = db;
