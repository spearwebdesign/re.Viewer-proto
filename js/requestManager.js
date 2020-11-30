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
            .then(response => response.json()
                .then(data => {
                    return data;
                })
                .catch(error => console.error(error))
            );
        return results;
    }

    getEpisode(props) {
        let episodes = [];

        props.filters.episode_ids.forEach(id => {

            this.getSerie(id)
            .then(response => {
                episodes.push(response);
            });
        });
        return results;
    }

    getSeasons(props) {
        let series = [];
        let seasons = [];
        props.filters.serie_ids.forEach(id => {

            this.getSerie(id)
                .then(serie => {
                    // last Season
                    let URL = `${API}tv/${id}/season/${serie.last_episode_to_air.season_number}?api_key=${API_KEY}`;
                    fetch(URL)
                        .then(response => response.json()
                            .then(season => {
                                seasons.push(season);
                            })
                            .catch(error => console.error(error))
                        )
                    series.push(serie);
                })

        });

        let results = {
            series: series,
            seasons: seasons,
        }

        console.log(results);
        return results; // seasons
    }
}
