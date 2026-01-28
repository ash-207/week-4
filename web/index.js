
let signupObject=
{
    name:"test",
    email:"test@gmail.com",
    password:"12345"
}


console.log("signup object : "+JSON.stringify(signupObject,null,2));

async function signup()
{
    let n=document.getElementById("n").value;
    let e=document.getElementById("e").value;
    let p=document.getElementById("p").value;

    let api="http://40.0.20.123:4040/api/signup";

    let obj={
        name:n,
        email:e,
        password:p
    }

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
}