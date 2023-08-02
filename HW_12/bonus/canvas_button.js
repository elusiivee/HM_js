window.onload = function(){
    let canv = document.querySelector('canvas');
    let btn = document.getElementById('btn');
    let context = canv.getContext('2d');

    btn.addEventListener('click', function(){
        canv.style.marginLeft = 10 + 'px';
    });


}