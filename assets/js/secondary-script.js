function store(event) {

    var cityInput = document.getElementById('input');

    event.preventDefault();

    if (cityInput) {
        cityInput.value = "";
    }
}

function searchInput () {
        window.alert(searchChoice.value);
}

document.getElementById('search').addEventListener("click", searchInput);

