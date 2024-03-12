"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZero = exports.changeItUp = exports.validateISBN = exports.resetFields = exports.addCity = void 0;
let inputTxtCity = document.getElementById("inputTxtCity");
let inputTxtCountry = document.getElementById("inputTxtCountry");
let inputNumPopulation = document.getElementById("inputNumPopulation");
class Geo {
    constructor(city, country, population) {
        this.city = city;
        this.country = country;
        this.population = population;
    }
}
const addCity = () => {
    let geoList = [];
    if (localStorage.getItem("GeoList")) {
        geoList.push(localStorage.getItem("GeoList"));
    }
    if (inputTxtCity && inputTxtCity.value.length > 0 &&
        inputTxtCountry && inputTxtCountry.value.length &&
        inputNumPopulation && inputNumPopulation.value.length > 0) {
        const newGeo = new Geo(inputTxtCity.value, inputTxtCountry.value, inputNumPopulation.value);
        geoList.push(newGeo);
        localStorage.setItem("GeoList", JSON.stringify(geoList));
        alert("Success!");
        (0, exports.resetFields)();
    }
    else {
        alert("Incomplete data!");
    }
    console.log(geoList);
};
exports.addCity = addCity;
const resetFields = () => {
    if (inputTxtCity) {
        inputTxtCity.value = "";
    }
    if (inputTxtCountry) {
        inputTxtCountry.value = "";
    }
    if (inputNumPopulation) {
        inputNumPopulation.value = "";
    }
};
exports.resetFields = resetFields;
const validateISBN = (isbn) => {
    let spanResult = document.getElementById("spanResult");
    let index = 0;
    let valid = "false";
    let strArr = [];
    let total = 0;
    if (isbn && isbn.length > 0) {
        strArr = isbn.split('');
    }
    if (spanResult) {
        spanResult.innerText = "false";
        strArr.forEach((data) => {
            if (index != 9 && isNaN(data)) {
                valid = "false";
            }
            else {
                if (index != 9) {
                    total += parseInt(data) * parseInt(strArr[index + 1]);
                }
            }
            index++;
        });
        if (total % 11 == 0 && valid != "false") {
            spanResult.innerHTML = "true";
        }
    }
};
exports.validateISBN = validateISBN;
const changeItUp = (txt) => {
    let consonantArr = 'BCDFGHJKLMNPQRSTVWXYZ'.split('');
    let vowelArr = 'AEIOU'.split('');
    let alphabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let spanResultChangeItUp = document.getElementById("spanResultChangeItUp");
    let resultTxt = "";
    let index = 0;
    if (txt && spanResultChangeItUp) {
        spanResultChangeItUp.innerText = "";
        txt.split('').forEach((data) => {
            let consonantMatchIdx = consonantArr.indexOf(data.toUpperCase());
            let voweltMatchIdx = vowelArr.indexOf(data.toUpperCase());
            if (data.toUpperCase() === 'Z') {
                resultTxt += alphabetArr[0];
            }
            else if (consonantMatchIdx != -1) {
                resultTxt += alphabetArr[alphabetArr.indexOf(data.toUpperCase()) + 1];
            }
            else if (voweltMatchIdx != -1) {
                resultTxt += alphabetArr[alphabetArr.indexOf(data.toUpperCase()) + 1];
            }
            else {
                resultTxt += data;
            }
            index++;
        });
        index = 0;
        resultTxt.split("").forEach((data) => {
            let consonantMatchIdx = consonantArr.indexOf(data.toUpperCase());
            let voweltMatchIdx = vowelArr.indexOf(data.toUpperCase());
            if (consonantMatchIdx != -1) {
                spanResultChangeItUp.innerText += data.toLowerCase();
            }
            else if (voweltMatchIdx != -1) {
                spanResultChangeItUp.innerText += data.toUpperCase();
            }
            else {
                spanResultChangeItUp.innerText += data;
            }
            index++;
        });
    }
};
exports.changeItUp = changeItUp;
const moveZero = (txt) => {
    let objArr = txt.split(",");
    let zeroArr = [];
    let nonZeroArr = [];
    let index = 0;
    let spanMoveZero = document.getElementById("spanMoveZero");
    objArr.forEach((data) => {
        if (data === 0 || data === '0') {
            zeroArr.push(data);
        }
        else {
            nonZeroArr.push(data);
        }
        index++;
    });
    nonZeroArr.push(zeroArr);
    if (spanMoveZero) {
        spanMoveZero.innerText = nonZeroArr.toString();
    }
};
exports.moveZero = moveZero;
