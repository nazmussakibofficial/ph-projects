const mul = (x, y) => {
    z = x + 2;
    p = y + 2;
    r = z * p;
    return r;
}
const result = mul(5, 1);
console.log(result);


const arr = [1, 2, 3, 4];
const fiv = arr.filter(x => x % 2 === 1);
console.log(fiv);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address.stret?.second;
console.log(userFloor);