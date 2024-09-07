//расчет среднего балла за домашние задания студента по модулям

let vvedenie = 20;
let git = 30;
let js = 60;
let total = vvedenie + git + js; 
let score = total/3;
console.log(`This is the HWscore ${score}.`)

let stName = "Ilon";
let stSurname = "Mask";
let fullName = stName + " " + stSurname;
console.log(`This is the score of our student ${fullName} ${score}.`);

console.log(`This is the score of our student ${stName.slice(0,1)}.${stSurname} ${score}.`);