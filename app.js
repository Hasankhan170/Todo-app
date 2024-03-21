const todoInput = document.querySelector("#todo");
const ol = document.querySelector("ol");


function randarArray(){
    ol.innerHTML = ""

    for(let i = 0; i<emptyArray.length ; i++){
        ol.innerHTML += `<li>${emptyArray[i]}
        <button onclick = "addTodo(${i})">Delete</button>
        <button onclick = "editTodo(${i})">Edit</button>
        
        </li>`
    } 
}
const emptyArray = [];


function Click(){
    emptyArray.push(todoInput.value);
    todoInput.value = "";

    randarArray();
}



function addTodo(index){
    emptyArray.splice(index , 1)

    randarArray()
}

function editTodo(index){
    let updateValue = prompt("ENTER UPDATE VALUE");
    emptyArray.splice(index,1,updateValue)

    randarArray()

}










































