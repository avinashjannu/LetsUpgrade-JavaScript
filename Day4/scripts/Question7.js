
let iNo=+prompt('Enter number');
let i=0,j=0;
for(i=2;i<=iNo;i++)
{
  let flag=0;
    for(j=2;j<=(i/2);j++)
    {
        if(i%j==0)
        {
          flag=1;  
          break;
        }
         
    }  
    if(flag==0)
        console.log(i);

}
