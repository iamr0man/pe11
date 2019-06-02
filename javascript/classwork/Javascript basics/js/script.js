var userFirstName = prompt('Input your first name.'),
    userAge = prompt('Input your age.' , "18");

if (userFirstName === "" || isNaN(userAge)) {
    alert('Incorrect data');
} else {
    if(userAge < 18)
        alert("You are not allowed to visit this website");
    else if(userAge >= 18 && userAge <= 22) {
        let userAnswear = confirm("Are you sure you want to continue?");
        if(userAnswear) {
            alert("Welcome, " + userFirstName);
        }
        else {
            alert("You are not allowed to visit this website");
        }
    }
    else{
        alert("Welcome, " + userFirstName);
    }
}