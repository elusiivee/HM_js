let dogarray = []
fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(function(data){
    let dog=data.message;
    for (let breed in dog){
        dogarray.push(breed)
    }
    console.log(dogarray);
    createBoxes(dogarray);
    getphoto();
})


function createBoxes(arr) {
    let rowbox = document.getElementById('rowbox');
    for (let i = 0; i < arr.length; i++) {
        let box = document.createElement('div');
        box.innerHTML = arr[i];
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
    }
  }
  function getphoto(){
    let divs = document.querySelectorAll('#rowbox > div')
    divs.forEach(function (div) {
        div.addEventListener('click', function (){
            let getdog = div.textContent.trim();
            console.log(getdog);
            let link = `https://dog.ceo/api/breed/${getdog}/images/random`;
            let imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = '';

            fetch(link)
                .then(response => response.json())
                .then(data => {
                let imageUrl = data.message;
                let imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                imageContainer.appendChild(imageElement);
                })
    })
  })
  }