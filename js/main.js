const field_one = document.querySelector(".field-one");
const field_two = document.querySelector(".field-two");
const amount_one = document.querySelector(".amount-one");
const amount_two = document.querySelector(".amount-two");

const swapBtn = document.querySelector(".swap");
const rateElement = document.querySelector(".rate");

// Fetch API
function exchangeRates() {
  const currency_one = field_one.value;
  const currency_two = field_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      amount_two.value = (amount_one.value * rate).toFixed(3);
    });
}

exchangeRates();
