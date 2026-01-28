
async function login()
{
    let e=document.getElementById("e").value;
    let p=document.getElementById("p").value;

    let api="http://40.0.20.123:4040/login";

    let obj=
    {
        email:e,
        password:p
    }

    localStorage.setItem("login-cred",JSON.stringify(obj));

    console.log("object to be sent : "+JSON.stringify(obj,null,2));

    let res=await fetch(api,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    });

    let data=await res.text();
    console.log("API Response: "+data);

    if(data=="Login successful")
    {
        alert("Login Successful✅");
    }
}

