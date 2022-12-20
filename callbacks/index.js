const sum = (n1, n2) => {
  return n1 + n2
}

const message = (n1, n2, callback) => {
  console.log(`the total is ${callback(n1, n2)}`);
}

message(10, 19, sum);

// other examle

setTimeout(() => {
  console.log("Hello JS ");
}, 3000)

const gretting = (name) =>{
  console.log(`Holi ${name}`);
}

setTimeout(gretting, 2000, "Sebas");


//exercise
function execCallback(callback){
  return setTimeout(()=>{
    console.log("Antes de ejecutar la fn");
    callback()
  },2000)
}

const myFn = () =>{
  console.log("After 2s");
}

execCallback(myFn)