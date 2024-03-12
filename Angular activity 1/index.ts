let inputTxtCity = document.getElementById("inputTxtCity");
let inputTxtCountry = document.getElementById("inputTxtCountry");
let inputNumPopulation = document.getElementById("inputNumPopulation");

interface GeoInterface {
    city: string,
    country: string,
    population: number
}

class Geo implements GeoInterface {
    city: string;
    country: string;
    population: number;
    constructor(city: string, country: string, population: number) {
        this.city = city;
        this.country = country;
        this.population = population;
    }
}
export const addCity = () => {
    let geoList: Geo[] = [];

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
        resetFields();
    } else {

        alert("Incomplete data!");
    }

    console.log(geoList);
}

export const resetFields = () => {

    if (inputTxtCity) {
        inputTxtCity.value = "";
    }

    if (inputTxtCountry) {
        inputTxtCountry.value = "";
    }

    if (inputNumPopulation) {
        inputNumPopulation.value = "";
    }

}

export const validateISBN = (isbn: string) => {
    let spanResult = document.getElementById("spanResult");
    let index: number = 0;
    let valid: string = "false";
    let strArr: string[] = [];
    let total: number = 0;
    if (isbn && isbn.length > 0) {
        strArr = isbn.split('');
    }
    if (spanResult) {
        spanResult.innerText = "false";
        strArr.forEach((data: string) => {
            if (index != 9 && isNaN(data)) {
                valid = "false";
            } else {
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
}

export const changeItUp = (txt: string) => {
    let consonantArr: string[] = 'BCDFGHJKLMNPQRSTVWXYZ'.split('');
    let vowelArr: string[] = 'AEIOU'.split('');
    let alphabetArr: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let spanResultChangeItUp = document.getElementById("spanResultChangeItUp");
    let resultTxt: string = "";
    let index: number = 0;
    if (txt && spanResultChangeItUp) {
        spanResultChangeItUp.innerText = "";
        txt.split('').forEach((data: string) => {
            let consonantMatchIdx: number = consonantArr.indexOf(data.toUpperCase());
            let voweltMatchIdx: number = vowelArr.indexOf(data.toUpperCase());
            if (data.toUpperCase() === 'Z') {
                resultTxt += alphabetArr[0];
            } else
                if (consonantMatchIdx != -1) {
                    resultTxt += alphabetArr[alphabetArr.indexOf(data.toUpperCase()) + 1];
                } else if (voweltMatchIdx != -1) {
                    resultTxt += alphabetArr[alphabetArr.indexOf(data.toUpperCase()) + 1];
                } else {
                    resultTxt += data;
                }
            index++;
        });

        index = 0;
        resultTxt.split("").forEach((data: string) => {
            let consonantMatchIdx: number = consonantArr.indexOf(data.toUpperCase());
            let voweltMatchIdx: number = vowelArr.indexOf(data.toUpperCase());

            if (consonantMatchIdx != -1) {
                spanResultChangeItUp.innerText += data.toLowerCase();
            } else if (voweltMatchIdx != -1) {
                spanResultChangeItUp.innerText += data.toUpperCase();
            } else {
                spanResultChangeItUp.innerText += data;
            }
            index++;
        });
    }
}

export const moveZero = (txt: string) => {
    let objArr: any[] = txt.split(",");
    let zeroArr: any[] = [];
    let nonZeroArr: any[] = [];
    let index: number = 0;
    let spanMoveZero = document.getElementById("spanMoveZero");
    objArr.forEach((data: any) => {
        if(data === 0 || data === '0'){
            zeroArr.push(data);
            
        }else{
            nonZeroArr.push(data);
        }
        index++;
    });
    nonZeroArr.push(zeroArr);
    if(spanMoveZero){
        spanMoveZero.innerText = nonZeroArr.toString();
    }
}