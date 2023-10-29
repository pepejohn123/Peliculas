$(document).ready(function() {
console.log("aaa");
$('#movie').submit(function(event){
    event.preventDefault();
    console.log("aaa");
    var formData = {
        name: $('#name').val(), // Assuming you have an input field with the id 'name'
        synopsis: $('#synopsis').val(),
        genre: $('#genre').val(),
        duration: $('#duration').val(),
        director: $('#director').val(),
        actors: $('#actors').val().split(',') // Assuming actors is a comma-separated list in an input field with the id 'actors'
    };

    $.post('http://localhost:3000/movies/new', formData, res => {
        window.location.href = "/assets/getall.html";

    });
    
    });
});
