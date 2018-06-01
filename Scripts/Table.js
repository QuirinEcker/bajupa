function giveNumberOfClass(number) {
	sessionStorage.numberOfClass = number;
}

function checkWebStorage() {
	currentSelected(sessionStorage.numberOfClass);
	sessionStorage.clear();
}

function currentSelected(numberofClass) {
	let button = document.getElementsByClassName("currentIdSelection");
	
	button[numberofClass].style.color = "grey";
	
	if(numberofClass === 0) {
		button[1].style.color = "white";
		button[2].style.color = "white";
		button[3].style.color = "white";
		displayCalenderTable()
	} else if(numberofClass === 1 || numberofClass === "1") {
		button[0].style.color = "white";
		button[2].style.color = "white";
		button[3].style.color = "white";
		displayPeterTable();
	} else if(numberofClass === 2 || numberofClass === "2") {
		button[0].style.color = "white";
		button[1].style.color = "white";
		button[3].style.color = "white";
		displayAaronTable();
	} else if(numberofClass === 3 || numberofClass === "3") {
		button[0].style.color = "white";
		button[1].style.color = "white";
		button[2].style.color = "white";
		displayQuirinTable();
	}
}

function displayCalenderTable() {
	let quirinTable = document.getElementById("QuirinStundenPlan");
	let aaronTable = document.getElementById("AaronStundenPlan");
	let peterTable = document.getElementById("PeterStundenPlan");
	let calenderTable = document.getElementById("CalenderStundenPlan");
	
	calenderTable.style.display = "block";
	quirinTable.style.display = "none";
	aaronTable.style.display = "none";
	peterTable.style.display = "none"
}

function displayQuirinTable() {
	let quirinTable = document.getElementById("QuirinStundenPlan");
	let aaronTable = document.getElementById("AaronStundenPlan");
	let peterTable = document.getElementById("PeterStundenPlan");
	let calenderTable = document.getElementById("CalenderStundenPlan");
	
	calenderTable.style.display = "none";
	quirinTable.style.display = "block";
	aaronTable.style.display = "none";
	peterTable.style.display = "none"
}

function displayAaronTable() {
	let quirinTable = document.getElementById("QuirinStundenPlan");
	let aaronTable = document.getElementById("AaronStundenPlan");
	let peterTable = document.getElementById("PeterStundenPlan");
	let calenderTable = document.getElementById("CalenderStundenPlan");

	calenderTable.style.display = "none";
	quirinTable.style.display = "none";
	aaronTable.style.display = "block";
	peterTable.style.display = "none"
}

function displayPeterTable() {
	let quirinTable = document.getElementById("QuirinStundenPlan");
	let aaronTable = document.getElementById("AaronStundenPlan");
	let peterTable = document.getElementById("PeterStundenPlan");
	let calenderTable = document.getElementById("CalenderStundenPlan");

	calenderTable.style.display = "none";
	quirinTable.style.display = "none";
	aaronTable.style.display = "none";
	peterTable.style.display = "block"
}