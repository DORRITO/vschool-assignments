var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}

var evens = myArray.myFilter(function(item) {
  return item % 2 === 0;
});
console.log(evens);












var numArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var myNewArray = numArray.myFilter(function(item){
    return item < 5
})