function store(event) {
    // var newData = document.getElementById('input').value;

    // if(localStorage.getItem('data') = null) {
    //     localStorage.setItem('data', '[]');
    // }

    // var oldData = JSON.parse(localStorage.getItem('data'));
    // oldData.push(newData);

    // localStorage.setItem('data', JSON.stringify(oldData));

    // Method 2

    // var userFormEl = document.querySelector("#user-form");
    // var languageButtonsEl = document.querySelector("#language-buttons");
    // var nameInputEl = document.querySelector("#username");
    // var repoContainerEl = document.querySelector("#repos-container");
    // var repoSearchTerm = document.querySelector("#repo-search-term");

    // var formSubmitHandler = function(event) {
    //     event.preventDefault();

    //     var username = nameInputEl.value.trim();

    //     if (username) {
    //     getUserRepos(username);
    //     repoContainerEl.textContent = "";
    //     nameInputEl.value = "";
    //     } else {
    //     alert("Please enter a GitHub username");
    //     }
    // };

    // //

    var cityInput = document.getElementById('input');

    event.preventDefault();

    var city = cityInput.value.trim();

    if (cityInput) {
        cityInput.value = "";
    }
    else {
        window.alert("Please enter a city")
    }

}