// function that take weight (kg) and size (cm) as argument
let imcCalculator = (weight, size) => {
    size /= 100;
    return (weight / (size * size)).toFixed(1);
};

let dataForm = document.querySelector("#dataForm");
let test = "test";
let currentPosition = "0deg";
let message = document.querySelector("#message");

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

    let position = "";
    if (imc < 18.5) {
        position = "-72deg";
        message.innerHTML =
            "Va falloir penser à prendre un abonnement chez macdo";
        message.style.color = "#1DA614";
        message.style.textAlign = "center";
    } else if (imc >= 18.5 && imc < 25) {
        position = "-36deg";
        message.innerHTML = "Nickel, continue comme ca mon petit bonhomme";
        message.style.color = "#9FCC00";
        message.style.textAlign = "center";
    } else if (imc >= 25 && imc < 30) {
        position = "0deg";
        message.innerHTML =
            "Ca va mais va falloir surveillert tout ca quand même, un peu de sport ca fait pas de mal non plus";
        message.style.color = "#FFF002";
        message.style.textAlign = "center";
    } else if (imc >= 30 && imc < 35) {
        position = "36deg";
        message.innerHTML =
            "Oulala je veux pas être grossophobe mais bon on va peut être arrêter de se mentir et démarrer un ptit régime rapidos";
        message.style.color = "#FEAF02";
        message.style.textAlign = "center";
    } else {
        position = "72deg";
        message.innerHTML =
            "Dans pas longtemps je vais commencer à entrer en orbite autour de toi";
        message.style.color = "#FF2900";
        message.style.textAlign = "center";
    }

    needle.style.transform = `rotate(${position})`;

    currentPosition = position;
});
