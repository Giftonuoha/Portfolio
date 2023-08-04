const inputField = document.getElementById("input-field");
const paperSheet = document.getElementById("paper-sheet");

function addItem(){
    if(inputField.value === ''){
        alert("Please add an item!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        paperSheet.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = "";
    saveData();
}

paperSheet.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", paperSheet.innerHTML);
}

function showData(){
    paperSheet.innerHTML = localStorage.getItem("data");
}
showData();