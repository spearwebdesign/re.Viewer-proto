'use strict';
// const Movie = import("../models/Movie.js");
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
        let results;
        switch (requestTo) {
            case 'movies':
                results = this.getMovies(filters);
                break;
            case 'series':
                // TODO: getSerie(filters)
                results = this.getSeries(filters);
                break;
            default:
                console.log('Error');
        }

        return results;
    }

    async getMovies(filters) {
        // TODO: filter array and request to API
        // request here

        // URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

        // let year = 2020;

        // let URL = `${API}discover/movie?api_key=${API_KEY}&primary_release_year=${year}&sort_by=release_date.desc`;

        let filters_url = '';
        for (const property in filters) {
            filters_url += `&${property}=${filters[property]}`
            // console.log(filters_url);
        }

        let URL = `${API}discover/movie?api_key=${API_KEY}${filters_url}`

        let results = await fetch(URL)
        .then(response => {
            return response.json()
            .then(data => {
                return data;
            })
            .catch(error => console.error(error));
        });

        return results;

        // return movies;
        // return 'hi i am in getMovies function';
        // Assigning results to movie model array
    }

    async getSeries(filters) {
        let filters_url = '';
        for (const property in filters) {
            filters_url += `&${property}=${filters[property]}`
        }

        let URL = `${API}discover/tv?api_key=${API_KEY}${filters_url}`

        let results = await fetch(URL)
        .then(response => {
            return response.json()
            .then(data => {
                return data;
            })
            .catch(error => console.error(error));
        });
        console.log(results);
        return results;
    }
}
