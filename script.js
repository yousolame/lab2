function calculateModules() {
  const aInput = document.getElementById("num1");
  const bInput = document.getElementById("num2");
  const output = document.getElementById("output");

  if (!aInput || !bInput || !output) {
    console.error("Один из элементов не найден.");
    return;
  }

  const a = parseFloat(aInput.value);
  const b = parseFloat(bInput.value);

  if (a === 0 || b === 0 || isNaN(a) || isNaN(b)) {
    output.innerText = "Ошибка: оба числа должны быть ненулевыми и корректными.";
    return;
  }

  const absA = Math.abs(a);
  const absB = Math.abs(b);

  const sum = absA + absB;
  const difference = absA - absB;
  const product = absA * absB;
  const quotient = absA / absB;

  output.innerHTML = `
    Сумма модулей: ${sum}<br>
    Разность модулей: ${difference}<br>
    Произведение модулей: ${product}<br>
    Частное модулей: ${quotient}
  `;
}

function calculateDigits() {
  const number = parseInt(document.getElementById("threeDigitInput").value);
  const output = document.getElementById("digitOutput");

  if (isNaN(number) || number < 100 || number > 999) {
    output.innerText = "Ошибка: введите корректное трёхзначное число.";
    return;
  }

  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const units = number % 10;

  const sum = hundreds + tens + units;
  const product = hundreds * tens * units;

  output.innerHTML = `
    Сумма цифр: ${sum}<br>
    Произведение цифр: ${product}
  `;
}
