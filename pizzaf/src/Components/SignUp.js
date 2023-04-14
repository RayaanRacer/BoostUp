import React, { useState } from "react";
import axios from "axios";
const SignUP=()=>{
    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const [npass,setnpass]=useState('');
    const [tell,settell]=useState('');
    const wholeLog={
        width:"40%",
        margin:"auto",
        marginTop:"30px",
        border:"2px solid blue",
        paddingTop:"10px",
        paddingLeft:"10px",
        paddingRight:"10px",
        backgroundColor:"black",
        color:"white",
        backgroundImage:"linear-gradient(to right, darkblue, lightblue)",
        borderRadius:"20px",
        fontWeight:"bolder"

    }
    const Button={
        textAlign:"center"
    }
    const whole={
        backgroundImage:"linear-gradient(to right, grey, black)",
        paddingTop:"40px",
        
    }
    const width={
        width:"100px",
        height:"100px",
        borderRadius:"10px",
        marginLeft:"200px"
      }

    const Register=()=>{
        var user={
            fname:fname,
            lname:lname,
            email:email,
            pass:pass,
            newpass:npass,
            phone:tell
        }
        if(fname && lname && email && pass && tell && (pass === npass)){
        axios.post("http://localhost:9002/register",user)
        .then(res=>{console.log(res)
        alert(res.data.message)
        })
        }
        else{
          alert("Enter valid confi")
        }
        // send();
        // console.log(login2);
      }
      const curve={
        borderRadius:"13px"
      }
      // const send=async(e)=>{    
      //   e.preventDefault();
      //   const res= await fetch("/register",{
      //       method:"POST",
      //       headers:{
      //           "Content-Type":"application/json"
      //       },
      //       body:JSON.stringify({
      //           fname:fname,
      //           lname:lname,
      //           email:email,
      //           pass:pass,
      //           newpass:npass,
      //           phone:tell
      //       })
      //   })
      // }
    return(
        <><br />

        <div style={whole}>
        <form method="POST" style={wholeLog}>
        <img src='https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-vector-PNG.png' style={width} alt='Logo'/>
       
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">First Name</label>
    <input type="text" id="form2Example1" className="form-control" onChange={(e)=>setfname(e.target.value)}/>
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Last Name</label>
    <input type="text" id="form2Example2" className="form-control" onChange={(e)=>setlname(e.target.value)}/>
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Email</label>
    <input type="email" id="form2Example3" className="form-control" onChange={(e)=>setemail(e.target.value)}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Phone No.</label>
    <input type="tel" id="form2Example4" className="form-control" onChange={(e)=>settell(e.target.value)}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">New Password</label>
    <input type="password" id="form2Example5" className="form-control" onChange={(e)=>setpass(e.target.value)}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example2" >Repeat Password</label>
    <input type="password" id="form2Example6" className="form-control" onChange={(e)=>setnpass(e.target.value)}/>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  <div  style={Button}>
  <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e)=>Register()}>Sign Up</button>
  </div>
  <div className="text-center">
    <p>Alredy a member? <a href="Login" >LogIn</a></p>
    <p>or sign up with:<a href="https://mail.google.com"> <img style={curve} alt="google" src="https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg" height="20px" width="20px" /></a></p>
    {/* <FontAwesomeIcon icon="fa-brands fa-google" style={iota} /> */}

  </div>
</form>    
        </div>
        </>
    )
}
export default SignUP;