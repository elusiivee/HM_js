window.onload = function(){
    let menu = document.getElementById('menu');
    let butt = document.getElementById('dropdown_butt')

    butt.onclick=function(){
        if (menu.classList.contains('hide')){
            menu.classList.remove('hide');
            menu.classList.add('show');
            butt.innerHTML='Close menu';
        }else{
            menu.classList.remove('show');
            menu.classList.add('hide');
            butt.innerHTML='Open menu';
        }
    }
}




