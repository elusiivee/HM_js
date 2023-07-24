window.onload = function(){
    let form = document.querySelector('div input');
    let btn = document.querySelector('div button');
    btn.addEventListener('click', function(){
        let box_number = Number(form.value)
    //let box = document.createElement("div");           чому якщо я створюю box на цій стрічці то створюється тільки 1 dic
        for (let i = 0; i<box_number; i++){
            let box = document.createElement("div");            // але якшо я його створюю тут то все виходить
            let randomcolor = Math.floor(Math.random()*16777215).toString(16)
            document.body.appendChild(box);
            box.innerText=i+1;
            box.style.backgroundColor = "#" + randomcolor;
           }
    })
};