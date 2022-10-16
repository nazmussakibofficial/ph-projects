const numbers = [1, 2, 3, 4];

const total = numbers.reduce();

const student = {
    name: 'Sakib',
    age: '15'
}

class Instructor extends Teammember {
    name;
    designation = 'Instructor';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
}

const Sakib = new Instructor('Sakib', 'Dhaka');