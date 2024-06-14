let inputText = document.getElementById('text');/*for input element*/
let listContainer = document.getElementById('addOnList');/*for input element*/
let buton = document.getElementById('btn');/*for input */


function addTask() {
    if (inputText.value === '') {
        alert("gerageza ugire icyo wandika bro!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-times"></i>';
        li.appendChild(span);

    }
    inputText.value = '';
    saveData()
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

        saveData();
    }
    saveData();
}, false);
//save function even you refresh
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
//trying to make an array that will store the deleted list item so that we can bring them back

showTask()



