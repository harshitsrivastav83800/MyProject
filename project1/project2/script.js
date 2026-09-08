const taskInput  = document.querySelector("#taskInput");
const addBtn   = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function(){
    const taskText = taskInput.value.trim();

    // if empty task we add
    if(taskText === ""){
        alert("please enter a task!");
        return;
    }
    // create list item
    const li = document.createElement("li");

    // create task text
    const span =document.createElement("span");
    span.textContent = taskText;
    
    // create complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "compelete";
    completeBtn.classList.add("completeBtn");

    completeBtn.addEventListener("click", function(){
        completeBtn.classList.add("completed");
    });

    //delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    //add every btn and all to li
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // add li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = "";
});