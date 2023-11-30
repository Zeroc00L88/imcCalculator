// function that take weight (kg) and size (cm) as argument
let imcCalculator = (weight, size) => {
    size /= 100;
    return Math.round(weight / (size * size));
};

let dataForm = document.querySelector("#dataForm");

dataForm.addEventListener("submit", () => {
    let size = document.querySelector("#size");
    let weight = document.querySelector("#weight");
    alert(imcCalculator(weight.value, size.value));
});
