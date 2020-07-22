console.log('hello');
let iNo=+prompt('Enter positive number');
let arr=[];
for(let i=0;i<iNo;i++)
{
  arr.push(Math.floor(Math.random()*100));
}
console.log(arr);

let odd= arr.filter((el)=>el%2==1);
console.log(odd);

let oddCubes= arr.filter((el)=>el%2==1).map(el=>el**3);
console.log(oddCubes);
