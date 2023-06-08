const convertButton = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")

console.log(currencySelect)

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector("#real")
    const currencyValueToConverted = document.querySelector("#dolar")
    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 8.0

if(currencySelect.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US" , {
        style: "currency" ,
        currency: "USD"
    }).format(inputCurrencyValue/dolarToday)
}

if(currencySelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE" , {
        style: "currency" ,
        currency: "EUR"
    }).format(inputCurrencyValue/euroToday)
}


currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency" ,
    currency: "BRL"
}).format(inputCurrencyValue)

}
    

convertButton.addEventListener("click", convertValues)