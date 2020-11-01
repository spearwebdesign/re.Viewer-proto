'use strict';

// IMPORTS:

// DOES NOT WORK BY INVOKE THE CONSTRUCTOR OF THE CORRESPONDING CLASS
// IT CAN'T BE INSTANTIATED
// const Movie = import("../models/Movie.js"); // ON requestManager.js

// ONLY WORKS IN <script type="module" ...><script>
// import * as Movie from '../models/Movie.js';
// import Movie from '../models/Movie.js';

class HomeController {
    constructor(requestManager) {
        this.requestManager = requestManager;
        this.index();
    }

    index() {
        console.log('hola josé');
        console.log(requestManager);
    }

    getMovieModel(user) {
        let props = {
            id: 12,
            genres: { id: 1, name: 'Action'},
            original_title: 'el club de la lucha',
            overview: '',
            popularity: 5,
            poster_path: '',
            release_date: '',
        }
        console.log(`${user} get the movie model`);
    }
}

const homeController = new HomeController(new requestManager(new Movie({ id: 12}), {}, []));