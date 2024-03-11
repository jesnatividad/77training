"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopDogs = exports.addNames = exports.testFunction = void 0;
const testFunction = () => {
    console.log('Hellossss');
};
exports.testFunction = testFunction;
function add(x, y) {
    return x + y;
}
let stringArr = [];
let fixStringArr = new Array(5);
let dogName = [];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 444] = "Right";
})(Direction || (Direction = {}));
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}
const dog = new Dog("A", "Poodle");
const dog2 = new Dog("B", "Dalmatian");
let dogArr = [];
dogArr.push(dog);
dogArr.push(dog2);
const addNames = (data) => {
    dogName.push(data);
    let list = document.getElementById('divList');
    if (list) {
        list.append(data);
    }
};
exports.addNames = addNames;
const loopDogs = () => {
    //lambda
    for (let data of dogArr) {
        console.table(data);
    }
    //map
    dogArr = dogArr.map((data) => {
        data.breed = "alien";
        return data;
    });
    //foreach
    dogArr.forEach((data) => {
        console.log(data.name);
        (0, exports.addNames)(data.name);
    });
};
exports.loopDogs = loopDogs;
(0, exports.loopDogs)();
