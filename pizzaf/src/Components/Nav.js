import React from 'react';
import './Navigation.css';


function Nav(props) {
  
 console.log(props._id);
  const width={
    width:"50px",
    height:"50px",
    marginLeft:"40px",
    borderRadius:"10px"
  }

  return (<>
    <nav>
      <ul>
        <img src='https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-vector-PNG.png' style={width} alt='Logo'/>
        <li><a href="Home">| HOME |</a></li>
        <li><a href="#">| STORES |</a></li>
        <li><a href="#">| FLAVOURS |</a></li>
        <li><a href="#">| CONTACTS |</a></li>
         <li><a href="Login">| {(props && props.name) ? <b>LOGOUT</b> : <b>LOGIN</b>} |</a></li>
        {/* <li><NavLink to="/Login">| LOGIN |</NavLink></li> */}
        <li><a href="SignUp">| SIGNUP |</a></li>
        {/* <li><a href="#" onClick={()=>setLoginUser({})}>| LOGOUT |</a></li> */}
        <span className='left'><li className='AppButton'><a href="#"> Download The App</a></li>
        <li className='AppButton'><a href="#"> Order Online</a></li>
        </span>
      </ul>
    </nav>

  </>
  );
}
export default Nav;