function currentSelected(numberofClass) {
	let button = document.getElementsByClassName("currentIdSelection");
	
    button[numberofClass].style.color = "red";
}