task.js
//----task1----
function calculateMortgage() {
	let percent = window.percent.value;
	let contribution = window.contribution.value;
	let amount = window.amount.value;
	let date = window.date.value;
	let result = calculateTotalMortgage(percent,contribution,amount,date);
	let span = window.totalMortage;
	span.textContent = result;
}
function calculateTotalMortgage(percent, contribution, amount, date) {
 
	let now = new Date();
  	let n = ((date.getMonth() - now.getMonth()) + (12 * (date.getFullYear() - now.getFullYear())));
  	let S = parseInt(amount) - parseInt(contribution);
  	let P = parseInt(percent)/100/12
  	let monthPay = (S * (P + P / (((1 + P) ** n) - 1))).toFixed(2) 
  	let totalAmount = (monthPay * n).toFixed(2)
checkInput ({
	persent: percent,
    	contribution: contribution,
    	amount: amount
})
	return totalAmount

function checkInput (name, value) {
	for (let key in data) {         
   		if (isNaN(parseInt(data[key]))) {
	console.log(`Параметр ${key} содержит неправильное значение ${data[key]} `)}
  }
}
