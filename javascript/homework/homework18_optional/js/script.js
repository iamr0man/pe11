const student = {};

student.firstName = prompt("Insert your name");
student.lastName = prompt("Insert your surname");

let subject = '',
    awfulMark = 0,
    sumOfMark = 0,
    sumOfSubject = 0;
const certificate = {};

do {
    subject = prompt('Insert subject: ');
    if (subject) {
        const mark = +prompt(`Insert mark of ${subject}: `);
        certificate[subject] = mark;
        if(mark < 4){
            awfulMark++;
        }
        sumOfSubject++;
        sumOfMark += mark;
    }
} while (subject);

student.tabel = certificate;

if (awfulMark === 0) {
    console.log('Студент переведен на следующий курс.')
}

if (sumOfMark / sumOfSubject > 7) {
    console.log('Студенту назначена стипендия.');
}