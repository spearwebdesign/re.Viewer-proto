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
function saveLocalStorage(listName, list) {
    localStorage.setItem(listName, JSON.stringify(list));
}

//Get movie from localStorage
async function getData(listName, filters) {
    //Exists in local Storage
    if (localStorage.getItem(listName)) {
        let getList = JSON.parse(localStorage.getItem(listName));
        console.log(`${listName} obtained from local storage`);
        return getList;
    } else {
        // console.log('There are no entries in the local storage');
        let response = await requestManager
            .then(data => {
                // console.log(new data.default(filters))
                return new data.default(filters);
            })
            .catch(error => console.log(error));

            console.log(`${listName} obtained from API`);
        saveLocalStorage(listName, response.results);
        return response.results
    }
}
