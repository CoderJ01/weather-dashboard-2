function store(event) {

    var cityInput = document.getElementById('input');

    event.preventDefault();

    if (cityInput) {
        cityInput.value = "";
    }
}