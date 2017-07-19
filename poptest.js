// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
if (document.getElementById('request-popup').style.display = "block") {
  document.getElementById('button').style.display = "none"
} else {
  document.getElementById('button').style.display = "none";
}

}
//Function to Hide Popup
function div_hide(){
  document.getElementById('button').style.display = "block";
  document.getElementById('request-popup').style.display = "none";
}
// function hide_button() {
//   document.getElementById('popup').style.display = "none";
// }
