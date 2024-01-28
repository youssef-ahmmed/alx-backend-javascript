// Task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Task 2
interface Directors extends Teacher {
    numberOfReports: number;
}

// Task 3
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return firstName[0] + '. ' + lastName[0];
}

// Task 4
interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

interface constructorFunction {
    new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {

    constructor(
        readonly firstName: string,
        readonly lastName: string
    ) {}

    workOnHomework(): string {
        return `Currently Working`;
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass('yousef', 'ahmed');
console.log(student.displayName());
console.log(student.workOnHomework());
