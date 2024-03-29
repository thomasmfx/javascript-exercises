const removeFromArray = function(array, ...itemsToRemove) {
  itemsToRemove.forEach(item => {
    if (array.includes(item)) {
      array = array.filter(element => element !== item);
    }
  })

  return array;
};

// itemsToRemove.forEach(item => {
//   if (array.includes(item)) {
//     array = array.filter(element => element !== item);
//   }
// });

// return array;

// if (itemsToRemove && itemPosition > -1) {
  //   Array.splice(itemPosition, 1);
  // }
  
  // for(itemsToRemove of Array) {
  //   Segunda estratégia: for...of loop
  //   if (itemsToRemove && itemPosition > -1) {
  //   } else {
  //     continue;
  //   }
  // }
  

    /* for (let i = Array.length - 1; i > 0; i--) {
      if (i === itemsToRemove && itemPosition > -1) {
        Array.splice(itemPosition, 1);
      } else if (i != itemsToRemove) {
        continue;
      }
    } */



// Do not edit below this line
module.exports = removeFromArray;
