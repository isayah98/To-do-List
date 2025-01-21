let myList= document.getElementById("to-do");
let pressButton= document.getElementById('addEdit');
let myContainer = document.querySelector(".my-do");

pressButton.addEventListener("click", function(){
    let inputValue =myList.value;
    let inputLeng = inputValue.length;
    
    if(inputLeng > 0)
    {
        let newItem = `<div class="list">
        <span id="do">${inputValue}</span>
        <div class="edimove">
            <span id="edit">Edit</span>
            <span id="remove">Remove</span>
        </div>
    </div>`;
    myContainer.insertAdjacentHTML('beforeend', newItem);
    document.querySelector(".list").style.display ="block";
    myList.value = "";
    }
});