'use strict';
// IMPORTS:

// DOES NOT WORK BY INVOKE THE CONSTRUCTOR OF THE CORRESPONDING CLASS
// IT CAN'T BE INSTANTIATED
// const pelicula = import("../models/Movie.js"); // ON requestManager.js

// Request Manager
const requestManager = import("../js/requestManager.js");

// ONLY WORKS IN <script type="module" ...><script>
// import * as Movie from '../models/Movie.js';
// import Movie from '../models/Movie.js';

class HomeController {
    constructor(requestManager) {
        this.requestManager = requestManager;
        this.movie = {
            id: 12,
            genres: { id: 1, name: 'Action' },
            original_title: 'el club de la pelea',
            overview: '',
            popularity: 5,
            poster_path: '',
            release_date: '',
        };
        // this.index();
    }

    index() {
        let filters = {
            requestTo: 'movies',
            filters: {
                primary_release_year: 2020,
                sort_by: 'release_date.desc',
            }
        }

        requestManager
            .then(data => {
                return new data.default(filters)
            })
            .catch(error => console.log(error));
    }

    getPremiere() {
        let filters = {
            requestTo: 'movies',
            filters: {
                primary_release_year: 2020,
                sort_by: 'release_date.desc',
            }
        }

        requestManager
            .then(data => {
                return new data.default(filters)
            })
            .catch(error => console.log(error));
    }

}

// const homeController = new HomeController(new requestManager(new Movie({ id: 12}), {}, []));
// const homeController = new HomeController(new requestManager(this.movie, {}, []));
const homeController = new HomeController();