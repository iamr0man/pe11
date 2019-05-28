// function foo(){
//     let a = 5;

//     function boo(){
//         alert("");
//         let b = 5;
//     }

//     let c = 3;
// }

// alert(a);
// alert(b);
// alert(c);

// console.log(doSomething);
// doSomething();

// function doSomething(){
//     alert("foo")
// }

// console.log(something);
// something();

// var something = function(){
//     alert("Never been seen");
// }


debugger;

// function foo(i) {
//     if (i < 0)
//       return;
//     console.log('begin: ' + i);
//     foo(i - 1);
//     console.log('end: ' + i);
//   }
//   foo(3);

// function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }
//   fn_inside = outside(3); // Подумайте над этим: дайте мне функцию,
//                           // который передай 3
  
//   alert(fn_inside(5));    // возвращает 8
  
//   result1 = outside(3)(5); // возвращает 8

// function A(x) {
//     function B(y) {
//       function C(z) {
//         console.log(x + y + z);
//       }
//       C(3);
//     }
//     B(2);
//   }
//   A(1); // в консоле выведится 6 (1 + 2 + 3)

function outside() {
    var x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  outside()(10); // возвращает 20 вместо 10