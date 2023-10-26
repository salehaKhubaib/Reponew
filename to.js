
let input = document.getElementById('inp');
let  text = document.querySelector(".text");


function Add() {
    if(input.value == "")
    {
        alert("Must Add Tasks to do");
    }
    else
    {
    
let newone = document.createElement('ul');
        newone.innerHTML=`${input.value}  <i class="fa-solid fa-trash"> </i> `;
        text.appendChild(newone);
        input.value='';
        newone.querySelector('i.fa-solid.fa-trash').addEventListener('click', function() {
            newone.remove();
        });


    }
}


