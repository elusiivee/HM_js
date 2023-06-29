//1
let login = prompt("input your login: ")
let password = prompt("input your password: ")
if (login == "admin" && password == "1234"){
    console.log("welcome in system")
}else{
    console.log("login or password is incorrect") 
}
//2   fixed
let Age = prompt("Введіть свій вік");
Age = (Age > 18);                                       //   >=18

console.log(Age);

//3

let day = prompt("input the day: ")

switch (day.toLowerCase()){
    case "tuesday":
    case "thursday":
        console.log(`Today is ${day}, you have a lesson at 7pm`);
        break;
    case "monday":
    case "wednesday":
    case "friday":
    case "saturday":
    case "sunday":
        console.log(`Today is ${day}, you have any lessons`);
        break;
    default:
        console.log("something is wrong")
        // чому при вводі наприклад Friday воно заходить також і в default
}