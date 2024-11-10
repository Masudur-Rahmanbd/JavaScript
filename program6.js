var names = new Array ();
names [0] = "masud";
names [1] = "shakon";
names [2] = "mehedi";
console.log(names.length);

//PUSH
var names = ["masud", "shakon"];
names.push("mehedi");
names.push("mehedi");
console.log(names.length);

//pop
var names= ["masud", "shakon", "mehedi", "nishat"];
names.pop();
console.log(names);

// concat
var country1=["bangladesh", "iran",];
var country2=["usa", "canada"];
var country=country1.concat(country2);
console.log(country);