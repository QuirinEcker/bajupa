function dropDownTableDisplay(number) {
	let content = document.getElementById("DropDownTable");
	let hover = document.getElementsByClassName("hoverUnderline");
	
	hover[number].style.transform = "scale(1, 1)";
	content.style.height = "150px";
}

function dropDownTableNone(number) {
	let content = document.getElementById("DropDownTable");
	let hover = document.getElementsByClassName("hoverUnderline");
	
	hover[number].style.transform = "scale(0, 1)";
	content.style.height = "0px";
}

function dropDownProjectsDisplay(number) {
	let content = document.getElementById("DropDownProjects");
	let hover = document.getElementsByClassName("hoverUnderline");
	
	hover[number].style.transform = "scale(1, 1)";
	content.style.height = "150px";
}

function dropDownProjectsNone(number) {
	let content = document.getElementById("DropDownProjects");
	let hover = document.getElementsByClassName("hoverUnderline");
	
	hover[number].style.transform = "scale(0, 1)";
	content.style.height = "0px";
}

function dropDownAboutDisplay(number) {
	let content = document.getElementById("DropDownAbout");
	let hover = document.getElementsByClassName("hoverUnderline");
	
	hover[number].style.transform = "scale(1, 1)";
}

function dropDownAboutNone(number) {
	let content = document.getElementById("DropDownAbout");
	let hover = document.getElementsByClassName("hoverUnderline");
	
	hover[number].style.transform = "scale(0, 1)";
}

function dropDownLinksDisplay(number){
	let content = document.getElementById("DropDownLinks");
	let hover = document.getElementsByClassName("hoverUnderline");
	
	hover[number].style.transform = "scale(1, 1)";
}

function dropDownLinksNone(number) {
	let content = document.getElementById("DropDownLinks");
	let hover = document.getElementsByClassName("hoverUnderline");
	
	hover[number].style.transform = "scale(0, 1)";
}