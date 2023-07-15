window.onload= function(){
    let Headrow= document.getElementsByClassName('header-content row');
    let autoplay = document.querySelector('[autoplay]');  //не можу зрозуміти чи потрібно зробити тег з простим class='autoplay'?
    let elements = document.querySelectorAll('div, p');
    let listItems = document.querySelectorAll('ul.nav > li');   
    let listItem = document.querySelectorAll('li:nth-child(2)');
    console.log(Headrow);
    console.log(autoplay);
    console.log(elements);
    console.log(listItems);
    console.log(listItem);
}




