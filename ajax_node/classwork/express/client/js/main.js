$(function() {

    $('#getData').on('click', function() {
        $.get('http://192.168.12.126:3000/films')
            .done(function(response) {
                console.log('Result -->', JSON.parse(response));
            })
            .error(function(error){
                console.log(error);
            });
    });
});