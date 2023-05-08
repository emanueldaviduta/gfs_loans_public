var max = 500000;
var min = 0;
var monthDefault = 360;
var dobanda = 5.99;

function initPage() {
    setTimeout(() => {
        document.getElementById('amountValue').value = max;
        const amountRange = document.getElementById('amountRange');
        if (amountRange) {
            amountRange.setAttribute('max', max);
            amountRange.setAttribute('min', min);
            amountRange.value = max;
        }

        document.getElementById('monthValue').value = monthDefault;
        document.getElementById('monthRange').value = monthDefault;

        calculareRata();
    }, 500);
}
initPage();

function onChange(value, id) {
    var amv = document.getElementById(id);
    if (id == 'monthValue' && value > 360) {
        value = 360;
    } else if (id == 'amountValue' && value > 5000000) {
        value = 5000000;
    }
    if (amv) {
        amv.value = value;
    }
    calculareRata();
}

function submitForm() {
    alert('Form submit');
}


function calculareRata() {

    var credit = parseInt(document.getElementById('amountValue').value);
    var perioada = parseInt(document.getElementById('monthValue').value);
    var dl = dobanda / 100 / 12;

    var result = credit * dl / (1 - Math.pow(1 + dl, -perioada));
    document.getElementById('rataValue').value = Math.round(result * 100) / 100;
}