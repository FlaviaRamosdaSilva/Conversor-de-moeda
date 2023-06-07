const convertButton = document.querySelector("button")

function ConvertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

    console.log(convertedValue)
}

convertButton.addEventListener("click", ConvertValues)