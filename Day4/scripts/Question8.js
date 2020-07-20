// function ask(question,yes,no)
// {
//     if(confirm(question))
//         yes();
//     else 
//       no();

// }

// ask(
//     'Do you agree?',
//     function(){
//         alert('you agreed');
//     },
//     function(){
//         alert('You canceled the execution.');
//     }
// );

ask=(question,yes,no)=>{
    if(confirm(question))
        yes();
    else 
      no();
}

ask(
    'Do you agree?',
    function(){
        alert('you agreed');
    },
    function(){
        alert('You canceled the execution.');
    }
);