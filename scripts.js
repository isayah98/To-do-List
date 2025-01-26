let myList= document.getElementById("to-do");
let pressButton= document.getElementById('addEdit');
let myContainer = document.querySelector(".my-do");



document.addEventListener("DOMContentLoaded", function() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        addTaskToDOM(task);
    });
});

function addTaskToDOM(taskText) {
    let newItem = `<div class="list">
        <span class="do">${taskText}</span>
        <div class="edimove">
            <span class="edit">Edit</span>
            <span class="remove">Remove</span>
        </div>
    </div>`;
    myContainer.insertAdjacentHTML('beforeend', newItem);
}

function saveTasks() {
    let allTasks = Array.from(document.querySelectorAll(".do")).map(task => task.textContent);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
}


pressButton.addEventListener("click", function() {
    let inputValue = myList.value.trim();
    if (inputValue !== "") {
        addTaskToDOM(inputValue);
        saveTasks();
        myList.value = "";
    }
});


myContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {
        e.target.closest(".list").remove();
        saveTasks();
    }
});

myContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("edit")){
        pressButton.innerHTML="Edit";
        let listItem = e.target.closest("do");  // Find the closest <li> element
        alert("You clicked Edit on:", listItem);
        
    }
})