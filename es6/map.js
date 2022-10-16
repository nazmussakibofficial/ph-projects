const numbers = [1, 2, 3, 4];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleIt(number) {
    return number * 2;
}

const makeDouble = numbers.map(doubleIt);


const friends = ['Muna', 'Tom']

const firstLetters = friends.map(friend => friend[0]);

const products = [
    { id: 1, name: 'laptop', price: 45000 }
];

const items = products.map(product => product.name);

console.log(items);

const bigNums = number.filter(number => number > 2);
const findNums = number.find(number => number > 2)