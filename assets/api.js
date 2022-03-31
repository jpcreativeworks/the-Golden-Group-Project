//We want to display movies on the search screen based on the info that we get when we search the json that the user is choosing to search

let titleSearch = document.querySelector('#title')
let actorSearch = document.querySelector('#actor')
let genreSelect = document.querySelector('#genre')
let ratingSelect = document.querySelector('#ratings')
let searchBox = document.querySelector('#form')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com',
		'X-RapidAPI-Key': '75dcd5e991mshf216fa4ad81e4abp12c569jsne095f7b6e197'
	}
};

titleUrl = 'https://data-imdb1.p.rapidapi.com/titles/search/keyword/%7Bkeyword%7D?info=mini_info&limit=10&page=1&titleType=movie'
actorUrl = 'https://data-imdb1.p.rapidapi.com/actors?limit=10&page=1'
ratingUrl = 'https://data-imdb1.p.rapidapi.com/titles/tt0000002/ratings'
genreUrl = 'https://data-imdb1.p.rapidapi.com/ts/utilitles/genres'

function getTitleInfo(titleSearch) {
	let titleUrl = 'https://data-imdb1.p.rapidapi.com/titles/search/keyword/' + titleSearch + '?info=mini_info&limit=10&page=1&titleType=movie'
	fetch(titleUrl, options)
		.then(responseTitle => responseTitle.json())
		.then(responseTitle => {
			localStorage.setItem('titleInfo', JSON.stringify(responseTitle))
			console.log(responseTitle)
		})
		.catch(err => console.error(err))
}

function getActorInfo() {
	let actorUrl = 'https://data-imdb1.p.rapidapi.com/actors/' + actorSearch + '?limit=10&page=1'
	fetch(actorUrl, options)
		.then(responseActor => responseActor.json())
		.then(responseActor => {
			localStorage.setItem('actorInfo', JSON.stringify(responseActor))
			console.log(responseActor)
		})
		.catch(err => console.error(err));
}

function getRatingInfo() {
	let ratingUrl = 'https://data-imdb1.p.rapidapi.com/titles/' + ratingSearch + '/ratings'
	fetch(ratingUrl, options)
		.then(responseRating => responseRating.json())
		.then(responseRating => {
			localStorage.setItem('ratingInfo', JSON.stringify(responseRating))
			console.log(responseRating)
		})
		.catch(err => console.error(err));
}

function getGenreInfo() {
	let genreUrl = 'https://data-imdb1.p.rapidapi.com/ts/utilitles/genres/' + genreSearch
	fetch(genreUrl, options)
		.then(responseGenre => responseGenre.json())
		.then(responseGenre => {
			localStorage.setItem('genreInfo', JSON.stringify(responseGenre))
			console.log(responseGenre)
		})
		.catch(err => console.error(err));
}

getTitleInfo()
getActorInfo()
getRatingInfo()
getGenreInfo()

let titleSubmitButton = document.querySelector("#title-search");
let actorSubmitButton = document.querySelector("#actor-search");
let ratingSubmitButton = document.querySelector("#rating-search");
let genreSubmitButton = document.querySelector("#genre-search");
let resultContent = document.querySelector("#result-content");
let resultsTitle = document.querySelector("#results-title")
let resultsActor = document.querySelector("#results-actor")
let resultsRating = document.querySelector("#results-rating")
let resultsGenre = document.querySelector("#results-genre")
let resultsDescription = document.querySelector("#results-discription")
let titleInputVal = document.querySelector('#title').value;

function printResults() {
	let searchParamsArr = document.location.search.split('=').pop();
    let titlePTag = document.createElement("p");
	titlePTag.textContent = searchParamsArr;
	resultsTitle.append(titlePTag)
}

function getParams() {
    
    let searchParamsArr = document.location.search.split('=').pop();
    
  }

function titleSearchFormSubmit() {
	
    let titleInputVal = document.querySelector('#title').value;
 console.log(titleInputVal)
    let queryString = "./results.html?q=" + titleInputVal;
    location.assign(queryString);
	printResults()
}
titleSubmitButton.onclick = function(event) {
	event.preventDefault();
	let titleInputVal = document.querySelector('#title').value;
 console.log(titleInputVal)
      let queryString = "./results.html?q=" + titleInputVal;
      location.assign(queryString);
}

printResults()
getParams()

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
