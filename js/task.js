const array = [1, 2, 3, -1, -2, -3];
function newArr(arr) {
    const exampleArr = []
    if (arr.length < 0){
        alert('массив пуст')
        return console.log('массив пуст') ;
    }else {
        for (let i = 0 ; i < arr.length ; i++ ){
            if (arr[i] > 0){
                exampleArr.push(arr[i])
            }
        }
        if ( exampleArr.length === 0 ){
            return console.log("null");
        }else {
            return console.log(exampleArr);
        }
    }
}
newArr(array)
