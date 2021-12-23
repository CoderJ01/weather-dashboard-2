function store() {
    var newData = document.getElementById('input').value;

    if(localStorage.getItem('data') = null) {
        localStorage.setItem('data', '[]');
    }

    var oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newData);

    localStorage.setItem('data', JSON.stringify(oldData));
}