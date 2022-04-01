var searchTitleFormEl = document.querySelector('#form');

let actorInputVal = document.querySelector('#actor').value;
let genreInputVal = document.querySelector("#genre").value;
let ratingInputVal = document.querySelector("#ratings").value;
let titleSubmitButton = document.querySelector("#title-search");
let actorSubmitButton = document.querySelector("#actor-search");
let ratingSubmitButton = document.querySelector("#rating-search");
let genreSubmitButton = document.querySelector("#genre-search");


function titleSearchFormSubmit(event) {
  event.preventDefault();
  let titleInputVal = document.querySelector('#title').value;

  let queryString = "./results.html?q=" + titleInputVal;

  location.assign(queryString);
}
titleSubmitButton.onclick = titleSearchFormSubmit
