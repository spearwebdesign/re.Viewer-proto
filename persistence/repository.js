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

// if (storageAvailable('localStorage')) {
//     console.log('localStorage available')
// } else {
//     console.log('localStorage not available')
// }

//Save any list in local storage
function saveList(listName, list) {
    // list is an object array
    localStorage.setItem(listName, JSON.stringify(list));
}

//Get any list from localStorage
async function getData(listName, request) {
    //Exists in local Storage
    if (localStorage.getItem(listName)) {
        console.log(`${listName} obtained from local storage`);
        let getList = JSON.parse(localStorage.getItem(listName));
        return getList;
    } else {
        let response = await requestManager
            .then(data => {
                // console.log(new data.default(request))
                return new data.default(request);
            })
            .catch(error => console.error(error));

        console.log(`${listName} obtained from API`);
        if (response.results != undefined) {
            saveList(listName, response.results);
        }
        return response;
    }
}
