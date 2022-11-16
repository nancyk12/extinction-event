//#unordered-dinos - parent id
// variables
let dinoList1 = document.querySelectorAll('#ordered-dinos li');
let dinoList2 = document.querySelectorAll('#unordered-dinos li');
let imgs = document.querySelectorAll('#row img');
let destroyAll = document.querySelector('#destroy-all');
let body = document.querySelector('body');

//test 
console.log(dinoList1);
console.log(dinoList2);
console.log(imgs);

//set individual eventlisteners for crossout , fadeout, collapse
crossOut(dinoList1);
fadeOut(dinoList2);
collapseImg(imgs);

//destroy all

//setup event listener , call exinguish all on click
destroyAll.addEventListener('click', function(){
    extinguishAll(dinoList1, dinoList2,imgs);
})

//Functions

//sets event listener for cross out on each row 
function crossOut(array){
    for (let i = 0; i < array.length; i++) {

        array[i].addEventListener('click', function(){

            if (array[i].style.textDecoration !== "Line-through solid red"){
                array[i].style.textDecoration = "Line-through solid red";
            } else {
                array[i].style.textDecoration = "none";
            }
        })
    }
}

//sets event listener for fade out on each row 
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
//sets event listener for collapse each image when clicked on
function collapseImg(imgs){

    for (let i = 0; i < imgs.length; i++){
        imgs[i].addEventListener('click', function(event){
            element = event.target;

            if (element.style.width !== "0px"){
                element.style.width = "0px";
            }
        }) 
    }
}

//for running all the effects 
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

