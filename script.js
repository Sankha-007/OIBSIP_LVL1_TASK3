const fahrenheitInput = document.getElementById('Farenheit');
const celsiusInput = document.getElementById('Celcius');
const kelvinInput = document.getElementById('Kelvin');
const clearButton = document.getElementById('clear-btn');

// Event listeners for conversions
fahrenheitInput.addEventListener('input', function() {
    const f = parseFloat(fahrenheitInput.value);
    if (!isNaN(f)) {
        const c = (f - 32) * 5 / 9;
        const k = (f + 459.67) * 5 / 9;
        celsiusInput.value = c.toFixed(2);
        kelvinInput.value = k.toFixed(2);
    } else {
        celsiusInput.value = '';
        kelvinInput.value = '';
    }
});

celsiusInput.addEventListener('input', function() {
    const c = parseFloat(celsiusInput.value);
    if (!isNaN(c)) {
        const f = (c * 9 / 5) + 32;
        const k = c + 273.15;
        fahrenheitInput.value = f.toFixed(2);
        kelvinInput.value = k.toFixed(2);
    } else {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    }
});

kelvinInput.addEventListener('input', function() {
    const k = parseFloat(kelvinInput.value);
    if (!isNaN(k)) {
        const f = (k * 9 / 5) - 459.67;
        const c = k - 273.15;
        fahrenheitInput.value = f.toFixed(2);
        celsiusInput.value = c.toFixed(2);
    } else {
        fahrenheitInput.value = '';
        celsiusInput.value = '';
    }
});

// Clear button functionality
clearButton.addEventListener('click', function() {
    fahrenheitInput.value = '';
    celsiusInput.value = '';
    kelvinInput.value = '';
});