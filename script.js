// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('telephone').value == "") {
alert("Please do not leave Name and Telephone field empty");
} else {
document.getElementById('form').submit();
alert("Thank you. An expert will contact you soon.");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('requestForm').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('requestForm').style.display = "none";
}
