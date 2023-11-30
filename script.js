// function that take weight (kg) and size (cm) as argument
let imcCalculator = (weight, size) => {
    size /= 100;
    return Math.round(weight / (size * size));
};

console.log(imcCalculator(70, 170));
