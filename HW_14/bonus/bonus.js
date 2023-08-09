const list = ['Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Dislike', 'Like', 'Dislike', 'Dislike', 'Dislike', 'Dislike',];


function getValue(arr){
    let likeamount = arr.filter(i => i == 'Like').length;
    let disamount = arr.filter(i => i == 'Dislike').length;

    if (likeamount > disamount){
        console.log('Like')
    }else if (likeamount < disamount){
        console.log('Dislike')
    }else if (likeamount = disamount){
        console.log('N/A')
    }
}

getValue(list);