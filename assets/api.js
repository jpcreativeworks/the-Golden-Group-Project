//We want to display movies on the search screen based on the info that we get when we search the json that the user is choosing to search

let titleSubmitButton = document.querySelector("#title-search");
let resultContent = document.querySelector("#result-content");
let resultsTitle = document.querySelector("#results-title")
let titleInputVal = document.querySelector('#title').value;


titleSubmitButton.onclick = function() {
	let titleInputVal = document.querySelector('#title').value;
 	console.log(titleInputVal);
    let queryString = "./results.html?q=" + titleInputVal;
    location.assign(queryString);	  
}

function getTitleInfo() {
	let titleSearch = document.location.search.split('=').pop();
	let titleUrl = 'https://www.omdbapi.com/?t=' + titleSearch + "&apikey=7ffe113a";
	{fetch(titleUrl)
		.then(responseTitle => responseTitle.json())
		.then(responseTitle => {
			localStorage.setItem('titleInfo', JSON.stringify(responseTitle))
			console.log(responseTitle)
		})
		.catch(err => console.error(err))
	}
    let titlePrint = localStorage.getItem("titleInfo");
    let resultsTitle = document.querySelector("#results-title");
    resultsTitle.append(titlePrint)
}

getTitleInfo()