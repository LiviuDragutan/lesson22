const obj = {

    dog: 'pug'
 
}

Object.defineProperty(obj, 'size', {

    value: 'small',
    writable: false,
    enumerable: true,
    configurable: true,
})

Object.defineProperty(obj, 'size', {

    value: 'small',
    writable: true,
    enumerable: false,
    configurable: true,
})


console.log(Object.values(obj))