(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));


// 2

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);