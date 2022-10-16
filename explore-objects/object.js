const player = {};

player.name = 'Small';
player.specialty = 'foorball'

player.bat = function ball() { }

const student = {
    name: 'Sakib',
    job: 'baller'
}

const person = new Object();

const item = Object.create(null);

console.log(player.bat())

const keys = Object.keys(student);
const value = Object.values(student);

const pair = Object.entries(student);

delete student.name;

Object.seal(student);
Object.freeze(student);

for (const key in bottle) {
    console.log(key)
}