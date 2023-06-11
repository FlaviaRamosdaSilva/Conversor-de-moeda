const convertButton = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector("#real")
    const currencyValueToConverted = document.querySelector("#currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 8.0
    const pesoToday = 0.28

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
    if (currencySelect.value == "mexico") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN"
        }).format(inputCurrencyValue / pesoToday)
    }


currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

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
    if(currencySelect.value == "mexico") {
        currencyName.innerHTML = "Peso Mexicano"
        currencyImage.src = "./assets/mexico2-flag.png"
    }
    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)