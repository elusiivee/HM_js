window.onload = function(){
    let size = document.getElementById('options');
    let topping = document.querySelectorAll('input[type="checkbox"]');
    let PizaAnount = document.getElementById('amount');
    let showprice = document.getElementById('price')
    let button = document.getElementById('btn1')
    console.log(topping.checked)

    function Calprice(){
        let price= 0;
        if (size.value == 'Small'){
            price +=20;
        }else if(size.value == 'Medium'){
            price += 25;
        }else if(size.value == 'Large'){
            price += 30;
        }

        topping.forEach(checkbox => {
            if (checkbox.checked) {
              price += 5;
            }
            
        });
        let amount = (PizaAnount.value);
        price *= amount;
        

        showprice.textContent = 'Price: ' + price+'$';
        
    }

    function checkForm() {

        if (size.value) {
            button.removeAttribute('disabled');
        }else{
            button.setAttribute('disabled', '');
        }
      }

    size.addEventListener('change', function () {
        checkForm(); 
        Calprice(); 
      });
    topping.forEach(checkbox => {
        checkbox.addEventListener('change', Calprice);
      });
    PizaAnount.addEventListener('input', Calprice);
    Calprice();
}



