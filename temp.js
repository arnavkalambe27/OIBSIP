const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemperature;

    switch (unit) {
        case 'celsius':
            convertedTemperature = celsiusToFahrenheit(temperature);
            resultDiv.textContent = `${temperature}°C = ${convertedTemperature}°F`;
            break;
        case 'fahrenheit':
            convertedTemperature = fahrenheitToCelsius(temperature);
            resultDiv.textContent = `${temperature}°F = ${convertedTemperature}°C`;
            break;
        case 'kelvin':
            convertedTemperature = kelvinToCelsius(temperature);
            resultDiv.textContent = `${temperature}K = ${convertedTemperature}°C`;
            break;
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}