let titleSubmitButton = document.querySelector("#title-search");
let actorSubmitButton = document.querySelector("#actor-search");
let ratingSubmitButton = document.querySelector("#rating-search");
let genreSubmitButton = document.querySelector("#genre-search");
let resultContent = document.querySelector("#result-content");

function printResults() {
    let resultsTitle = document.querySelector("#results-title")
    let resultsActor = document.querySelector("#results-actor")
    let resultsRating = document.querySelector("#results-rating")
    let resultsGenre = document.querySelector("#results-title")
    let resultsDescription = document.querySelector("#results-discription")
    let titleInputVal = document.querySelector('#title').value;

    resultsTitle.textContent = titleInputVal

}

function getParams() {
    
    let searchParamsArr = document.location.search.split('=').pop();
    let titleInput = document.querySelector('#title').value;
    //let title = searchParamsArr.split('=').pop();
    titleInput.textContent = searchParamsArr
    console.log(searchParamsArr)
  }

function titleSearchFormSubmit(event) {
   // event.preventDefault();
    let titleInputVal = document.querySelector('#title').value;

    let queryString = "./results.html?q=" + titleInputVal;
    location.assign(queryString);

}
titleSubmitButton.onclick = function() {
    titleSearchFormSubmit();
    getParams()
}



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
