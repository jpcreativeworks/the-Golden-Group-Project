let resultContentEl = document.querySelector('#result-content');

function printResults(resultObj) {
    console.log(resultObj);
    let endCard = document.createElement("div");

    let endBody = document.createElement("div");
    endCard.append(endBody);

    let titleEL = document.createElement("h3");
    titleEL.textContent = resultObj.title;

    let bodyContentEl = document.createElement("p");
    //bodyContentEl.innerHTML = 
}