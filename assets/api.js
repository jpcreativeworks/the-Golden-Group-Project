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