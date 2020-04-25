let a=0; 
let b=1;
let h=0.2;
let n=(b-a)/h;
let X = [n]; let Y = [n];

X[0]=a; Y[0]=1.5;

for(let i =1; i <= n; i++) {
  X[i] = X[i-1] + h
  // Y[i] = Fa(X[i])
  Y[i] = improvedMethod(X[i], Y[i-1])
}

// for(let i=1; i<=n; i++){
//         X[i]=a+i*h;
//         Y[i]=Y[i-1]+h*F(X[i-1],Y[i-1]);
// }


for(let i=0; i<=n; i++){
  console.log("X[" + i + "]=" + X[i] + " ");
}
console.log("\n\n")

for(let i=0; i<=n; i++){
  console.log("Y[" + i + "]=" + Y[i] + " ");
}

function F(x,y){
  return y - x
}

//ANALYTICS METHOD
function Fa(x){
  return 0.5 * Math.exp(x) + x + 1
}


// SECOND METHOD - IMPROVED
function improvedMethod(x, y){
  const xpol = x + h/2
  const ypol = y + h/2 * F(x, y)
  return y + h * F(xpol, ypol)
}

