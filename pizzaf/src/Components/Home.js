import React from "react";
import Nav from './Nav';
import Login from './Login';
import CarouselPizza from "./CarouselPizza";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./SignUp";
import { useState } from 'react';
import CustomPizza from "./CustomPizza";
import Payment from "./Payment";
import Admin from "./Admin";
import AdminUser from "./AdminPannel/AdminUser";
import AdminInventory from "./AdminPannel/AdminInventory";
import AdminOrders from "./AdminPannel/AdminOrders";
import AdminLogin from "./AdminPannel/AdminLogin";
import Razorpay from "./Razorpay";

const Home =()=>{
  const [user,setLoginUser] = useState('');
  console.log(user);
  // setToken(user.token)
  
  return(
    <>
     <Nav name={user._id} />
    <BrowserRouter>
    <Routes>
      <Route exact path="/AdminLogin" element={<AdminLogin/>}></Route>
      <Route exact path="/" element={(user && user._id) ?<CarouselPizza  name={user._id}  setLoginUser={user}/> : <Login  setLoginUser={setLoginUser} />} >
      </Route>
      <Route exact path="/Razorpay" element={<Razorpay/>}></Route>
      <Route exact path="/Admin" element={<Admin />}></Route>
      <Route exact path="/AdminOrders" element={<AdminOrders/>} >
      </Route>
      <Route exact path="/AdminInventory" element={<AdminInventory/>} >
      </Route>
      <Route exact path="/AdminUser" element={<AdminUser/>} >
      </Route>
      <Route exact path="/payment" element={<Payment/>}></Route>
      <Route path="/Home" element={(user && user._id) ?<CarouselPizza  name={user.fname}  setLoginUser={user}/> : <Login  setLoginUser={setLoginUser}/>}></Route>

      <Route path="/Login" element={(user && user._id) ?<CarouselPizza  name={user.fname}  setLoginUser={user}/> : <Login setLoginUser={setLoginUser} />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/CustomPizza" element={(user && user._id) ?<CustomPizza  name={user.fname} setLoginUser={user}/> : <Login  setLoginUser={setLoginUser}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default Home;
