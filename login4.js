
function validate()
{

    alert("Edit Page");
    window.location.href="EV.html";
            
}


function validateEdit()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;


localStorage.setItem("user",username)
localStorage.setItem("pass",password)
location.reload();


}


document.getElementById("selectAll").onclick = function() {
document.getElementById("userPassword").select();
}