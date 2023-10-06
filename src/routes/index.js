const login = require('../controllers/login');
const getCharById = require('../controllers/getCharById');
const postFav = require('../controllers/postFav');
const postUser = require('../controllers/postUser');
const deleteFav = require('../controllers/deleteFav');
const getFav = require('../controllers/getFav');
const getCharByName = require('../controllers/getCharByName');

const router = require("express").Router();



router.get('/character/:id', (req, res) => {

    getCharById(req, res);

})

router.post('/login', postUser);

router.get('/login', login);

router.post('/fav', (req, res) => {

    postFav(req, res);

})

router.delete('/fav/:id', (req, res) => {

    deleteFav(req, res);
})

router.get('/fav', (req, res) => {

    getFav(req, res);

})

router.get('/character/name/:name', (req, res) => {

    getCharByName(req, res);

})

module.exports = router;