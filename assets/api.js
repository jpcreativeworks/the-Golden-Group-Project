//We want to display movies on the search screen based on the info that we get when we search the json that the user is choosing to search

let titleSubmitButton = document.querySelector("#title-search");
let actorSubmitButton = document.querySelector("#actor-search");
let ratingSubmitButton = document.querySelector("#rating-search");
let genreSubmitButton = document.querySelector("#genre-search");
let resultContent = document.querySelector("#result-content");
let resultsTitle = document.querySelector("#results-title")
let resultsActor = document.querySelector("#results-actor")
let resultsRating = document.querySelector("#results-rating")
let resultsGenre = document.querySelector("#results-genre")
let resultsDescription = document.querySelector("#results-description")
let titleInputVal = document.querySelector('#title').value;

function printResults() {
	//let searchParamsArr = document.location.search.split('=').pop();
	let titlePrint = localStorage.getItem("titleInfo");
	let resultsTitle = document.querySelector("#results-title");
	resultsTitle.append(titlePrint)

}

// function getParams() {

//     let searchParamsArr = document.location.search.split('=').pop();

//   }

// function titleSearchFormSubmit() {

//     let titleInputVal = document.querySelector('#title').value;
//  console.log(titleInputVal)
//     let queryString = "./results.html?q=" + titleInputVal;
//     location.assign(queryString);
// 	printResults()
// }
titleSubmitButton.onclick = function () {

	let titleInputVal = document.querySelector('#title').value;
	console.log(titleInputVal);
	let queryString = "./results.html?q=" + titleInputVal;
	location.assign(queryString);
}

printResults()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com',
		'X-RapidAPI-Key': '75dcd5e991mshf216fa4ad81e4abp12c569jsne095f7b6e197'
	}
};

function getTitleInfo() {
	let titleSearch = document.location.search.split('=').pop();
	console.log(titleSearch)
	let titleUrl = 'https://www.omdbapi.com/?t=' + titleSearch + "&apikey=7ffe113a";
	fetch(titleUrl)
		.then(responseTitle => responseTitle.json())
		.then(responseTitle => {
			localStorage.setItem('titleInfo', JSON.stringify(responseTitle))
			console.log(responseTitle)
		})
		.catch(err => console.error(err))
}

getTitleInfo()
