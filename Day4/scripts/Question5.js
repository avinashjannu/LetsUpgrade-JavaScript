console.log('q5');
let sales=Number(prompt('Enter sale done by employee'));
let commission=0;
console.log(sales)
if(sales>=0 && sales<=5000)
{
    commission=sales*0.02;
}
else if(sales>=5001 && sales<=10000)
{
    commission=sales*0.05;
}
else if(sales>=10001 && sales<=20000)
{
    commission=sales*0.07;
}
else if(sales>20000)
{
    commission=sales*0.1;
}
else{
    commission=-1;
}

if(commission!=-1)
  console.log(commission);
else
{
    console.log('Invalid Input');
}  