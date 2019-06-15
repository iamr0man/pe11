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

console.log(selectionSort([5, 3, 6, 2, 10]))