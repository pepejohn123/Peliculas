$(document).ready(function() {
    // Hacer la petición GET a la API
    $.get("http://localhost:3000/movies/getmovies", function(data) {
        // Iterar sobre los resultados y agregarlos a la tabla
        for (let i = 0; i < data.length; i++) {
            console.log(data);
            $("#dynamic-content").append(`<tr><td>${data[i].name}</td><td>${data[i].actors}</td><td>${data[i].director}</td><td>${data[i].genre}</td><td>${data[i].synopsis}</td></tr>`);
        }
    });
});
