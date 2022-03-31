var searchTitleFormEl = document.querySelector('#form');

let actorInputVal = document.querySelector('#actor').value;
let genreInputVal = document.querySelector("#genre").value;
let ratingInputVal = document.querySelector("#ratings").value;
let titleSubmitButton = document.querySelector("#title-search")

// function handleSearchFormSubmit(event) {
//   event.preventDefault();



//   let queryString = './results.html?q=' + titleInputVal + '&actor=' + actorInputVal + "&genre=" + genreInputVal + "&rating=" + ratingInputVal;

//   if (titleInputVal == null) {
//     queryString = "./results.html?q=" + actorInputVal + "&genre=" + genreInputVal + "&rating=" + ratingInputVal;
//   } else if (actorInputVal == null) {
//     queryString = "./results.html?q=" + titleInputVal + "&genre=" + genreInputVal + "&rating=" + ratingInputVal;
//   } else if (genreInputVal == null) {
//     queryString = "./results.html?q=" + titleInputVal + "&actor=" + actorInputVal + "&rating=" + ratingInputVal;
//   } else if (ratingInputVal == null) {
//     queryString = "./results.html?q=" + titleInputVal + "&actor=" + actorInputVal + "&genre=" + genreInputVal;
//   }

//   location.assign(queryString);
// }

function titleSearchFormSubmit(event) {
  event.preventDefault();

  let titleInputVal = document.querySelector('#title').value;
  
  let queryString = "./results.html?q=" + titleInputVal;

  location.assign(queryString);
}


titleSubmitButton.onclick = titleSearchFormSubmit
