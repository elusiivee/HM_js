window.onload = function(){
    let button1=document.getElementById('butt')
    
    button1.onclick=function(){
        let currentSize= parseFloat(button1.style.fontSize);
        let fonstsize = currentSize + 10;
        button1.style.fontSize = fonstsize+'px';
        currentSize = fonstsize;
    }
}