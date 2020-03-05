window.onload = function (){

}
//variables
let form = document.getElementById("form");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let btnClr = document.getElementById("btnClr");
let id = 1;
//listItem = {item: "todo item", checked: false}
let liItem = "";
let todoList = [];

//button event listener
btn.addEventListener("click", boxChecked);

//event listener for clear list
btnClr.addEventListener("click", clearlist);

if (localStorage.length <= 0) {
btnClr.style.display = "none"; //hide clear btn
console.log("button");
}



































//add todo item to list
function addTodoItem() {
    if(input.value === "") {
        alert("You must enter some value!");
    } else {
        if (list.style.borderTop === "") {
            console.log("here!");
            list.style.borderTop = "2px solid white";
            btnClr.style.display = "inline";
        }
    }
}
let text = input.value;
let item = `<li id="li-${id}">{text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
list.insertAdjacentHTML('beforeend', item);
liItem = {
    item: text,
    checked:false
};
todoList.push(liItem);
id++;
addToLocalStorage();
form.reset();







