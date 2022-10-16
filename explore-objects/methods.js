const person = {
    exam: function () { },
    improveExam: function () {
        this.exam()
    }
}

const student = {}

const studentMoney = person.exam.call(student);