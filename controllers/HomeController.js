'use strict';

class HomeController {
    constructor() {
        this.index();
    }

    index(saludo) {
        console.log(saludo + ' mundo');
    }
}

const homeController = new HomeController();