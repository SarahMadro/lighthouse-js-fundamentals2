function range(start, end, step) {
  var myArray = [];
  var iterations = (end - start) / step;
  for(let i = 0; i <= iterations; i++) {
    var value = start + (step * i);
    myArray.push(value);
  }
  console.log(myArray);
  return myArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));