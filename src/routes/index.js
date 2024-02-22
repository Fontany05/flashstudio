const express = require('express');
const router = express.Router();

//archivo donde se guardan las rutas
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Home'});
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'about'});
});

router.get('/blog', (req, res) => {
    res.render('blog.html', { title: 'blog'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'contact'});
});


module.exports = router;
