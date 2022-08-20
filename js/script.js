function getInputFieldValue(isIncrease, inputId) {
    let caseInputFiled = document.getElementById(inputId);
    let caseInputFiledValueString = caseInputFiled.value;
    let caseInputFiledValue = parseInt(caseInputFiledValueString);
    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = caseInputFiledValue + 1;
    } else {
        newCaseNumber = caseInputFiledValue - 1;
    }
    caseInputFiled.value = newCaseNumber;
    return newCaseNumber;
}

function setPrice(isPriced, priceId, total) {
    let casePriceElement = document.getElementById(priceId);
    let caseElemetnStringValue = casePriceElement.innerText;
    let casePrice = parseInt(caseElemetnStringValue);
    if (isPriced) {
        let calculate;
    } else {
        let calculatee;
    }
    casePriceElement.innerText = total;
    return casePrice;
}

let res = "";
let res2 = "";
// let resTotal = res + res2;

document
    .getElementById("case-plus-btn")
    .addEventListener("click", function(event) {
        let newCaseNumber = getInputFieldValue(true, "case-input-filed");
        let calculate = newCaseNumber * 59;
        setPrice(true, "case-price", calculate);
        let subElement = document.getElementById("subTotal");
        let subValueString = subElement.innerText;
        let subString = parseInt(subValueString);
        res = calculate;
        subString = res;
        subElement.innerText = res + res2;
    });

document
    .getElementById("case-minus-btn")
    .addEventListener("click", function(event) {
        let newCaseNumber = getInputFieldValue(false, "case-input-filed");
        let calculatee = newCaseNumber * 59;
        calculatee - 59;
        setPrice(false, "case-price", calculatee);
        let subElement = document.getElementById("subTotal");
        let subValueString = subElement.innerText;
        let subString = parseInt(subValueString);
        res = calculatee;
        subString = res;
        subElement.innerText = res + res2;
    });

document
    .getElementById("ihone-plus-btn")
    .addEventListener("click", function(event) {
        let newCaseNumber = getInputFieldValue(true, "iphone-input-field");
        let calculate = newCaseNumber * 100;
        setPrice(true, "iphone-price", calculate);
        let subElement = document.getElementById("subTotal");
        let subValueString = subElement.innerText;
        let subString = parseInt(subValueString);
        res2 = calculate;
        subString = res2;
        subElement.innerText = res + res2;
    });

document
    .getElementById("ihone-minus-btn")
    .addEventListener("click", function(event) {
        let newCaseNumber = getInputFieldValue(false, "iphone-input-field");
        let calculatee = newCaseNumber * 100;
        calculatee - 100;
        setPrice(false, "iphone-price", calculatee);
        let subElement = document.getElementById("subTotal");
        let subValueString = subElement.innerText;
        let subString = parseInt(subValueString);
        res2 = calculatee;
        subElement.innerText = res + res2;
    });