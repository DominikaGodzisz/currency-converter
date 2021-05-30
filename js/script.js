{
    const inCurrency = document.querySelector(".js-inCurrency");
    const inValue = document.querySelector(".js-inValue");
    const outCurrency = document.querySelector(".js-outCurrency");
    const outValue = document.querySelector(".js-outValue");

    const eurRate = 4.47;
    const usdRate = 3.65;
    const gbpRate = 5.18;

    const resultTextUpdate = (amount, inCurrency, result, outCurrency) => {
        outValue.innerText = `${amount} ${inCurrency.value} = ${result.toFixed(2)} ${outCurrency.value}`;
    }

    const currencyCheck = (inCurrency, outCurrency, amount) => {
        if (inCurrency.value === outCurrency.value) {
            outValue.innerText = "Waluta wejściowa i wyjściowa jest taka sama";
        }

        else {

            const product = calculateToPLN(amount, inCurrency);
            const result = calculateResult(product, outCurrency);
            resultTextUpdate(amount, inCurrency, result, outCurrency);
        }
    }


    const calculateToPLN = (amount, inCurrency) => {
        switch (inCurrency.value) {
            case "USD":
                return amount * usdRate;

            case "EUR":
                return amount * eurRate;

            case "GBP":
                return amount * gbpRate;

            default:
                return amount;

        }
    }

    const calculateResult = (product, outCurrency) => {
        switch (outCurrency.value) {
            case "USD":
                return product / usdRate;

            case "EUR":
                return product / eurRate;

            case "GBP":
                return product / gbpRate;

            default:
                return product;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amount = Number(inValue.value);
        currencyCheck(inCurrency, outCurrency, amount);

    };

    const onFormReset = (event) => {
        inCurrency.value = "PLN"
        inValue.innerText = "";
        outCurrency.value = "USD";
        outValue.innerText = "";
    }

    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    };

    init();
};






