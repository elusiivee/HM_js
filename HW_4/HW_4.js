let array1 =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

//1
let getValue = function(arg,array){
    switch(arg){
        case'first':
        console.log(array[0]);
        break;
        case'last':
        console.log(array[array.length - 1]);
        break;
        default:
            console.log('something is wrong');
    }

    //if(arg == 'first'){                                            
       //    console.log(array[0]);
    //}else if(arg == 'last'){
    //    console.log(array[array.length - 1]);
    //}else{
    //    console.log('something is wrong');
    //}
}


getValue('first',array1)
getValue('last',array1)

//2


let smile = [':)', '=)',':)', '=)',':)', '=)']; 


let changeSmile = function(arg,array){
    for(i = 0; i<smile.length; i++){
        if(array[i]==':)'){
            array[i]=arg;
        }else{
            continue
        }
    }
    console.log(smile)
}


changeSmile(';)))',smile)





