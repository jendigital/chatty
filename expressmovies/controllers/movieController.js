const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    year: Number
});
const Movie = mongoose.model('Movie', movieSchema);

exports.getMovies = (req, res) => {
    console.log('depuis movieController.getMovies');

    const title = "Films français des 30 dernières années";
    frenchMovies = [];
    Movie.find((err, movies) => {
        if(err) {
            console.log('could not retrieve movies from DB');
            res.sendStatus(500);
        } else {
            frenchMovies = movies;
            res.render('movies', { title: title, movies: frenchMovies});
        }
    });
}


exports.postMovie = (req, res) => {
    console.log('depuis movieController.postMovie');
    
    if (!req.body) {
        return res.sendStatus(500);
    } else {
        const formData = req.body; 
        console.log('form data: ', formData);
        
        const title = req.body.movieTitle;
        const year = req.body.movieYear;
        const myMovie = new Movie({ title: title, year: year });

        myMovie.save((err, savedMovie) => {
            if(err) {
                console.error(err);
                return;
            } else {
                console.log(savedMovie);
            }
        });
        
        res.sendStatus(201);
    } 
};

exports.getMoviesOldBrowsers = (req, res) => {
    if (!req.body) {
        return res.sendStatus(500);
    } else {    
        frenchMovies = [... frenchMovies, { title: req.body.title, year: req.body.year }];
        res.sendStatus(201);
    } 
};

exports.getMoviesAdd = (req, res) => {
    res.send('prochainement, un formulaire d\'ajout ici');
};

exports.getMovieById = (req, res) => {
    const id = req.params.id;
    res.render('movie-details');
};

exports.postMovieDetails = (req, res) => {
    console.log('movietitle: ', req.body.title, 'movieyear: ', req.body.year);
    if (!req.body) {
        return res.sendStatus(500);
    }
    const id = req.params.id;
    Movie.findByIdAndUpdate(id, { $set : {title: req.body.title, year: req.body.year}}, 
                                { new: true }, (err, movie) => {
        if(err) {
            console.error(err);
            return res.send('le film n\'a pas pu être mis à jour');
        }
        res.redirect('/movies');
    });
};

exports.getMovieDetails = (req, res) => {
    const id = req.params.id;
    Movie.findById(id, (err, movie) => {
        console.log('movie-details', movie);
        res.render('movie-details.ejs', { movie: movie});
    })
};

exports.deleteMovie = (req, res) => {
    const id = req.params.id;
    Movie.findOneAndRemove(id, (err, movie) => {
        console.log(movie);
        res.sendStatus(202);
    });
};

exports.movieSearch = (req, res) => {
    res.render('movie-search');
};