let resultContentEl = document.querySelector('#result-content');

function printResults(resultObj) {
    console.log(resultObj);
    let endCard = document.createElement("div");

    let endBody = document.createElement("div");
    endCard.append(endBody);

    let bodyContentEl = document.createElement("p");
    bodyContentEl.innerHTML =
        'Title: ' + resultObj.title + '<br/>';

    bodyContentEl.innerHTML +=
        'Actors: ' + resultObj.actor.join(', ') + '<br/>';

    bodyContentEl.innerHTML +=
        'Genre: ' + resultObj.genre.join(', ') + '<br/>';

    bodyContentEl.innerHTML +=
        'IMDB Score: ' + resultObj.rating + '<br/>';

endBody.append(bodyContentEl);
}

var searchFormEl = document.querySelector('#form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    let titleInputVal = document.querySelector('#title').value;
    let actorInputVal = document.querySelector('#actor').value;
    let genreInputVal = document.querySelector("#genre").value;
    let ratingInputVal = document.querySelector("#ratings").value;

    let queryString = './results.html?q=' + titleInputVal + '&actor=' + actorInputVal + "&genre=" + genreInputVal + "&rating=" + ratingInputVal;

    if (titleInputVal == null) {
        queryString = "./results.html?q=" + actorInputVal + "&genre=" + genreInputVal + "&rating=" + ratingInputVal;
    } else if (actorInputVal == null) {
        queryString = "./results.html?q=" + titleInputVal + "&genre=" + genreInputVal + "&rating=" + ratingInputVal;
    } else if (genreInputVal == null) {
        queryString = "./results.html?q=" + titleInputVal + "&actor=" + actorInputVal + "&rating=" + ratingInputVal;
    } else if (ratingInputVal == null) {
        queryString = "./results.html?q=" + titleInputVal + "&actor=" + actorInputVal + "&genre=" + genreInputVal;
    }

    location.assign(queryString);
 printResults()

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

