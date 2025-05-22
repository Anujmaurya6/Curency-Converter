function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = document.getElementById("result");

  if (amount === "") {
    result.innerText = "Please enter an amount.";
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[to];
      const total = (amount * rate).toFixed(2);
      result.innerText = `${amount} ${from} = ${total} ${to}`;
    })
    .catch(error => {
      result.innerText = "Something went wrong. Try again later.";
    });
}
