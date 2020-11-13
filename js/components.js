class Components {
    constructor() {

    }
    buildSection(list) {

        let movieContainer = document.createElement('div');
        let movie = document.createElement('div');

        list.forEach(element => {
            let image;
            if (element.poster_path === null) {
                image = "../assets/static/images/image-not-available.jpg";
            } else {
                image = "http://image.tmdb.org/t/p/w300/" + element.poster_path;
            }

            let year = new Date(element.release_date).getFullYear();

            movie.innerHTML = `
            <li class="movies__container--li">
                <figure class="movies__container--image">
                    <img src="${image}" alt="" style="width: 100%">
                    <span class="movies__container--image-year">${year}</span>
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

        return movieContainer.innerHTML;
    }

    buildEpisodeSection(list) {
        // TODO
    }
}



