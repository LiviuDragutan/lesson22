const arr2 = [
    {
        nume: 'Antony',
        age: '44'
    },
    {
        nume: 'Paul',
        age: '45'
    },
    {
        nume: 'Chris',
        age: '33'
    }
]

console.log(arr2.sort((a, b) => a.age < b.age ? 1 : -1))
