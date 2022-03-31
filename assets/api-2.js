let titleSubmitButton = document.querySelector("#title-search");
let actorSubmitButton = document.querySelector("#actor-search");
let ratingSubmitButton = document.querySelector("#rating-search");
let genreSubmitButton = document.querySelector("#genre-search");
let resultContent = document.querySelector("#result-content");

// function printResults() {

//     let endCard = document.createElement("div");

//     let endBody = document.createElement("div");

//     let bodyContentEl = document.createElement("p");
//     bodyContentEl.textContent =
//         'Title: ' + title + '<br/>';

//     bodyContentEl.innerHTML +=
//         'Actors: ' + actor.join(', ') + '<br/>';

//     bodyContentEl.innerHTML +=
//         'IMDB Score: ' + rating + '<br/>';

//     bodyContentEl.innerHTML +=
//         'Genre: ' + genre.join(', ') + '<br/>';

//     endBody.append(bodyContentEl);

//     endCard.append(endBody);

//     resultContent.append(endCard)

// }

// printResults()

function printResults() {
    
}

function titleSearchFormSubmit(event) {
    event.preventDefault();
    let titleInputVal = document.querySelector('#title').value;

    let queryString = "./results.html?q=" + titleInputVal;

    location.assign(queryString);


}
titleSubmitButton.onclick = titleSearchFormSubmit

function actorSearchFormSubmit(event) {
    event.preventDefault();
    let actorInputVal = document.querySelector('#actor').value;

    let queryString = "./results.html?q=" + actorInputVal;

    location.assign(queryString);
}
actorSubmitButton.onclick = actorSearchFormSubmit

function ratingSearchFormSubmit(event) {
    event.preventDefault();
    let ratingInputVal = document.querySelector('#ratings').value;

    let queryString = "./results.html?q=" + ratingInputVal;

    location.assign(queryString);
}
ratingSubmitButton.onclick = ratingSearchFormSubmit;

function genreSearchFormSubmit(event) {
    event.preventDefault();
    let genreInputVal = document.querySelector('#genre').value;

    let queryString = "./results.html?q=" + genreInputVal;

    location.assign(queryString);
}
genreSubmitButton.onclick = genreSearchFormSubmit