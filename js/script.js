let formElement = document.querySelector(".js-form");
let inCurrency = document.querySelector(".js-inCurrency");
let inValue = document.querySelector(".js-inValue");
let outCurrency = document.querySelector(".js-outCurrency");
let outValue = document.querySelector(".js-outValue");


let eurRate = 4.47;
let usdRate = 3.65;
let gbpRate = 5.18;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = Number(inValue.value);

    if (inCurrency.value === outCurrency.value) {
        outValue.innerText = "Wybierz inną walutę";
    }

    else {

        switch (inCurrency.value) {
            case "USD":
                product = amount * usdRate;
                break;
            case "EUR":
                product = amount * eurRate;
                break;
            case "GBP":
                product = amount * gbpRate;
                break;
            default:
                product = amount;

        }

        switch (outCurrency.value) {
            case "USD":
                result = product / usdRate;
                break;
            case "EUR":
                result = product / eurRate;
                break;
            case "GBP":
                result = product / gbpRate;
                break;
            default:
                result = product;
        }

        outValue.innerText = `${amount} ${inCurrency.value} = ${result.toFixed(2)} ${outCurrency.value}`;
    }

});

formElement.addEventListener("reset", () => {
    inCurrency.value = "PLN"
    inValue.innerText = "";
    outCurrency.value = "USD";
    outValue.innerText = "";
});


