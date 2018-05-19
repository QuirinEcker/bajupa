function hideSidebar() {
	let sideBar = document.getElementById("SideBar");
	let button = document.getElementById("hideSidebar");
	let buttonHide = document.getElementById("buttonHide");
	let scaleTable = document.getElementsByClassName('timetable');
	let sidebarContent = document.getElementById('SidebarContent');

	if (sideBar.style.width !== "0%") {
		sideBar.style.width = "0%";
		sidebarContent.style.display = "none";
		scaleTables(scaleTable, "80%", "10%");
	} else if (sideBar.style.width === "0%") {
		sideBar.style.width = "25%";
		sidebarContent.style.display = "block";
		scaleTables(scaleTable, "55%", "35%")
	}	
}

function scaleTables(scaleTable, scaling, leftCap) {
  for(let i = 0; i < scaleTable.length;i++) {
    scaleTable[i].style.width = scaling;
    scaleTable[i].style.marginLeft = leftCap;
  }
}

function showButton() {
  let button = document.getElementById("hideSidebar");

  button.style.width = "20px";
}

function hideButton() {
  let button = document.getElementById("hideSidebar");

  button.style.width = "0px";
}
