const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const total = document.querySelectorAll(".price");;
var sum = 0;
for (let i = 0; i < total.length; i++) {
    sum += parseFloat(total[i].innerText);
}

	
	const table = document.getElementsByTagName("table")[0];
	const newRow = document.createElement('tr');
	const newCell = document.createElement('td');
	newCell.innerText = sum;
	newRow.appendChild(newCell);
	table.appendChild(newRow);
	
return sum;
};

getSumBtn.addEventListener("click", getSum);

