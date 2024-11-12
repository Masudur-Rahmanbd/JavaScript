//adding function inside constructor

function student(name,age,cgpa,lang){
    this.name=name;
    this.age=age;
    this.cgpa;
    this.lang;
    this.display = function()
    {
        console.log(name);
        console.log(age);
        console.log(cgpa);
        console.log(lang);
    }
}
var student1=new student("masud", "23", "3.50", ["bangla", "enlish", "hindi"]);
var student2=new student("shakon", "33", "3.30", ["bangla", "enlish", "hindi"]);
var student3=new student("rahman", "30", "3.50", ["bangla", "enlish", "hindi"]);
student1.display();
student2.display();
student3.display();
