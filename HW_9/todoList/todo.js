
let date = new Date();
console.log(date.toUTCString());

let tasks = [];
let originalTasks = [];
window.onload = function(){
    let form = document.querySelector('div input');
    let btnScss = document.getElementById('success');
    let btnSrc = document.getElementById('search');
    let alltsks = document.getElementById('Alltsks');

    btnScss.addEventListener('click', function(){
        let taskText  = form.value.trim();
        tasks .push({
            text: taskText,
            time: date.toUTCString(),
        });
        form.value='';
        createTasks();
    })

    function createTasks(){
        let taskBoxText = document.getElementById('task_box');
        taskBoxText.innerHTML = '';


        tasks.forEach((task, index) =>{
            
            let box = document.createElement('div');
            box.textContent = task.text + ' (Created at: ' + task.time + ')';
            taskBoxText.appendChild(box);
            box.style.border = '2px solid #8a8a8a';
            box.style.padding = '1rem';
            box.style.marginTop = '0.5rem';
            box.style.marginBottom = '0.5rem';
            box.style.borderRadius = '0.5rem';
            box.addEventListener('click', function(event) {         // видаляти при кліку
                event.stopPropagation()
                box.remove();
                tasks.splice(index, 1)
            })
        
        })
    }
    btnSrc.addEventListener('click', function(){
        let seachText = form.value.trim().toLowerCase();
        originalTasks = tasks;
        let findedTask = tasks.filter((task) => task.text.toLowerCase().includes(seachText));
        tasks = findedTask;
        createTasks();
        alltsks.style.visibility = 'visible';
    })
    function showAllTasks() {
        tasks = originalTasks;
        originalTasks = [];
        createTasks(); 
      }

    alltsks.addEventListener('click', showAllTasks);


}