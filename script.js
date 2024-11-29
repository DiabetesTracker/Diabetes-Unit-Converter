document.getElementById('convertBtn').addEventListener('click', () => {
    // Get input values
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const conversionType = document.getElementById('conversionType').value;

    // Validation
    if (isNaN(inputValue) || !conversionType) {
        document.getElementById('converterForm').classList.add('was-validated');
        return;
    }

    let result = '';
    if (conversionType === 'mgToMmol') {
        result = (inputValue / 18).toFixed(2) + ' mmol/L';
    } else if (conversionType === 'mmolToMg') {
        result = (inputValue * 18).toFixed(2) + ' mg/dL';
    }

    document.getElementById('outputResult').textContent = `Converted Value: ${result}`;
});

// Reset functionality
document.getElementById('converterForm').addEventListener('reset', () => {
    document.getElementById('outputResult').textContent = '';
    document.getElementById('converterForm').classList.remove('was-validated');
});
