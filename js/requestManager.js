'use strict';
const Movie = import("../models/Movie.js");
// import serie here

const API = 'https://api.themoviedb.org/3/';
const API_KEY = '21715e4fd28b56a724172e0ec055c73f';

export default class requestManager {
    constructor(props) {
        this.requestTo = props.requestTo;
        this.filters = props.filters;
        return this.processRequest(this.requestTo, this.filters);
    }

    processRequest(requestTo, filters) {
        // requestTo: movie or serie
        // TODO: process and redirect to action
        switch (requestTo) {
            case 'movies':
                return this.getMovies(filters);
                break;
            case 'series':
                // TODO: getSerie(filters)
                break;
            default:
                console.log('Error');
        }
    }

    getMovieById(id) {
        // let movie = Movie
        //     .then(data => new data.default({}))
        //     .catch(error => console.log(error))
    }

    getMovies(filters) {
        // TODO: filter array and request to API
        // request here

        // URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

        // let year = 2020;

        // let URL = `${API}discover/movie?api_key=${API_KEY}&primary_release_year=${year}&sort_by=release_date.desc`;

        let filters_url = '';
        for (const property in filters) {
            filters_url += `&${property}=${filters[property]}`
            console.log(filters_url);
        }

        let URL = `${API}discover/movie?api_key=${API_KEY}${filters_url}`

        fetch(URL)
            .then(response => {
                response.json()
                .then(data => {
                    console.log(data);
                })
                .catch(error => console.error(error));
            });

        // return movies;
        // return 'hi i am in getMovies function';
        // Assigning results to movie model array

    }
}
