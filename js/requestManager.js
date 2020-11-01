'use strict';
const movie = import("../models/Movie.js");
// import serie here

class requestManager {
    constructor(movie, serie, props) {
        this.filters = props;
    }

    processRequest(videoType, filters) {
        // videoType: movie or serie
        // TODO: process and redirect to action
        switch(videoType) {
            case 'movie':
                getMovies(filters);
                break;
            case 'serie':
                // TODO: getSerie(filters)
                break;
            default:
                console.log('Error');
        }
    }

    getMovies(filters) {
        // TODO: filter array and request to API
        // request here
        let movies = [];
        // console.log(movies)
        return 'ho i am in getMovies function';
        // Assigning results to movie model array

    }
}
