const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

// Creating list
function addTask(){
    if(inputBox.value === ''){
        alert("Write something to add !!!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    saveData()
}

// Click function
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData()
},false)

// Saving data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// Displaying saved data
function display(){
    listContainer.innerHTML=localStorage.getItem("data");
}
display();