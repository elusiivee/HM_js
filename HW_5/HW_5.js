
function FilmMaker(name, year, rating){
    this.name=name;
    this.year=year;
    this.rating=rating;
}

FilmMaker.prototype.giveInfo=function(){
    console.log(`The name of film is ${this.name}, it was released in ${this.year} and his rating is ${this.rating}`);
}


let ex = new FilmMaker('Fast and Furious', 2012, 9);
console.log(ex);
ex.giveInfo();
//==============================

const FilmList = [];
let Film1 = new FilmMaker('Fast and Furious', 2012, 9);
FilmList.push(Film1);
let Film2 = new FilmMaker('Maquin', 2013, 7);
FilmList.push(Film2);
let Film3 = new FilmMaker('Wall', 2016, 6);
FilmList.push(Film3);
let Film4 = new FilmMaker('Iron man', 2017, 10);
FilmList.push(Film4);
let Film5 = new FilmMaker('Shrek', 2011, 4);
FilmList.push(Film5);

console.log(FilmList)

let sortPopular = function(arr){
    arr.sort((a,b)=>b.rating-a.rating);
    return arr
}

console.log(sortPopular(FilmList))

//==========


let Films = ['Fast and Furious','Maquin','Wall','Iron man 1','Iron man 2','Shrek','Super Man 1','Super Man 2','Super Man 3','Racing'];
let year = [2013,2023,2011,2010,2011,2003,2009,2015,2016,2019];

let list = []
for (let i = 0; i < Films.length; i++) {
    let movie={
        Title: Films[i],
        Year: year[i],
    }
    list.push(movie)
  }
console.log(list)


function ChooseFilm(array,year){
    return array.filter(function(movie){
        return movie.Year == year;
    });
}

let FilmSort = ChooseFilm(list,2011)
console.log(FilmSort)



