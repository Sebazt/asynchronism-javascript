
const cows = 10;
const countCows = new Promise((res, rej) => {
  if (cows >= 14) {
    res("It´s okey, we have milk")
  } else {
    rej("We have a problem")
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log("Done :D")
})

function exercise1(time, message) {

  const exercise = new Promise((res, rej) => {
    window.setTimeout(() => {
      message
    }, time)
  })
}