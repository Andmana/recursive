// console.log("Hi");

function fibonacci(len) {
    const fib = [0, 1];
    for (let i = 2; i < len; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

function fibonacciReq(len, fib = [0, 1]) {
    const length = fib.length;
    if (length < len) {
        fib.push(fib[length - 1] + fib[length - 2]);
        return fibonacciReq(len, fib);
    }
    return fib;
}

// console.log("fibonacci seq of 8 : " + fibonacci(8));
// console.log("fibonacciRec seq of 8 : " + fibonacciReq(8));

function mergeSort(seq = []) {
    if (seq.length <= 1) {
        return seq;
    }

    const middle = Math.floor(seq.length / 2);
    const left = seq.slice(0, middle);
    const right = seq.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            result.push(left[leftIdx]);
            leftIdx += 1;
        } else {
            result.push(right[rightIdx]);
            rightIdx += 1;
        }
    }

    while (leftIdx < left.length) {
        result.push(left[leftIdx]);
        leftIdx++;
    }

    while (rightIdx < right.length) {
        result.push(right[rightIdx]);
        rightIdx++;
    }

    return result;
}

const arr = [1, 3, 2, 4, 1, 5, 10];
// const arr = [1, 3, 2];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
