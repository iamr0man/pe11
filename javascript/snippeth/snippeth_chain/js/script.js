let i = 56;

const foo = () => {
    let i = 65;
    console.log(i);
    function boo(){ //Интерпритатор зарание знает про переменные в функции -> underfined
        // let i = 26;
        console.log(i);
    }

    boo();
};

foo();