//5

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
console.log(year,month);
let DaysInThisMonth = function(year,month){
    return new Date(year,month, 0).getDate();
}
let DaysInNextMonth = function(year,month){
    return new Date(year,month+1, 0).getDate();
}
console.log(`В цьому місяці ${DaysInThisMonth(year,month)} днів, в наступному ${DaysInNextMonth(year,month)}`);

//console.log(`In the ${month} of ${year} is ${DaysInThisMonth(year,month)}`);
//console.log(`In the ${month} of ${year} is ${DaysInNextMonth(year,month)}`);
