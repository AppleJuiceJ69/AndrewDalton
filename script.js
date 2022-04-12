//when i click on indent icon then open flex box menu
//it will be on flex box column, and it will dissapear when i scroll down.
const indent = document.getElementById("indent");
const Container = document.getElementById("Container");
const container = document.getElementById("container");

indent.addEventListener("mouseover", () => {
	Container.style.display = "inline";
});

indent.addEventListener("mouseleave", () => {
	Container.style.display = "none";
});
