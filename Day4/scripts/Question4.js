
add=(num1,num2)=>num1+num2;
sub=(num1,num2)=>num1-num2;
mult=(num1,num2)=>num1*num2;
div=(num1,num2)=>num1/num2;
sqrt=(num1)=>Math.sqrt(num1);
percentage=(obtainedScore,Total)=>(obtainedScore/Total)*100;


let result=add(10,20);
console.log(result);

result=mult(10,20);
console.log(result);

result=add(10,20);
console.log(result);

result=div(10,20);
console.log(result);

result=sqrt(49);
console.log(result);

result=percentage(473,650);
console.log(result);