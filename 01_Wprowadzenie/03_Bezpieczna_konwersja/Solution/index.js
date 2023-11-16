function safeConvertToNumber(value) {
    // Sprawdzamy, czy wartość jest pustym stringiem lub null
    if (value === "" || value === null) {
        return null;
    }

    // Sprawdzamy, czy wartość jest już liczbą i nie jest NaN
    if (typeof value === 'number' && !isNaN(value)) {
        return value;
    }

    // Próba konwersji na liczbę
    const converted = Number(value);

    // Sprawdzamy, czy konwersja jest poprawna i czy nie jest to NaN
    if (!isNaN(converted)) {
        return converted;
    }

    // Zwracamy null, gdy konwersja jest niemożliwa
    return null;
}

// Testy funkcji
console.log(safeConvertToNumber("123")); // 123
console.log(safeConvertToNumber("123abc")); // null
console.log(safeConvertToNumber(123)); // 123
console.log(safeConvertToNumber(NaN)); // null
console.log(safeConvertToNumber("")); // null
console.log(safeConvertToNumber(null)); // null
console.log(safeConvertToNumber(undefined)); // null
console.log(safeConvertToNumber({})); // null