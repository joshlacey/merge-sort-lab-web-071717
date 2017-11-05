function findMinAndRemove(array){
  let mindex = 0;
  for(let i = 1; i < array.length; i++) {
    (array[i] < array[mindex]) && (mindex = i)
  };
  return array.splice( mindex, 1 )[0];
}

function findMinAndRemoveSorted(array){
  let mindex = 0;
  for(let i = 1; i < array.length; i++) {
    (array[i] < array[mindex]) && (mindex = i)
  };
  return array.splice( mindex, 1 )[0];
}

function merge(firstSubarray, secondSubArray) {
  let array = []
  while(firstSubarray.length && secondSubArray.length) {
    if (firstSubarray[0] < secondSubArray[0]) {
      array.push(firstSubarray.shift())
    } else {
      array.push(secondSubArray.shift())
    }
  }
  return array.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(array) {
  let midpoint = Math.round(array.length/2)
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf),mergeSort(secondHalf))
  }
}
