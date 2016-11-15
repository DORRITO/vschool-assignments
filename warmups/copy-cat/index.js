var _ = require('lodash');

var userObject = {
    fName: "fname",
    lName: "lname",
    city: "Lehi",
    state: "UT",
    zip: 84043
};

function copy(obj) {
    // and three of these return statements would work;
    return _.assign({}, obj);
    return _.cloneDeep(obj);
    return Object.assign({}, obj);
};

var newUserObject = copy(userObject);
newUserObject.fName = "Tyson";
newUserObject.lName = "Williams";

console.log("newUserObject ", newUserObject);
console.log("userObject ", userObject);


//// numbers, string, and booleans pass by value
//var numA = 1;
//var numB = numA;
//numB = 2;
//// console.log("numA ", numA);
//// console.log("numB ", numB);
//
//
//// pass by value
//var nameA = "Tanner";
//var nameB = nameA
//nameB = "Justin";
//// console.log("nameA ", nameA);
//// console.log("nameB ", nameB);
//
//
//// Object and arrays pass by REFERENCE
//var personA = {
//    name: "Tanner",
//    age: 32
//};
//var personB = personA;
//personB.name = "Zach"
//personB.age = 29;
//// console.log("personA ", personA);
//// console.log("personB ", personB);
//
//var arrA = [1, 2, 3, 4, 5];
//var arrB = arrA;
//arrB.push(100);
//console.log("arrA ", arrA);
//console.log("arrB ", arrB);