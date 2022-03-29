//let titleSearch = document.querySelector(#placeholder)
//let actorSearch = document.querySelector(#placeholder)
//let genreSelect = document.querySelector(#placeholder)
//let ratingSelect = document.querySelector(#placeholder)
//let searchBox = document.querySelector(#placeholder)

function getSelect() {
    let searchSelectArr = document.location.search.split('&');
    let titleVal = searchSelectArr[0].split('=').pop();
    let actorVal = searchSelectArr[1].split('=').pop();
    let genreVal = searchSelectArr[2].split('=').pop();
    let searchVal = searchSelectArr[3].split('=').pop();
    searchMovies(titleVal, actorVal, genreVal, searchVal);
};

function searchMovies(titleVal, actorVal, genreVal, searchVal) {
    
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com',
        'X-RapidAPI-Key': '75dcd5e991mshf216fa4ad81e4abp12c569jsne095f7b6e197'
    }
};

fetch('https://data-imdb1.p.rapidapi.com', options)
    .then(response => response.json())
    .then(response => console.log(response))
    
    .catch(err => console.error(err))
    
    