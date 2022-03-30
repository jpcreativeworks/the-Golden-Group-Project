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
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
