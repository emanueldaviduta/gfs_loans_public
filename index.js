var max = 200000;
var min = 0;
var monthDefault = 360;
var dobanda = 4;

function initPage() {
    setTimeout(() => {
        document.getElementById('amountValue').value = max;
        const amountRange = document.getElementById('amountRange');
        if (amountRange) {
            amountRange.setAttribute('max', max);
            amountRange.setAttribute('min', min);
            amountRange.value = max;
        }

        document.getElementById('advanceValue').value = 0;
        const advanceRange = document.getElementById('advanceRange');
        if (advanceRange) {
            advanceRange.setAttribute('max', max - min);
            advanceRange.value = 0;
        }

        document.getElementById('monthValue').value = monthDefault;
        document.getElementById('monthRange').value = monthDefault;

        calculareRata();
    }, 0);
}
initPage();

function onChange(value, id) {
    var amv = document.getElementById(id);
    if (amv) {
        amv.value = value;
    }
    switch (id) {
        case 'amountValue':
            document.getElementById('advanceValue').value = max - value;
            document.getElementById('advanceRange').value = max - value;
            break;

        case 'advanceValue':
            document.getElementById('amountValue').value = max - value;
            document.getElementById('amountRange').value = max - value;
            break;
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