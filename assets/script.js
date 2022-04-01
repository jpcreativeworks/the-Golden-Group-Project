let titleSubmitButton = document.querySelector("#title-search");


function titleSearchFormSubmit(event) {
  event.preventDefault();
  let titleInputVal = document.querySelector('#title').value;

  let queryString = "./results.html?q=" + titleInputVal;

  location.assign(queryString);
}
titleSubmitButton.onclick = titleSearchFormSubmit