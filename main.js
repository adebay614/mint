// Optimized Sorting Algorithm: QuickSort Implementation

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (const el of arr.slice(0, arr.length - 1)) {
        el < pivot ? left.push(el) : right.push(el);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const array = [5, 3, 8, 4, 2];
console.log('Unsorted array:', array);
const sortedArray = quickSort(array);
console.log('Sorted array:', sortedArray);

module.exports = quickSort;