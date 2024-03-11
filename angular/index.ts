export const testFunction = () => {
    console.log('Hellossss');
}


function add(x: number, y: number) {
    return x + y;
}

let stringArr: string[] = [];
let fixStringArr: string[] = new Array(5);
let dogName: string[] = [];
enum Direction {
    Up,
    Down,
    Left,
    Right = 444,
}

//console.log("Direction " + Direction.Down);

interface DogInterface {
    name: string,
    breed: string,
    eat?: (food: string) => void;
}

class Dog implements DogInterface {
    name: string;
    breed: string;
    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }
    
}

const dog = new Dog("A", "Poodle");
const dog2 = new Dog("B", "Dalmatian")
let dogArr: Dog[] = [];

dogArr.push(dog);
dogArr.push(dog2)

export const addNames = (data: string) =>{
    dogName.push(data);
    let list = document.getElementById('divList');
    if(list){
        list.append(data);
        
    }
}

export const loopDogs = () => {
    //lambda
    for (let data of dogArr) {
        console.table(data);
    }

    //map
     dogArr = dogArr.map((data: DogInterface) => {
        data.breed = "alien";
        return data;
    });
    //foreach
    dogArr.forEach((data: DogInterface) => {
        console.log(data.name);
        addNames(data.name);
    })
}
loopDogs();
