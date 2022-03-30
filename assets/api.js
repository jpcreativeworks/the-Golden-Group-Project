//I want this Javascript to take the search parameters from the URL
//and search through the IMDB-API and place the results into the
//HTML as information that can be displayed for the user to see

let titleSearch = document.querySelector('#title')
let actorSearch = document.querySelector('#actor')
let genreSelect = document.querySelector('#genre')
let ratingSelect = document.querySelector('#ratings')
let searchBox = document.querySelector('#form')

function getSelect() {
    let searchSelectArr = document.location.search.split('&');
    let titleVal = searchSelectArr[0].split('=').pop();
    let actorVal = searchSelectArr[1].split('=').pop();
    let genreVal = searchSelectArr[2].split('=').pop();
    let searchVal = searchSelectArr[3].split('=').pop();
    searchMovies(titleVal, actorVal, genreVal, searchVal);
};

// function searchMovies(titleVal, actorVal, genreVal, searchVal) {
// }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com',
		'X-RapidAPI-Key': '75dcd5e991mshf216fa4ad81e4abp12c569jsne095f7b6e197'
	}
};

{fetch ('https://data-imdb1.p.rapidapi.com/titles/search/title/%7Btitle%7D?info=mini_info&limit=10&page=1&titleType=movie', options)
	.then(responseTitle => responseTitle.json())
	.then(responseTitle => console.log(responseTitle))
	.catch(err => console.error(err))
}

{fetch('https://data-imdb1.p.rapidapi.com/actors?limit=10&page=1', options)
.then(responseActor => responseActor.json())
.then(responseActor => console.log(responseActor))
.catch(err => console.error(err));
}

{fetch('https://data-imdb1.p.rapidapi.com/titles/tt0000002/ratings', options)
	.then(responseRating => responseRating.json())
	.then(responseRating => console.log(responseRating))
	.catch(err => console.error(err));
}

{fetch('https://data-imdb1.p.rapidapi.com/titles/utils/genres', options)
	.then(responseGenre => responseGenre.json())
	.then(responseGenre => console.log(responseGenre))
	.catch(err => console.error(err));
}

