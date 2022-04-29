
// — Если число положительное, то добавлем его в ранее созданный массив с помощь функции push (пример exampleArr.push(currentPositiveNumber))
// — После выполнения цикла проверям массив, который наполняли только положиельными значениями
// — Если он не пустой, то возвращаем этот массив
// — Если пустой, возвращаем null;
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
