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

//ruta para las imagenes
router.get('/upload', (req, res) => {
    res.render('post.html', { title: 'post'});
})
//carga de imagenes
router.post('/upload', (req, res) => {
    res.send('uploaded');
})

//rutas para eliminar imagen
router.get('/image/:id', (req, res) => {
    res.send('profile image')
})


router.get('/image/:id/delete', (req, res) => {
    res.send('image delete');
})



module.exports = router;
