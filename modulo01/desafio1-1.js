//Cálculo de IMC:

const nome = "Rafael";
const peso = 67;
const alt = 1.78;

imc = peso / (alt * alt);

if (imc >= 30) {
  console.log(`${nome}, você está acima do peso.`);
} else {
  console.log(`${nome}, você não está acima do peso.`);
}

//Cálculo de Aposentadoria:

const nome = "Rafael";
const sexo = "M";
const idade = 19;
const contri = 4;

if (
  (sexo === "M" && idade + contri >= 95) ||
  (sexo === "F" && idade + contri >= 85)
) {
  console.log(`${nome}, você pode se aposentar.`);
} else {
  console.log(`${nome}, você não pode se aposentar.`);
}

//Outra forma de fazer o desafio - cálculo de aposentadoria:

//const nome = "Rafael"
//const sexo = "M"
//const idade = 19
//const contri = 4

//if (sexo === "M") {
//    if (contri >= 35 && (idade + contri >= 95)) {
//    console.log(`${nome}, você pode se aposentar!`)
//} else {
//    console.log(`${nome}, você ainda não pode se aposentar!`)
//}
//} if (sexo === "F") {
//    if (contri >= 30 && (idade + contri >= 85)) {
//    console.log(`${nome}, você pode se aposentar!`)
//} else {
//    console.log(`${nome}, você ainda não pode se aposentar!`)
//}
//}
