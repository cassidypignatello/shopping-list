var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var deleteButton = document.createElement("button");
	var li = document.createElement("li");
	deleteButton.innerHTML = "Delete";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(div);
	div.appendChild(li);
	li.insertAdjacentElement("afterend", deleteButton);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markItemDone(e) {
	var listItem = e.target;
	if (listItem.nodeName === "LI") {
		listItem.classList.toggle("done");
	}
}

function deleteItem(e) {
	var button = e.target;
	var div = e.target.parentNode;
	if (button.nodeName === "BUTTON") {
		div.remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", markItemDone);
ul.addEventListener("click", deleteItem);
