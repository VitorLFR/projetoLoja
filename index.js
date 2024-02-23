const express = require('express');
const path = require('path');

const app = express();


app.use('/public', express.static('public'));

const router = express.Router();

router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/home.html'));
});

router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/signup.html'));
});

router.get('/login', function (req, res) { 
    res.sendFile(path.join(__dirname + '/pages/login.html'));
});

router.get('/products', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/shop.html'))
})

router.get('/product', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/product.html'))
})

router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/about.html'))
})

router.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/contact.html'))
})

router.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/addProducts.html'))
})
app.use('/', router);
app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando");
});