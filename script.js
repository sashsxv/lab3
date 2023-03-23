

function checkNumber(num) {
  if (typeof num === 'number' && num % 2 == 0) {
     return console.log('парне')
  } 
  if (typeof num ==='number' && num % 2 !== 0) {
    return console.log('непарне')
  } else{
    return console.log('');
  }
}





let arr = [];
let sum = 0;
function Check() {
  nextPrime: for (let i = 2; i < 30; i++) {
    
    for (let j = 2; j < i; j++) {
      
      if (i % j == 0) continue nextPrime; 
    }
    arr.push(i);
    if (arr.length == 5) {
      for (let k of arr) {
        sum += +k;
      }
      console.log(sum);
    }
  }
}

Check();


const Func = (number) => {
  let array = [];
  for (let i = 0; i < number; i++) {
    let tmp = "";
    for (let j = 0; j <= i; j++) {
      tmp += "1";
    }
    array.push(+tmp);
    tmp = "";
  }
  let res = 0;
  array.forEach((el) => (res += el));
  return res;
};

console.log(Func(5));

