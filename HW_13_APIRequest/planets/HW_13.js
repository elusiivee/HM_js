let arr = [];
let arrfinm= [];
fetch('https://swapi.dev/api/planets').then(response=>response.json()).then(function(data){
        let planets=data.results;
        console.log(planets);
        getPlanet(planets);
        createBoxes(arr);
    });
async function fetching(){
    let response = await fetch('https://swapi.dev/api/planets');
    let data = await response.json();
    let planets=data.results;
        console.log(planets);
        getPlanet(planets);
        createBoxes(arr);
}

let getPlanet = function(array){
    for (let i=0; i<array.length; i++){
        arr.push(array[i]);
    }
}
function sort() {
    rowbox.innerHTML = '';
    arr.sort(function(a, b) {
        return a.diameter - b.diameter;
    });
};

function createBoxes(arr) {
    let rowbox = document.getElementById('rowbox');
    for (let i = 0; i < arr.length; i++) {
        let box = document.createElement('div');
        let button = document.createElement('button');
        box.innerHTML = 'Name: ' + arr[i].name +
                ',<br> Rotation period: ' + arr[i].rotation_period +
                ',<br> Diametr period: ' + arr[i].diameter +
                ',<br> Orbital period: ' + arr[i].orbital_period;
        box.appendChild(button);
        rowbox.appendChild(box);
        box.style.border = '2px solid #8a8a8a';
        box.style.padding = '1rem';
        box.style.marginTop = '0.5rem';
        box.style.marginBottom = '0.5rem';
        box.style.borderRadius = '0.5rem';
        box.classList.add('product');
        box.classList.add('col-sm-6');
        box.classList.add('col-md-4');
        box.classList.add('col-lg-3');
        button.classList.add('btn');
        button.classList.add('btn-info');
        button.innerText='Info';
    }
  }

function searchValue(){
    rowbox.innerHTML = '';
    let form = document.getElementById('input').value.trim().toLowerCase();
    let filteredArr = arr.filter(planet => planet.name.toLowerCase().includes(form));
    createBoxes(filteredArr);
}

function moreInfo(){

}



  window.onload = function() {
    
    let btnsrc = document.getElementById('btnsrc');
    btnsrc.addEventListener('click', function(){
        event.preventDefault();
        searchValue();
        
    })


    let btn = document.getElementById('btn1');
    btn.addEventListener('click', function() {
        sort();
        createBoxes(arr);
    });
  };






