const convertButton = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")
const convertSelect = document.querySelector(".convert-select")

function convertValues() {
    const inputCurrency2Value = document.querySelector(".input-currency").value
    const inputCurrencyValue = (inputCurrency2Value.replace("," , "."))
    const currencyValueToConvert = document.querySelector("#real")
    const currencyValueToConverted = document.querySelector("#currency-value")
    const dolarToday = 4.88
    const euroToday = 5.25
    const libraToday = 6.13
    const pesoToday = 0.28
    const realToday = 1.00

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "peso") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN"
        }).format(inputCurrencyValue / pesoToday)
    }

    if (currencySelect.value == "real") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameConvert = document.getElementById("currency-convert")
    const currencyImageConvert = document.querySelector(".currency-img-convert")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libras"
        currencyImage.src = "./assets/Libra.png"
    }
    if(currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso Mexicano"
        currencyImage.src = "./assets/mexico2-flag.png"
    }
    if(currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    if (convertSelect.value == "eua") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        currencyImageConvert.src = "./assets/dolar.png"
    }
    if (convertSelect.value == "europa") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImageConvert.src = "./assets/euro.png"
    }
    if(convertSelect.value == "inglaterra") {
        currencyNameConvert.innerHTML = "Libras"
        currencyImageConvert.src = "./assets/Libra.png"
    }
    if(convertSelect.value == "mexico") {
        currencyNameConvert.innerHTML = "Peso Mexicano"
        currencyImageConvert.src = "./assets/mexico2-flag.png"
    }
    if(convertSelect.value == "brasil") {
        currencyNameConvert.innerHTML = "Real"
        currencyImageConvert.src = "./assets/real.png"
    }
    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)