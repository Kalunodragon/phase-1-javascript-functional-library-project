function checkInput(input){
    return input instanceof Array ?
    input.slice() :
    Object.values(input)
}

function myEach(collection, callback){
    const checkedCollection = checkInput(collection)
    for(let x = 0; x < checkedCollection.length; x++) {
        callback(checkedCollection[x])
    }
    return collection
}

function myMap(collection, callback){
    const checkedCollection = checkInput(collection)
    let arrReturn = []
    for(let x = 0; x < checkedCollection.length; x++) {
        arrReturn.push(callback(checkedCollection[x]))
    }
    return arrReturn
}

function myReduce(collection, callback, acc){
    let array = checkInput(collection)
    if(!acc){
        acc = array[0]
        array = array.slice(1)
    }
    const length = array.length
    for(let x = 0; x < length; x++){
        acc = callback(acc, array[x], array)
    }
    return acc
}

function myFind(collection, predicate){
    let checked = checkInput(collection)
    for(let x = 0; x < checked.length; x++){
        if(predicate(checked[x])) return checked[x]
    }
}

function myFilter(collection, predicate){
    let checked = checkInput(collection)
    let array = []
    for(let x = 0; x < checked.length; x++){
        if(predicate(checked[x])){
            array.push(checked[x])
        }
    }
    return array
}

function mySize(collection){
    let checked = checkInput(collection)
    return checked.length
}

function myFirst(array, n){
    return (n)? array.slice(0, n): array[0]
}

function myLast(array, n){
    return (n)? array.slice(array.length-n, array.length): array[array.length-1]
}

function myKeys(obj){
    const keys = []
    for(let key in obj){
        keys.push(key)
    }
    return keys
}

function myValues(obj){
    const value = []
    for(let key in obj){
        value.push(obj[key])
    }
    return value
}