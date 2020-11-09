
//Check availability with the browser
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
<<<<<<< HEAD
    catch (e) {
=======
    catch(e) {
>>>>>>> 990887f1718c95454af68d537e0ddaa36d4c090c
        return false;
    }
}

if (storageAvailable('localStorage')) {
    console.log('localStorage available')
} else {
    console.log('localStorage not available')
<<<<<<< HEAD
}

//Save movies in local storage
function saveLocalStorage(latestMovies) {
    localStorage.setItem('Movies', JSON.stringify(latestMovies.results));
=======
    }

//Save movies in local storage
function saveLocalStorage(latestMovies) { 
    localStorage.setItem('Movies', JASON.stringify(latestMovies.results) );
>>>>>>> 990887f1718c95454af68d537e0ddaa36d4c090c
}

//Get movie from local storage
// function getLocalStorage(save) {

<<<<<<< HEAD
//     let getStorageMovies = JASON.parse(localStorage.getItem('Movies'));
=======
//     let getStorageMovies = JASON.parse(localStorage.getItem('Movies')); 
>>>>>>> 990887f1718c95454af68d537e0ddaa36d4c090c

//     console.log(getStorageMovies);
// }

// // getLocalStorage()


