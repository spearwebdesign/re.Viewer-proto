'use strict';

const API = 'https://api.themoviedb.org/3/';
const API_KEY = '21715e4fd28b56a724172e0ec055c73f';

export default class requestManager {
    constructor(props) {
        this.props = props;
        this.requestTo = props.requestTo;
        this.filters = props.filters;
        return this.processRequest(this.requestTo, this.filters);
    }

    processRequest(requestTo, filters) {
        let results;
        switch (requestTo) {
            case 'movies':
                results = this.getMovies(filters);
                break;
            case 'series':
                results = this.getSeries(filters);
                break;
            case 'episodes':
                // TODO req episodes
                break;
            case 'popularSeries':
                results = this.getPopular();
                break;
            case 'seasons':
                results = this.getSeasons(this.props);
                break;
            default:
                console.log('Error');
        }

        return results;
    }

    async getMovies(filters) {
        let filters_url = '';
        for (const property in filters) {
            filters_url += `&${property}=${filters[property]}`
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

        return results;
    }

    async getPopular() {
        let URL = `${API}tv/popular?api_key=${API_KEY}&language=en-US&page=1`

        let results = await fetch(URL)
            .then(response => {
                return response.json()
                    .then(data => {
                        return data;
                    })
                    .catch(error => console.error(error));
            });

        return results;
    }

    async getSeasons(props) {
        let results;
        props.filters.serie_ids.forEach(element => {
            
        console.log(element);


        // let filters_url = '';
        // for (const property in filters) {
        //     filters_url += `&${property}=${filters[property]}`
        // }

        // Trae la SERIE -> cantidad de temporadas
        let URL = `${API}tv/${element}?api_key=${API_KEY}&language=en-US`;
        console.log(URL);

        // /tv/{tv_id}/season/{season_number}
        // Temporada entera

        results = await fetch(URL)
            .then(response => {
                return response.json()
                    .then(data => {
                        return data;
                    })
                    .catch(error => console.error(error));
            });

        });
        console.log(results);

        return results;
    }
}
