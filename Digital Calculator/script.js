function Clr(){
    document.getElementById("Result").value = "";

};

function Display(val){
    document.getElementById("Result").value+=val;

};

function Equate(){
    let x = document.getElementById("Result").value;
    let y = eval(x);
    document.getElementById("Result").value = y;

};