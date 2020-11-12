const requestManager = import("../js/requestManager.js");

//Check availability with the browser
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return false;
    }
}

if (storageAvailable('localStorage')) {
    console.log('localStorage available')
} else {
    console.log('localStorage not available')
    }

//Save movies in local storage
function saveLocalStorage(saveTo, latestMovies) { 
    localStorage.setItem(saveTo, JSON.stringify(latestMovies.results));
}

//Get movie from localStorage
async function getData(filters) {

    //Exists in local Storage
    if (localStorage.getItem('Movies')) {
        let getStorageMovies = JSON.parse(localStorage.getItem('Movies')); 
        // console.log(getStorageMovies);
        return getStorageMovies
    }else {
        // console.log('There are no entries in the local storage');
        let latestMovies = await requestManager
            .then(data => {
                // return new data.default(filters);
                // console.log(new data.default(filters));
                new data.default(filters);
            })
            .catch(error => console.log(error));

        saveLocalStorage('Movies', latestMovies.results)
        return latestMovies.results
    }
}
// getData()


