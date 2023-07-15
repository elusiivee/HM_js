window.onload= function(){
    let header=document.querySelectorAll('header');
    let footer=document.querySelectorAll('footer');
    let nav =document.querySelectorAll('nav');
    let arr=[header,footer,nav];
    

    for (let i=0; i<arr.length; i++){
        arr.forEach(function(element){
            element.innerHTML = 'div';
        })
    }
    console.log(arr)
}



