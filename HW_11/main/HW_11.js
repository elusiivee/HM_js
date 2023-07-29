let info= []

window.onload = function(){
    let nick = document.getElementById('nkm');
    let email = document.getElementById('eml');
    let phone = document.getElementById('phn');
    // let nickValue = nick.value;
    // let emailValue = email.value;        // чому глобальні перемінні не передаються в функцію checkForm???
    // let phoneValue = phone.value;
    let button = document.getElementById('btn1')
    


    function checkForm() {
        // let nickValue = nick.value;
        // let emailValue = email.value;
        // let phoneValue = phone.value;
        if (nick.value !== '' && email.value !== '' && phone.value !== '') {
            button.removeAttribute('disabled');
        }else{
            button.setAttribute('disabled', '');
        }
      }

    button.addEventListener('click', function(){
        if(dataCheck() == true ){
            info.push({
                Nickname: nick.value,
                Email: email.value,
                Phone: phone.value,
            })
            console.log(info)
        }else{
            alert('data is incorect')
            console.log('fail')
        }
        
        
        
    })
    function dataCheck(){
        let nickPattern = /^[a-zA-Z]{2,}$/;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phonePattern = /^\+380\d{9}$/
        if ((nickPattern.test(nick.value))) {               // for your own testing
            console.log('Nick is valid');
          } else {
            console.log('Nick is invalid');
          }
        if (emailPattern.test(email.value)) {
            console.log('Email is valid');
          } else {
            console.log('Email is invalid');
          }
        if (phonePattern.test(phone.value)) {
            console.log('Phone is valid');
          } else {
            console.log('Phone is invalid');
          }                                                 // till here

        //testing if all inputs are verifiable
        if (nickPattern.test(nick.value) && emailPattern.test(email.value) && phonePattern.test(phone.value)){
            console.log('correct')
            return true;
        } else{
            console.log('something is wrong');
            return false;
        }
    }
    nick.addEventListener('input', checkForm, dataCheck);
    email.addEventListener('input', checkForm, dataCheck);
    phone.addEventListener('input', checkForm, dataCheck);
    dataCheck()
}

