window.onload= function(){
    let header=document.querySelector('header');
    let footer=document.querySelector('footer');
    let nav =document.querySelector('nav');
    let arr=[header,footer,nav];
    console.log(arr);
    arr.forEach(element => (element.innerHTML='Another value'));
    console.log(arr);
};


