
//Check availability with the browser
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return false;
    }
}

if (storageAvailable('localStorage')) {
    console.log('localStorage available')
} else {
    console.log('localStorage not available')
}

//Save movies in local storage
function saveLocalStorage(latestMovies) {
    localStorage.setItem('Movies', JSON.stringify(latestMovies.results));
}

//Get movie from local storage
// function getLocalStorage(save) {

//     let getStorageMovies = JASON.parse(localStorage.getItem('Movies'));

//     console.log(getStorageMovies);
// }

// // getLocalStorage()


