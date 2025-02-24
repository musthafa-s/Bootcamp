const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

celsiusInput.addEventListener('input', function() {
    let celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        fahrenheitInput.value = (celsius * 9/5) + 32;
    } else {
        fahrenheitInput.value = '';
    }
});

fahrenheitInput.addEventListener('input', function() {
    let fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        celsiusInput.value = (fahrenheit - 32) * 5/9;
    } else {
        celsiusInput.value = '';
    }
});
