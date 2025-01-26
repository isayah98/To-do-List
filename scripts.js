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
    let buttonInput =pressButton.textContent;
    if(buttonInput === "Edit")
    {
        let newText = myList.value.trim();
        
        if (newText !== "") {
            let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            savedTasks[pressButton.dataset.index] = newText;
            localStorage.setItem("tasks", JSON.stringify(savedTasks));

            let allList = document.querySelectorAll(".list");
            let theElement = allList[pressButton.dataset.index];
            let inneElem =theElement.querySelector(".do");
            inneElem.textContent =newText;
            

            pressButton.textContent = "Add";
            myList.value = "";
    }
    else{
        let inputValue = myList.value.trim();
    if (inputValue !== "") {
        addTaskToDOM(inputValue);
        saveTasks();
        myList.value = "";
    }
    }
    }
    
});



myContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {
        e.target.closest(".list").remove();
        saveTasks();
    }
    else if(e.target.classList.contains("edit")){
        let itemElement = e.target.closest(".list");
        let itemText =itemElement.querySelector(".do").textContent;
        let collectedinfo =JSON.parse(localStorage.getItem("tasks")) || [];
        let index = collectedinfo.findIndex(info => info === itemText);
        
        if(index !== -1){
            myList.value = itemText;
            pressButton.textContent ="Edit";
            pressButton.dataset.index = index;
        }
       
    }
});



