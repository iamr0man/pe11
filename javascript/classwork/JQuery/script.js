// const $tags = $('h1');

// $('.wrap').click(function(e){
//     // e.currentTarget.classList.toggle('active');
//     $('.wrap')
//     .animate({
//         opacity: 0.5,
//     }, 2000)
//     .animate({
//         opacity: 1,
//         backgroundColor: '#fff'
//     }, 3000)
//     .animate({
//         opacity: 0,
//     }, 2000)

//     $tags.animate({
//         opacity: 0,
//         color: '#fff'
//     }, 2000)    
// });

// const p = document.createElement('p');
// p.innerText = 'Drake';

// $(p).click(function(){
//     alert('Kiki do you love me?')
// })

// $(document.body).append(p)

// $('.nav-list-item').click(function(e){
//     $(this).addClass('active');
//     $(this).siblings('.nav-list-item').removeClass('active');
// })

const $input = "<input type='text'>"
const $btn = "<button>Sent message<button>"
$(document.body).append($input);

$('input').keyup(function(){
    if(this.value.length > 5 ){
        $(this).after($btn)
    } else {
        $btn.remove();
    }
});

