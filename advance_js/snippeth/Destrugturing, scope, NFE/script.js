// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }

//   var myFunc = makeFunc();
//   myFunc();

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);

//   console.log(add5(2));  // 7
//   console.log(add10(2));

var counter = (function () {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
})();

//   console.log(counter.value()); // logs 0
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // logs 2
//   counter.decrement();
//   console.log(counter.value()); // logs 1

// const addTo = function(passed){

//   const add = function(inner, innerToo){
//     return passed + inner + innerToo;
//   };

//   return add;
// };

// const add3 = new addTo(3);
// const add4 = new addTo(4);

// debugger;
// console.log(add3(2, 5));

var makeCounter = function () {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
};

// var Counter1 = makeCounter();
// var Counter2 = makeCounter();
// console.log(Counter1.value()); /* Alerts 0 */
// Counter1.increment();
// Counter1.increment();
// console.log(Counter1.value()); /* Alerts 2 */
// Counter1.decrement();
// console.log(Counter1.value()); /* Alerts 1 */
// console.log(Counter2.value()); /* Alerts 0 */
// Counter1.increment();
// Counter2.increment();
// console.log(Counter1.value())
// console.log(Counter2.value())

function retirment(retirementAge) {
    let a = " years left until retirment.";
    return function (yearOfBirth) {
        let age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

// let retirementUS = retirment(66);
// let retirementUKR = retirment(69);
// let retirementSP = retirment(61);

// retirementUKR(2001);
// retirementUS(2001);
// retirementSP(2001);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you..');
        } else if (job === 'teacher') {
            console.log('What subject do you teach ' + name);
        } else {
            console.log('Hello ' + name + ", what do you do?");
        }
    }
}

// interviewQuestion('designer');
// interviewQuestion('teacher');
// let res =  interviewQuestion('software developer')('Roman');
// console.log();

function makeCounter() {

    let count = 0;

    function changeBy(val) {
        count += val;
    }
    return {
        increment: () => {
            changeBy(1);
        },
        decrement: () => {
            changeBy(-1);
        },
        value: () => {
            console.log(count)
        }
    };
};

// const counter = new makeCounter();

// debugger;
// counter.decrement();
// counter.decrement();
// counter.decrement();

// counter.value();

const user = {
    name: 'Jong',
    years: 38
};

let {
    name,
    years
} = user;

function calcRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 69 - age]
}

const [age2, retirement] = calcRetirement(2001);

// console.log(age2);
// console.log(retirement);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let richName = 0, maxSalary = 0;

// for (let prop in salaries) {
//     if (maxSalary < salaries[prop]) {
//         maxSalary = salaries[prop];
//         richName = prop;
//     }
// }

// console.dir(richName);

for(const [name, salary] of Object.entries(salaries)) {
    if(maxSalary < salary) {
        maxSalary = salary;
        richName = name;
    }
}

console.log(richName);

