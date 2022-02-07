
let got1=    localStorage.getItem("user");
    let got2=    localStorage.getItem("pass");


    console.log("got1",got1);
    console.log("got2",got2);


function validate()
{




    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;


    /* localStorage.setItem("user",username);
        localStorage.setItem("pass",password); */



    
    if(username==got1&& password==got2)
    {
        
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