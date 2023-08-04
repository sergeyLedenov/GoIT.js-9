resB3.addEventListener("click", ()=> {
    for (let i = 0; i < arr3.length; i++) {
        res3TC += arr3[i];
    }
    res3.textContent = res3TC;
    res3TC = 0;
});

//4
const resB4 = document.querySelector("#resB4");
const res4 = document.querySelector("#res4");
const arr4 = [1, 2, 3, 4, 5];
const res4TC = [];

resB4.addEventListener("click", ()=> {
    for (let value of arr4) {
        res4TC.push(value);
    }
    res4.textContent = res4TC;
});

//5 
const resB5 = document.querySelector("#resB5");
const res5 = document.querySelector("#res5");
const arr5 = ["str0", "str132", "str2222", "str323", "str4"];
const res5TC = [];

resB5.addEventListener("click", ()=> {
    for (let value of arr5) {
        if (value.length >= 5) {
            res5TC.push(value);
        }
    } 
    res5.textContent = res5TC;
});

//6
const resB6 = document.querySelector("#resB6");
const res6 = document.querySelector("#res6");
const arr6 = [1, 2, 3, 4, 5, 6, 7, 10, 8, 9];

resB6.addEventListener("click", ()=> {
    res6.textContent = Math.max.apply(null, arr6);
});

//7
const resB7 = document.querySelector("#resB7");
const res7 = document.querySelector("#res7");
const arr7 = [1, "11", 2, 22, 3, "33"];
let res7TC = [];

resB7.addEventListener("click", ()=> {
    for (let value of arr7) {
        if (value.toString().length >= 2) {
            res7TC.push(value);
        }
    }
    res7.textContent = res7TC;
    res7TC = []
});