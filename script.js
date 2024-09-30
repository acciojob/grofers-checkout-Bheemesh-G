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
return sum;
};

getSumBtn.addEventListener("click", getSum);

