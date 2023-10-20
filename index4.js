const obj = {
    a: 'a',
    b: 'b',
    c: {
        d: {
            greet: () => console.log('hi'),
            y: 'y'
        }
    }
}

// console.log('obj3', JSON.stringify(obj3))

const deepClone = (obj) => {
    let clone = {...obj}
    Object.keys(clone).forEach((key) => {
        clone[key] = typeof clone[key] === 'object' ? deepClone (obj[key]) : obj[key]
    })

    return clone;
    }

    const obj1 = deepClone(obj)

    obj1.c.d.y = 'x'

    console.log('obj1', obj1)
    console.log('obj', obj)

    obj.c.d.greet()
    obj1.c.d.greet()
