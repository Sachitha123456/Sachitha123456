function validateEdit()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
    {
        localStorage.setItem("user",username);
        localStorage.setItem("pass",password);
        alert("login successfully");
        console.log("win",window.location.pathname);
        window.location.href="dashboard.html";
        return false;
        
    }
    else
    {
       alert("login failed")
    }
}


document.getElementById("selectAll").onclick = function() {
    document.getElementById("userPassword").select();
  }