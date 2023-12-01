// function that take weight (kg) and size (cm) as argument
let imcCalculator = (weight, size) => {
    size /= 100;
    return (weight / (size * size)).toFixed(1);
};

let dataForm = document.querySelector("#dataForm");
let test = "test";
let currentPosition = "0deg";
const r = document.querySelector(":root");

dataForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const needle = document.querySelector("#needle");
    needle.classList.remove("firstAnim");
    needle.classList.remove("position");

    let size = document.querySelector("#size");
    let weight = document.querySelector("#weight");
    let imc = imcCalculator(weight.value, size.value);
    console.log("imc :", imc);

    console.log("current", currentPosition);
    r.style.setProperty("--needle-current-position", currentPosition);

    let position = "";
    if (imc < 18.5) {
        position = "-72deg";
    } else if (imc >= 18.5 && imc < 25) {
        position = "-36deg";
    } else if (imc >= 25 && imc < 30) {
        position = "0deg";
    } else if (imc >= 30 && imc < 35) {
        position = "36deg";
    } else {
        position = "72deg";
    }

    console.log("position ", position);
    r.style.setProperty("--needle-position", position);
    needle.classList.toggle("position");

    currentPosition = position;

    console.log(
        r.style.getPropertyValue("--needle-position"),
        r.style.getPropertyValue("--needle-current-position"),
    );
    console.log("-----------------");
});
