// Binary Search
function binarySearch(array, item) {
    let low = 0,
        high = array.length - 1,
        counter = 0;

    while (low <= high) {
        debugger;
        const mid = Math.floor((low + high) / 2);
        const guess = array[mid];
        if (guess === item)
            return mid;
        if (guess > item) {
            high -= mid;
            counter++;
        } else {
            low += mid;
            counter++;
        }
    }
    return null;
}

// console.log(binarySearch([1, 3, 6 , 8 ,9, 12, 22, 44], 12));

//selection sort

const selectionSort = arr => {
    debugger;
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};

// console.log(selectionSort([5, 3, 6, 2, 10]))

//print list

function printList(list) {
    // debugger;
    let currentNode = list;
    while(currentNode !== null){
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// printList(list);


//recursion

// function sum(arr, previous = 0, current, index=0){
//     if(index > arr.length) return 0;
//     return previous + (sum(arr, arr[index], arr[++index], index++));
// }

function sum(arr) {
    debugger;
    return arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1))
}

function countIndex(arr) {
    let count = 0;
    return arr.length === 0 ? 0 : ++count + countIndex(arr.slice(1)); 
}

function findMaxValue(arr, n) {
    if(n === 1) return arr[0];
    return Math.max(arr[n-1], findMaxValue(arr, n-1))
}

function findMinValue(arr, n){
    if(n === 1) return arr[0];
    return Math.min(arr[n-1], findMinValue(arr, n-1))
}

// console.log(findMaxValue([1,6,8,9], [1,6,8,9].length));
// console.log(findMinValue([1,6,8,9], [1,6,8,9].length));

function quickSort(array){

    if(array.length < 2) return array;
    else {
        const pivot = array[0]
        const less = array.filter(i => i < pivot)
        const greater = array.filter(i => i > pivot)
        return quickSort(less).concat(pivot).concat(quickSort(greater));
    }
}

console.log(quickSort([20, 6, 33, 15, 22]));