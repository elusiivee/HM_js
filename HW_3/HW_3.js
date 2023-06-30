//1
let firstarray = [];

for(let i=0; i<21; i+=2) {
    firstarray.push(i);
}
console.log(firstarray)

//2

let oldarray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
let newarray = [];


for (let i=0; i<oldarray.length; i+=1){
    if (oldarray[i]==='Keep'){
        newarray.push(oldarray[i]);
    }
}
console.log(newarray)

//3

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]

for (let i=0; i<checkArr.length; i+=1){
    if(checkArr[i]<0){
        checkArr[i]=0
    }
}
console.log(checkArr)

//additional task
let days = ["Понеділок", "Середа", "Неділя"]
let plans = ["Урок 03", "Урок 04", "Вихідни"]

for(let i=0; i<days.length; i+=1){
    console.log(`Сьогодні ${days[i].toLocaleLowerCase()} у вас ${plans[i]}`)    //використав toLocaleLowerCase() так як в масиві day дні з великої букви ☺
}


//calculator


let FirstSign = Number(prompt('input first sign: '))
let SecondSigh = Number(prompt('input second sign: '))
let Operation = prompt('input your operation: ')

switch(Operation){
    case'+':
        console.log(FirstSign + SecondSigh);
        break;
    case'-':
        console.log(FirstSign - SecondSigh);
        break;
    case'*':
        console.log(FirstSign * SecondSigh);
        break;
    case'/':
        console.log(FirstSign / SecondSigh);
        break;
    default:
        console.log('Something is wrong')
}