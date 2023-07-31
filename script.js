function calculateVAT() {
  var amount = parseFloat(document.getElementById("amount").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var operation = document.getElementById("operation").value;

  var net, vat, gross;

  if (operation === "add") {
    vat = (rate / 100) * amount;
    gross = amount + vat;
    net = amount;
  } else if (operation === "subtract") {
    net = amount / (1 + rate / 100);
    vat = amount - net;
    gross = amount;
  }

  var resultText =
    "Net Amount: " +
    net.toFixed(2) +
    "\nVAT: " +
    vat.toFixed(2) +
    "\nGross Amount: " +
    gross.toFixed(2);
  document.getElementById("result").innerText = resultText;
}
