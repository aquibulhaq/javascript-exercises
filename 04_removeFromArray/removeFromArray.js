const removeFromArray = function (array, ...toRemove) {
  return array.filter(val => !toRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
