const Blog = require('../models/blog');

const blog_index = (req, res) => {
  const sql = 'SELECT * FROM blogs ORDER BY created_at DESC';
  Blog.query(sql, (err, result) => { 
    if (err) {
      console.log(err);
    } else {
    res.render('index', { blogs: result, title: 'All blogs' }); 
  }
});
}

const blog_details = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM blogs WHERE id = ${id}`; 
  Blog.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.render('404', { title: 'Blog not found' });
    } else {
      res.render('details', { blog: result[0], title: 'Blog Details' });
    }
  });
}

const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
  const { title, snippet, body } = req.body;
  const sql = `INSERT INTO blogs (title, snippet, body) VALUES ('${title}', '${snippet}', '${body}')`;
  Blog.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/blogs');
    }
  });
}

const blog_delete = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM blogs WHERE id = ${id}`; 
  Blog.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ redirect: '/blogs' }); 
    }
  });
}

module.exports = {
  blog_index, 
  blog_details, 
  blog_create_get, 
  blog_create_post, 
  blog_delete
}