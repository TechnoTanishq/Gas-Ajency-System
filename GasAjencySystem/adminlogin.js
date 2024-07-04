function checkLogin()
{   
    console.log("called")
    let set_username="AdminTanishq"
    let set_password="adminhere"
    
    let input_usr=document.querySelector("#username").value;
    let input_pass=document.querySelector("#password").value;
    if(input_usr==="")
        {
            alert("Please enter username");
        }
    else if(input_pass==="")
        {
            alert("Please enter password");      
        }
    else if (input_pass!=set_password)
        {
                alert("Incorrect password")
        }
    else if(input_pass===set_password && input_usr===set_username)
        {
            alert("Logged in")
            window.location.href="admin.html";
        }
}