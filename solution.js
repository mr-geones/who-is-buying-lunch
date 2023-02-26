function whoIsPaying() {
	const pay = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
	const i = Math.floor(Math.random() * pay.length);
	
	return `${pay[i]} is going to buy lunch today!`;
}
