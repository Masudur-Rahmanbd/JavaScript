//exam marks if,else

var marks = prompt("Enter your marks:");
marks = Number(marks);
if (marks > 100 || marks < 0) {
    document.write("Invalid marks. Please enter a number between 0 and 100.");
} else if (marks >= 80) {
    document.write("A+");
} else if (marks >= 70) {
    document.write("A");
} else if (marks >= 60) {
    document.write("A-");
} else if (marks >= 50) {
    document.write("B");
} else if (marks >= 40) {
    document.write("C");
} else if (marks >= 33) {
    document.write("D");
} else {
    document.write("F");
}


