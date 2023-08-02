window.onload = function(){
    const canvas = document.getElementById("canvas");
    const btn = document.getElementById("btn");
    const ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    btn.addEventListener('click', function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(10, 0, canvas.width, canvas.height);
    })

}