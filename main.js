//1. querySelelctorAll
//#ordered-dinos - parent id

// variables
let dinoList1 = document.querySelectorAll('#ordered-dinos li');
//let dinoList2 = document.querySelectorAll('#unordered-dinos');
//let row = document.querySelector('#row');
//let row2 = document.querySelectorAll('#row');
//let destroyAll = document.querySelector('#destroy-all');
//let body = document.querySelector('body');


function olStrike(){
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].addEventListener('click', function(){
            console.log(dinoList1[i].innerText);
            dinoList1[i].style.textDecoration = "line-through";
        })
    }
}

olStrike(); 

//#unordered-dinos - parent id

let dinoList2 = document.querySelector('#unordered-dinos');

dinoList2.addEventListener('click', function(event){
    let listItem = event.target;
    console.log(listItem.innerText);
    listItem.style.opacity = '0';
});


//#row - parent id

let row = document.querySelector('#row')  

row.addEventListener("click", function(event){
    let rowItem = event.target; 
    rowItem.style.width = "0px"
});

//#burn - parent id
//let destroyAll = document.querySelectorAll('#destroy-all');

//destroyAll.add addEventListener('click', function(){
    extinguishAll(olStrike, dinoList2, row );
//})

/*
// variables
//let dinoList1 = document.querySelectorAll('#ordered-dinos li');
//let dinoList2 = document.querySelectorAll('#unordered-dinos');
//let row = document.querySelector('#row');
//let row2 = document.querySelectorAll('#row');
//let destroyAll = document.querySelector('#destroy-all');
//let body = document.querySelector('body');

//test 
console.log(dinoList1);
console.log(dinoList2);
console.log(row);
console.log(row2);

//programs
crossOut(dinoList1);
fadeOut(dinoList2);
collapseImg(row);

//destroy all

destroyAll.addEventListener('click', function(){
    extinguishAll(dinoList1, dinoList2, row2);
})

//Functions

function crossOut(array){
    for (let i = 0; i < array.length; i++) {

        array[i].addEventListener('click', function(){

            if (array[i].style.textDecoration !== "Line-through solid red"){
                array[i].style.textDecoration = "Line-trhough solid red";
            } else {
                array[i].style.textDecoration = "none";
            }
        })
    }
}

function fadeOut(array){
    for (let i = 0; i < array.length; i++){

        array[i].addEventListener('click', function() {

            if(array[i].style.opacity !== "0"){
                array[i].style.opacity = "0";
            } else {
                array[i].style.opacity = "100";
            }
        })
    }
}

function collapseImg(imgVar){
    imgVar.addEventListener('click', function(event){
        element = event.target;

        if (element.style.width !== "0px"){
            element.style.width = "0px";
        }
    })
}

function extinguishAll(array1, array2, array3){

    for(let i = 0; i < array1.length; i++){

        array1[i].style.textDecoration = "line-through solid red"
    }

    for(let i = 0; i < array2.length; i++){

        array2[i].style.opacity = "0";
    }

    for (let i = 0; i < array3.length; i++){
        array3[i].style.width = "0px";
    }
}

*/