$(()=> {

    $('#btnMain').on('click', function(){

        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/add",
            beforeSend: function(){
                console.log('The request beforeSend!!!');
            },
            complete: function(){
                console.log('Request is completed', arguments);
            }
        }).error(function(person){
            // const k = JSON.parse(person);
            console.log('its error go to the instagramm');
            // console.log('k.id => ', k.id);
            // console.log('k.id => ', k.id);
            // console.log('k.id => ', k.id);
            // console.log('k.id => ', k.id);
        })
    })
})