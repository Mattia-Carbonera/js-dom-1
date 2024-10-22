const lightOff = document.getElementById("light");
const buttonOnOff = document.getElementById("button-on-off");
console.log("1 lightOff");
console.log(lightOff);
console.log("2 buttonOnOff");
console.log(buttonOnOff);

// genero un'immagine
const lightOn = document.getElementById("dynamic-image");
const myDynamicImage = document.createElement("img");
myDynamicImage.src = "./img/yellow_lamp.png";

console.log("3 myDynamicImage");
console.log(myDynamicImage);

lightOn.append(myDynamicImage);

console.log("4 lightOn");
console.log(lightOn);

// switch di immagini
buttonOnOff.addEventListener("click", () => {
  lightOff.classList.contains("d-none")
    ? lightOff.classList.remove("d-none")
    : lightOff.classList.add("d-none");
});

buttonOnOff.addEventListener("click", () => {
  lightOff.classList.contains("d-none")
    ? lightOn.classList.remove("d-none")
    : lightOn.classList.add("d-none");
});

// switch scritte bottone

buttonOnOff.addEventListener("click", () => {
  buttonOnOff.textContent.includes("Accendi luce")
    ? (buttonOnOff.textContent = "Spegni luce")
    : (buttonOnOff.textContent = "Accendi luce");
});
