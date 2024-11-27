const express = require('express');
const router = express.Router();
const Image = require('../models/image')


//archivo donde se guardan las rutas
router.get('/', async(req, res) => {
    const images = await Image.find();
    res.render('index.html', { title: 'Home'} , { images});
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
router.post('/upload', async (req, res) => {

    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.originalname = req.file.originalname;
    image.path = '/uploads/' + req.file.filename;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save();
    
    res.redirect('/about');
})

//rutas para eliminar imagen
router.get('/image/:id', (req, res) => {
    res.send('profile image')
})


router.get('/image/:id/delete', (req, res) => {
    res.send('image delete');
})



module.exports = router;
