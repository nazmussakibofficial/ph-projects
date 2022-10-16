function startFan() {
    console.log()
}

startFan();

var student = {
    id: 115,
    name: 'sakib',
    class: 10,
    marks: 98

}

console.log(student.id);

var studentKeys = Object.keys(student);
var studentValues = Object.values(student);

for (var i = 0; i < studentKeys.length; i++) {
    var studentName = studentKeys[i];
    var studentValue = student[studentName];
    console.log(studentName, studentValue);
}

for (var studentName in student) {
    var value = student[studentName];
    console.log(studentName, value);
}