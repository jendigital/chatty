const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const secret = 'qsdjS12ozehdoIJ123DJOZJLDSCqsdeffdg123ER56SDFZedhWXojqshduzaohduihqsDAqsdq';
const mongoose = require('mongoose');
const faker = require('faker');
const config = require('./config');
const movieController = require('./controllers/movieController');
const authController = require('./controllers/authController');

/// MONGO
mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@ds115546.mlab.com:15546/expressmovie`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: cannot connect to my Db'));
db.once('open', () => {
    console.log('connected to the Db');
});



app.set('views', './views');
app.set('view engine', 'ejs');

/// MIDDLEWARES
app.use('/public', express.static('public'));  
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressJwt({ secret: secret })
.unless({ path: ['/','/movies','/movie-search','/login', new RegExp('/movies.*/', 'i'), new RegExp('/movie-details.*/', 'i')] }) );

let ourMovies = [];


app.get('/movies', movieController.getMovies);

app.get('/movies/add', movieController.getMoviesAdd);

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/movies', upload.fields([]), movieController.postMovie);

app.get('/movies/:id', movieController.getMovieById);

app.post('/movie-details/:id',  urlencodedParser, movieController.postMovieDetails);

app.get('/movie-details/:id', movieController.getMovieDetails);

app.delete('/movie-details/:id', movieController.deleteMovie)

app.get('/movie-search', movieController.movieSearch);

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', authController.login);

app.post('/login', urlencodedParser, authController.postLogin);

app.get('/member-only', authController.getMemberOnly);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);   
})



