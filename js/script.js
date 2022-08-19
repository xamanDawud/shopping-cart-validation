function getInputFieldValue(isIncrease) {
    let caseInputFiled = document.getElementById("case-input-filed");
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

function setPrice(priceId, total) {
    let casePriceElement = document.getElementById(priceId);
    casePriceElement.innerText = total;
}
document
    .getElementById("case-plus-btn")
    .addEventListener("click", function(event) {
        let newCaseNumber = getInputFieldValue(true);
        let calculate = newCaseNumber * 59;
        setPrice("case-price", calculate);
    });

document
    .getElementById("case-minus-btn")
    .addEventListener("click", function(event) {
        let newCaseNumber = getInputFieldValue(false);
        let casePriceElement = document.getElementById("case-price");
        let casePriceValueString = casePriceElement.innerText;
        let casePrice = parseInt(casePriceValueString);
        let calculate = casePrice - 59;
        setPrice("case-price", calculate);
    });