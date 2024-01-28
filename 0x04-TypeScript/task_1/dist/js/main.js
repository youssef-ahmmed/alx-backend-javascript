var printTeacher = function (firstName, lastName) {
    return firstName[0] + '. ' + lastName[0];
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently Working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('yousef', 'ahmed');
console.log(student.displayName());
console.log(student.workOnHomework());
//# sourceMappingURL=main.js.map