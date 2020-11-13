class Components {
    constructor() {

    }
    buildSection(list) {

        let movieContainer = document.createElement('div');
        let movie = document.createElement('div');

        list.forEach(element => {

            movie.innerHTML = `
            <li class="movies__container--li">
                <figure class="movies__container--image">
                    <img src="http://image.tmdb.org/t/p/w300/${element.poster_path}" alt="">
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

        return movieContainer.innerHTML;
    }

    buildEpisodeSection(list) {
        // TODO
    }
}



