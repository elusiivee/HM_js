const array = ['rock','scissors','paper'];


let Game =  function(){

    //let Continuity = true;
    while(true){
        let MySign=prompt('Input your sign: (rock, scissors, paper)' );
        let OpponentSing = Math.floor(Math.random()*3);
        if (MySign==array[OpponentSing]){
            console.log(`Draw, your opponent had ${array[OpponentSing]}`);
            continue;
        }else if(MySign=='rock' && OpponentSing==1){
            console.log(`You win, your opponent had ${array[OpponentSing]}`);
            break;
        }else if (MySign=='scissors' && OpponentSing==2){
            console.log(`You win, your opponent had ${array[OpponentSing]}`);
            break;
        }else if (MySign=='paper' && OpponentSing==0){
            console.log(`You win, your opponent had ${array[OpponentSing]}`);
            break;
        }else{
            console.log('You lose!!!');
            break;   
        }
    }
    
}

//Game();
//є багато нюансів
//1: Чи є правильно те що я скористався масивом, можливо булоб краще створити ще одну фунцію яка повертала б значення опонента і передати її в функцію 'Game'...
//2: Чомусь `break` не працює, можливо воно виходить з блоку `if` і потрапляє знову в `while`. Continuity = false також не працює...

//==================================

let GetCentury = function(year){
    let century = Math.ceil(year/100);
    return century;
}
console.log(GetCentury(1801));
console.log(GetCentury(1700));
console.log(GetCentury(1601));
console.log(GetCentury(2000));

//===================================


const Array = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false']];
let sortArray = []

let sort = function(type, arr){
    for (let i=0; i<arr.length; i++){
        if(typeof Array[i] == type){
            sortArray.push(Array[i])
        }else{
            continue
        }
    }
    return(sortArray)
}

console.log(sort('string',Array))
sortArray= []
console.log(sort('boolean',Array))
sortArray= []
console.log(sort('number',Array))
sortArray= []
console.log(sort('object',Array))



