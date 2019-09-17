// const getPosts = () => {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => console.log(posts))
// }

// const post = {
//     title: 'Almost all girl are insane hore',
//     body: 'I can`t discribe tihs',
//     userId: 2208
// }

// const newPost = post => {
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         }) 
//     }

//     return fetch(`https://jsonplaceholder.typicode.com/posts`, options)
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(error => console.error(`Error: ${error}`));
// }

// newPost(post);

// debugger;
// function delay(ms){
//     return new Promise(function(resolve, rejected){
//         resolve(setTimeout(null, ms))
//     });
// }

// function delay(ms){
//     return new Promise((resolve, rejected) => setTimeout(resolve, ms))
// }

// delay(1000)
//   .then(() => alert("Hello!"))


// class Promise {
//     static state = {
//         PENDING: 'PENDING',
//         FULLFILLED: 'FULLFILLED',
//         REJECTED: 'REJECTED'
//     };

//     static deger(fn, ms = 0) {
//         setTimeout(fn, ms);
//     }

//     static resolve(value) {
//         return new Promise(resolve => this.resolve(value));
//     }

//     static rejected(value) {
//         return new Promise(rejected = this.rejected(value))
//     }

//     static all(promises) {
//         return new Promise((resolve, rejected) => {
//             const results = [];

//             promises.forEach((promises, index) => {
//                 promises.then(result => {
//                     results[index] = result;

//                     if (results.length === promises.length) {
//                         resolve(results);
//                     }
//                 }, reject);
//             });
//         });
//     }

//     static race(promises) {
//         return new Promise((resolve, reject) => {
//             let done;

//             promises.forEach(promise => {
//                 promise.then(result => {
//                     if (!done) {
//                         done = true;
//                         resolve(result);
//                     }
//                 }, rejected);
//             });
//         });
//     }

//     constructor(execute) {
//         if (typeof this !== 'object') {
//             throw new TypeError('Promises must ne constructed via new');
//         }

//         this.state = Promise.state.PENDING;
//         this.result = null;
//         this.reason = null;
//         this.onFulfilled = []
//         this.onRejected = []

//         if (typeof execute !== 'function') {
//             throw new TypeError('Promise constructor\'s argument is not a function')
//         }

//         try {
//             execute(this._resolve.bind(this), this._reject.bind(this));
//         } catch (e) {
//             this._reject(e);
//         }
//     }

//     then(onFulfilled, onRejected) {
//         return new Promise((resolve, reject) => {
//             function _onFulffilled(result) {
//                 if (typeof onFulfilled === 'function') {
//                     try {
//                         resolve(onFulfilled(result));
//                     } catch (e) {
//                         reject(onRejected(result));
//                     }
//                 } else {
//                     resolve(result);
//                 }
//             }

//             function _onRejected(result) {
//                 if (typeof onRejected === 'function') {
//                     try {
//                         resolve(onRejected(reason));
//                     } catch (e) {
//                         reject(e)
//                     }
//                 } else {
//                     reject(reason);
//                 }
//             }

//             if (this.state === Promise.state.PENDING) {
//                 this.onFulfilled.push(_onFulffilled);
//                 this.onRejected.push(_onRejected);
//             } else if (this.state === Promise.state.FULLFILLED) {
//                 Promise.defer(() => _onFulffilled(this.result));
//             } else if (this.state === Promise.state.REJECTED) {
//                 Promise.defer(() => _onRejected(this.result));
//             }
//         });
//     } 

//     catch(onRejected){
//         return this.then(null, onRejected);
//     }


// **************************************************************
// }

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([7119, 02156, 867, 144]);
//     }, 1500);
// })

// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {
//                 title: 'Lemon Juice',
//                 publisher: 'Romas'
//             }
//             resolve(`${ID}: ${recipe.title}`);
//         }, 1500, recID)
//     })
// }

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             const recipe = {
//                 title: 'Hookah Pineapple',
//                 publisher: 'Romas'
//             }
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher)
//     })
// }

// getIDs
//     .then(IDs => {return getRecipe(IDs[2])})
//     .then(recipe => {return getRelated('Romas')})
//     .then(recipe => console.log(recipe))
//     .catch(e => console.log(e))

// async function getRecipesAW() {
//     const IDs = await getIDs;
//     const recipe = await getRecipe(IDs[3]);
//     const related = await getRelated('Romas');
//     console.log(related);

//     return recipe;
// }
// getRecipesAW().then(result => console.log(result))


function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ab15292d5811e29476a73bd80197786`)
        .then(res => res.json())
        .then(data => {
            const today = data.main;
            console.log(`Temp in ${city} stay between ${today.temp_min} and ${today.temp_max}`);
        })
        .catch(e => console.log(e))
}

// getWeather('Moscow')

async function getWeatherAW(city) {
    try {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ab15292d5811e29476a73bd80197786`)
        const data = await result.json()
        const today = data.main;
        console.log(`Temp in ${city} stay between ${today.temp_min} and ${today.temp_max}`);
    } catch (e) {
        console.error(e);
    }
}

getWeatherAW('London')