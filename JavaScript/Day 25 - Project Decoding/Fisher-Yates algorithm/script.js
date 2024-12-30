// Random Fisher-Yates algorithm
const fisherYatesArray = [10,100,-2,35,-60,90];

// Fisher-Yates shuffle algorithm explanation:
// The Fisher-Yates shuffle is an unbiased shuffling algorithm. It works by iterating through the array one element at a time, 
// and for each element, it randomly selects an index from the unshuffled portion of the array and swaps the current element with the element at that index.

// Example implementation of Fisher-Yates shuffle algorithm:
function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(fisherYatesShuffle(fisherYatesArray));
