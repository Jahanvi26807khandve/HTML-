let student ={
    name: "jahanvi",
    course: "B.Tech",
    age: 19,
    city:"pune",
    skills: ["html", "css", "js"],
    "last name": "khandve",
    "": "empty",
};
student.attendence = 90;
delete student.city;

console.log(student.name);
console.log(student.course);
console.log(student.age);
console.log(student.city);
console.log(student.skills[2]);
console.log(student["last name"]);
console.log(student[""]);
console.log(student.attendence);