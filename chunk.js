// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
//SOLUTION #1
  var chunkedArr = [];
  for(var i = 0; i < array.length; i += size){
    chunkedArr.push(array.slice(i, i + size))
  }

  return chunkedArr;
}


//SOLUTION #2

// function chunk(array, size) {
//   var chunkedArr = [];
//       // array.reduce((chunk, curr, index) => {
//       //   chunk.push(curr);
//       //   if((index + 1) % size === 0 || index === array.length - 1){
//       //     chunkedArr.push(chunk);
//       //     chunk = [];
//       //   }
//       //   return chunk;
//       // }, []);
//   return chunkedArr;
// }


//SOLUTION #3

// var chunkedArr = [],
// tempArr = [],
// chunkTrack = 0,
// chunkItem = 0;


// for(let item of array){
//   chunkTrack++;
//   tempArr.push(item);
//   chunkItem++;
//   if(chunkTrack >= size || array.length === chunkItem){
//     console.log('Check here', array.length, chunkedArr.length, chunkTrack);
//     chunkedArr.push(tempArr);
//     chunkTrack = 0;
//     tempArr = [];
//   }
// }

//SOLUTION #4
//const chunked = [];
// for(let element of array) {
//   const last = chunked[chunked.length -1];
//   if(!last || last.length === size) {
//     chunked.push([element]);
//   } else {
//     last.push(element);
//   }
//   return chunked;
// }