function store(event) {

    var cityInput = document.getElementById('input');

    event.preventDefault();

    if (cityInput) {
        cityInput.value = "";
    }
}

function searchInput () {
    window.alert("This button saves searchs and displays this message.")
}

document.getElementById('search').addEventListener("click", searchInput);