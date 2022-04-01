//We want to display movies on the search screen based on the info that we get when we search the json that the user is choosing to search

let titleSubmitButton = document.querySelector("#title-search");
let resultContent = document.querySelector("#result-content");
let resultsTitle = document.querySelector("#results-title")
let titleInputVal = document.querySelector('#title').value;
let resultsImg = document.querySelector("#poster-img");
let resultsGenre = document.querySelector("#results-genre");
let resultsActors = document.querySelector("#results-actors");
let resultsRating = document.querySelector("#results-rating");
let resultsDescription = document.querySelector("#results-description");
let recentSearches = document.querySelector("#recent-searches");
let searches = []

titleSubmitButton.onclick = function () {
	let titleInputVal = document.querySelector('#title').value;
	console.log(titleInputVal);
	let queryString = "./results.html?q=" + titleInputVal;
	
	let titlePrint = JSON.parse(localStorage.getItem("titleInfo"));
	if (titlePrint) {
		for (i = 0; i < titlePrint.length; i++) {
			searches.push(titlePrint[i]);
	 		
		}
	}
	searches.push(titleInputVal);
	 localStorage.setItem("titleInfo",JSON.stringify(searches));
	 location.assign(queryString);

}

function getTitleInfo() {
	// let titleInputVal = document.getElementById('title').value;
	// console.log(titleInputVal);
	// 
	
	// 
	//recentSearchFunc()
	let titleSearch = document.location.search.split('=').pop();
	let titleUrl = 'https://www.omdbapi.com/?t=' + titleSearch + "&apikey=7ffe113a";
	{
		fetch(titleUrl)
			.then(responseTitle => responseTitle.json())
			.then(responseTitle => {
				// localStorage.setItem('titleInfo', JSON.stringify(responseTitle.Title))
				console.log(responseTitle)
				resultsTitle.textContent = responseTitle.Title;
				resultsImg.src = responseTitle.Poster;
				resultsActors.textContent = "Actors: " + responseTitle.Actors;
				resultsGenre.textContent = "Genre: " + responseTitle.Genre;
				resultsRating.textContent = "Metacritic Score: " + responseTitle.Metascore + "/100";
				resultsDescription.textContent = "Plot summary: " + responseTitle.Plot;
			})
			.catch(err => console.error(err))
	}


}

function recentSearchFunc() {
	let recentSearchesPull = JSON.parse(localStorage.getItem("titleInfo"));
	console.log(recentSearchesPull);
	if (recentSearchesPull) {
		for (i = 0; i < recentSearchesPull.length; i++) {
			searches.push(recentSearchesPull[i]);
	 		
		}
		recentSearches.textContent = searches;
	}
}


getTitleInfo()
