export default class Movie {
    constructor(props) {
        this.id = props.id;
        this.genres = props.genres;
        this.original_title = props.original_title;
        this.overview = props.overview;
        this.popularity = props.popularity;
        this.poster_path = props.poster_path;
        this.release_date = props.release_date;
    }
}