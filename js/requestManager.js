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
                results = this.getEpisodes(filters);
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
        // // console.log(results);
        // if (typeof(results) == Array(Promise)) {
        //     results.forEach(result => {
        //         console.log(result);
        //         return result;
        //     });
        // } else {
        //     return results;
        // }

    }

    async getMovies(filters) {
        let filters_url = '';
        for (const property in filters) {
            filters_url += `&${property}=${filters[property]}`
        }

        let URL = `${API}discover/movie?api_key=${API_KEY}${filters_url}`

        let results = await fetch(URL)
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error(error));
        return results;
    }

    async getEpisodes(filters) {
        // let filters_url = '';
        // for (const property in filters) {
        //     filters_url+= `&${property}=${filters[property]}`
        // }


        // let URL = `${API}/tv/${filters_url.filters}/season/${season_number}?api_key=${API_KEY}&language=en-US`
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

    // LATEST SERIES
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

    // POPULAR SERIES
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

    // SERIE ID
    async getSerie(id) {
        let URL = `${API}tv/${id}?api_key=${API_KEY}&language=en-US`;

        let results = await fetch(URL)
            .then(response => response.json())
            .catch(err => console.error(err));
        return results;
    }

    async getSeason(id, season_number) {
        let URL = `${API}tv/${id}/season/${season_number}?api_key=${API_KEY}`;

        let results = await fetch(URL)
            .then(response => response.json())
            .catch(err => console.error(err));
        return results;
    }

    async getSeasons(props) {

        let seasons = {
            results: []
        }
        seasons.results = await Promise.all(props.filters.serie_ids.map(id =>
            this.getSerie(id)
                .then(serie => {
                    return this.getSeason(serie.id, serie.last_episode_to_air.season_number)
                        .then(season => {
                            season.serie_name = serie.name;
                            return season;
                        })
                })
        ));
        return seasons;
    }

    // async getSeasons(props) {

    //     let results = [];
    //     props.filters.serie_ids.forEach(id => {
    //         this.getSerie(id)
    //             .then(async serie => {
    //                 let seasons = this.getSeason(serie.id, serie.last_episode_to_air.season_number)
    //                     .then(season => {
    //                         season.serie_name = serie.name;
    //                         return season;
    //                     })
    //                 results.push(seasons);
    //             })
    //     });
    //     console.log(results);
    //     return results;
    // }

    // async getSeasons(props) {

    //     // let results = Object();
    //     // let popular = await this.getPopular();
    //     let results = Array();
    //     // console.log(popular.results);
    //     // popular.results.forEach(async element => {
    //     props.filters.serie_ids.forEach(async id => {
    //         this.getSerie(id)
    //             .then(async serie => {

    //                 let URL = `${API}tv/${serie.id}/season/${serie.last_episode_to_air.season_number}?api_key=${API_KEY}`;
    //                 let season = await fetch(URL)
    //                     .then(response => response.json())
    //                     .catch(error => console.error(error))
    //                 season.serie_name = serie.name;
    //                 // console.log(season);
    //                 results.push(season);
    //             })
    //     })
    //     console.log(results);

    //     return results;
    // }

    // getSeasons(props) {
    //     let series = [];
    //     let seasons = [];
    //     props.filters.serie_ids.forEach(id => {

    //         this.getSerie(id)
    //             .then(serie => {
    //                 // last Season
    //                 let URL = `${API}tv/${id}/season/${serie.last_episode_to_air.season_number}?api_key=${API_KEY}`;
    //                 fetch(URL)
    //                     .then(response => response.json()
    //                         .then(season => {
    //                             seasons.push(season);
    //                         })
    //                         .catch(error => console.error(error))
    //                     )
    //                 series.push(serie);
    //             })

    //     });

    //     let results = {
    //         series: series,
    //         seasons: seasons,
    //     }

    //     // console.log(results);
    //     return results; // seasons
    // }
}
