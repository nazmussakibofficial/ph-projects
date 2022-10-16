
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'rita', age: 22 }
];

const age = people.map(people => people.age)

console.log(age)
const total = age.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total);

arr1 = [0, 1, 2]
arr2 = [3, 4, 5]

const maxTwo = (arr1, arr2) => {
    arr3 = [...arr1, ...arr2];
    max = Math.max(...arr3);
    return max
}

console.log(maxTwo(arr1, arr2));

const mathmul = arr1 => {
    const arr4 = arr1.map(x => x ** 2);
    const total = arr4.reduce((previous, current) => {
        return previous + current
    }, 0);
    const avg = parseFloat(total / arr1.length);
    return avg;
}

console.log(mathmul(arr1))


const names = ['sakib', 'mitu', 'joy']


const even = names.filter(names => names.length % 2 === 0);

console.log(even);
