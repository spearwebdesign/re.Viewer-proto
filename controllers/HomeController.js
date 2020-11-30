'use strict';
// IMPORTS:

// DOES NOT WORK BY INVOKE THE CONSTRUCTOR OF THE CORRESPONDING CLASS
// IT CAN'T BE INSTANTIATED
// const pelicula = import("../models/Movie.js"); // ON requestManager.js

// Request Manager
// const requestManager = import("../js/requestManager.js");

// ONLY WORKS IN <script type="module" ...><script>
// import * as Movie from '../models/Movie.js';
// import Movie from '../models/Movie.js';

class HomeController {
    constructor() {
        this.index();
    }

    async index() {
        let anioActual = new Date();

        // MOVIES REQUEST
        let request = {
            requestTo: 'movies',
            filters: {
                page: 1,
                primary_release_year: anioActual.getFullYear(),
                sort_by: 'release_date.desc',
            }
        }

        let latestMovies = await getData(`Movies ${request.filters.page}`, request);
        let moviesContainer = document.getElementById('moviesContainer');
        moviesContainer.innerHTML = components.buildMovieSection(latestMovies);

        // SERIES REQUEST
        request = {
            requestTo: 'series',
            filters: {
                first_air_date_year: anioActual.getFullYear(),
                sort_by: 'first_air_date.desc',
            }
        }

        let latestSeries = await getData('Series', request);
        let seriesContainer = document.getElementById('seriesContainer');
        seriesContainer.innerHTML = components.buildSerieSection(latestSeries);

        //EPISODES REQUEST
        request = {
            requestTo: 'episodes',
            filters: {
                episode_ids: latestSeries.map(serie => serie.id),
                sort_by: 'first_air_date.desc',
            }
        }
        // console.log(filters.filters.episode_ids)

        let latestEpisodes = await getData('Episodes', request);
        let episodesContainer = document.getElementById('episodesContainer');
        episodesContainer.innerHTML = components.buildEpisodeSection(latestEpisodes)

        // FOR SPRINT 3
        // POPULAR SERIES REQUEST FOR SEASONS REQUEST
        request = {
            requestTo: 'popularSeries',
            // filters: {
            //     sort_by: 'popularity.desc',
            // }
        }
        let popularSeries = await getData('popularSeries', request);

        // SEASONS REQUEST
        request = {
            requestTo: 'seasons',
            filters: {
                serie_ids: popularSeries.map(serie => serie.id),
                sort_by: 'popularity.desc',
            }
        }

        let popularSeason = await getData('Seasons', request);
        let seasonContainer = document.getElementById('seasonsContainer');
        seasonContainer.innerHTML = components.buildSeasonSection(popularSeason);

    }

    // getPremiere(pY) {
    //     let filters = {
    //         requestTo: 'movies',
    //         filters: {
    //             primary_release_year: 2020,
    //             sort_by: 'release_date.desc',
    //         }
    //     }

    //     console.log(pY);

    //     requestManager
    //         .then(data => {
    //             return new data.default(filters)
    //         })
    //         .catch(error => console.log(error));
    // }

}

const homeController = new HomeController();
const components = new Components();

