const obj = {

    name: 'dog'
 
}

Object.defineProperty(obj, 'class', {

    value: 'pug',
    writable: true,
    enumerable: true,
    configurable: false,
})
Object.preventExtensions(obj)

obj.char = 'cute'

console.log(obj)

//===============================2========================//

const obj1 = {

    name: 'Liviu'
 
}

Object.defineProperty(obj1, 'class', {

    value: 'begginer',
    writable: true,
    enumerable: true,
    configurable: false,
})
Object.seal(obj1)

obj1.char = 'smart'

obj1.name = 'Dragutan'

console.log(obj1)
//===============================3========================//

const obj2 = {

    name: 'Liviu'
 }

Object.defineProperty(obj2, 'class', {

    value: 'begginer',
    writable: true,
    enumerable: true,
    configurable: false,
})
Object.freeze(obj2)

obj2.char = 'smart'

obj2.name = 'Dragutan'

console.log(obj2)

// ==============================4========================

const arr = [3, 9, 4, 21, 5, 18]

console.log(arr.sort((a, b)=> a - b))

// console.log(arr.sort((a, b)=> b - a))

// ==============================5========================

const arr1 = [
    {
        nume: 'Antony'
    },
    {
        nume: 'Paul'
    },
    {
        nume: 'Chris'
    }
]

console.log(arr1.sort((a, b) => a.nume > b.nume ? 1 : -1))
