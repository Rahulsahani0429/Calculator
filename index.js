// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
    
// }

// function calculateResult() {
//     let result = eval(document.getElementById('display').value);
//     document.getElementById('display').value = result;
// }
// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
