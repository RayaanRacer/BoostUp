import React,{useState} from "react";
import axios from "axios";
const Login=({setLoginUser,setToken})=>{
    const [inputemail,setInputemail]=useState('');
    const [inputpass,setInputpass]=useState('');

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
        height:"1000px"
        
    }
    const width={
        width:"100px",
        height:"100px",
        borderRadius:"10px",
        marginLeft:"200px"
      }
      const Login=()=>{
        const reg={
            email:inputemail,
            pass:inputpass
        }
        console.log(reg);
        axios.post("http://localhost:9002/login",reg)
        .then(res=>{alert(res.data.message)
          // console.log(res.data.token);
          setLoginUser(res.data.user);
          // setToken(res.data.j);
          // console.log(res.data.j);
        })
      }

      const curve={
        borderRadius:"13px"
      }
    return(
        <><br />

        <div style={whole}>
        <form name="forms" style={wholeLog}>
        <img src='https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-vector-PNG.png' style={width} alt='Logo'/>
       
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Email address</label>
    <input name="email" type="email" id="form2Example1" className="form-control" onChange={(e)=>setInputemail(e.target.value)} />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example2">Password</label>
    <input name="password" type="password" id="form2Example2" className="form-control" onChange={(e)=>setInputpass(e.target.value)} />
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
  <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e)=>Login()}>Sign in</button>
  </div>
  <div className="text-center">
    <p>Not a member? <a href="SignUp" >Register</a></p>
    <p>or sign up with:<a href="https://mail.google.com"> <img alt="Google" style={curve} src="https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg" height="20px" width="20px" /></a></p>
    <a href="/Adminlogin">Admin Login</a>
  </div>
</form>
</div>
        </>
    )
}
export default Login;