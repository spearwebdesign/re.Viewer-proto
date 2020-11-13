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
            <li class="card">
                <a href="#">
                    <figure class="card__figure">
                        <img class="card__figure--image" src="${image}" alt="" style="width: 100%">
                        <span class="card__figure--year">${year}</span>
                    </figure>
                    <header class="card__header">
                        <h2 class="card__title">${element.original_title}</h2>
                        <span class="card__assessment">TMDB ${element.popularity}</span>
                    </header>
                </a>
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



