// Code your solutions in this file
function writeCards (stringArray,eventName) {
let newArray = [];
  for (let i=0; i<stringArray.length; i++) {
    newArray.push(`Thank you, ${stringArray[i]}, for the wonderful surprise gift!`);
  }
  return newArray;
}

function countDown(int) {
  let i = int;
  while (i>-1) {
    console.log(i);
    --i;
  }
}

countDown(10);