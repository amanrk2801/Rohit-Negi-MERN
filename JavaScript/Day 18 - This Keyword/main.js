var a = 100; // global variable

let meet = function () {
  // x,y,z not access outside created here and died here
  var x = 10;
  let y = 20;
  const z = 30;
  console.log(x, y, z, a);
};

meet();
// console.log(x); // x is not defined
// console.log(y); // y is not defined
// console.log(z); // z is not defined
console.log(a); // 100
