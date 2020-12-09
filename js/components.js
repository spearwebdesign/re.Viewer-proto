'use strict';

class Components {
    constructor() {

    }
    buildMovieSection(list) {

        let sectionContainer = document.createElement('div');
        let section = document.createElement('div');

        list.forEach(element => {

            let image;
            if (element.poster_path === null) {
                image = "./assets/static/images/image-not-available.jpg";
            } else {
                image = "http://image.tmdb.org/t/p/w300/" + element.poster_path;
            }

            let year = new Date(element.release_date).getFullYear();

            section.innerHTML = `
            <li class="card">
                <a href="#">
                    <figure class="card__figure">
                        <img class="card__figure--image" src="${image}" alt="${element.original_title}">
                        <span class="card__figure--year">${year}</span>
                    </figure>
                    <header class="card__header">
                        <h2 class="card__title">${element.original_title}</h2>
                        <span class="card__assessment">TMDB <span>${(element.popularity).toFixed(1)}</span></span>
                    </header>
                </a>
            </li>
            `;
            sectionContainer.innerHTML += section.innerHTML;
        });

        return sectionContainer.innerHTML;
    }

    buildEpisodeSection(list) {

        let sectionContainer = document.createElement('div');
        let section = document.createElement('div');

        list.forEach(element => {

            let year = new Date(element.first_air_date).getFullYear();

            section.innerHTML = `
            <li class="ticket">
                <a href="#">
                    <header class="ticket__header">
                        <div class="ticket__number">${(element.popularity).toFixed(1)}</div>
                        <h2 class="ticket__title">${element.original_name}</h2>
                    </header>
                    <div class="ticket__div">
                        <div class="ticket__year">${year}</div>
                        <i class="fa fa-play-circle" aria-hidden="true"></i>
                    </div>
                </a>
            </li>
            `;
            sectionContainer.innerHTML += section.innerHTML;
        });

        return sectionContainer.innerHTML;
    }


    buildSerieSection(list) {

        let sectionContainer = document.createElement('div');
        let section = document.createElement('div');

        list.forEach(element => {
            let image;
            if (element.poster_path === null) {
                image = "./assets/static/images/image-not-available.jpg";
            } else {
                image = "http://image.tmdb.org/t/p/w300/" + element.poster_path;
            }

            let year = new Date(element.first_air_date).getFullYear();

            section.innerHTML = `
            <li class="card">
                <a href="#">
                    <figure class="card__figure">
                        <img class="card__figure--image" src="${image}" alt="${element.original_name}">
                        <span class="card__figure--year">${year}</span>
                    </figure>
                    <header class="card__header">
                        <h2 class="card__title">${element.original_name}</h2>
                        <span class="card__assessment">TMDB <span>${(element.popularity).toFixed(1)}</span></span>
                    </header>
                </a>
            </li>
            `;
            sectionContainer.innerHTML += section.innerHTML;
        });

        return sectionContainer.innerHTML;
    }

    buildSeasonSection(list) {

        let sectionContainer = document.createElement('div');
        let section = document.createElement('div');

        list.forEach(element => {

            let image;
            if (element.poster_path === null) {
                image = "./assets/static/images/image-not-available.jpg";
            } else {
                image = "http://image.tmdb.org/t/p/w300/" + element.poster_path;
            }

            let year = new Date(element.air_date).getFullYear();

            section.innerHTML = `
            <li class="card">
                <a href="#">
                    <figure class="card__figure">
                        <img class="card__figure--image" src="${image}" alt="${element.name}">
                        <span class="card__figure--year">${year}</span>
                    </figure>
                    <header class="card__header">
                        <h2 class="card__title">${element.serie_name} Season ${element.season_number}</h2>
                    </header>
                </a>
            </li>
            `;
            sectionContainer.innerHTML += section.innerHTML;
        });

        return sectionContainer.innerHTML;
    }
}





