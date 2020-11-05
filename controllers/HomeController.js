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
        this.index();
    }

    async index() {
        let anioActual = new Date();

        let filters = {
            requestTo: 'movies',
            filters: {
                primary_release_year: anioActual.getFullYear(),
                sort_by: 'release_date.desc',
            }
        }

        let latestMovies = await requestManager
            .then(data => {
                // return new data.default(filters);
                // console.log(new data.default(filters));
                return new data.default(filters);
            })
            .catch(error => console.log(error));

        // console.log(latestMovies.results);

        let movieContainer = document.getElementById('movieContainer');
        let movie = document.createElement('div');
        latestMovies.results.forEach(element => {

            movie.innerHTML = `
            <li class="movies__container--li">
                <figure class="movies__container--image">
                    <img src="${element.poster_path}" alt="">
                    <span class="movies__container--image-year">${element.release_date}</span>
                    <a class="movies__container--image-link" href="#"></a>
                </figure>
                <header class="movies__container--header">
                    <h2 class="movies__container--header-title">${element.original_title}</h2>
                    <span class="movies__container--header-assessment">TMDB ${element.popularity}</span>
                </header>
            </li>
            `;
            movieContainer.innerHTML += movie.innerHTML;
        });
    }

    getPremiere(pY) {
        let filters = {
            requestTo: 'movies',
            filters: {
                primary_release_year: 2020,
                sort_by: 'release_date.desc',
            }
        }

        console.log(pY);

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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}