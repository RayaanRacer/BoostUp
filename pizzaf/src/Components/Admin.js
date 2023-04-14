import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AdminInventory from "./AdminPannel/AdminInventory";
import AdminOrders from "./AdminPannel/AdminOrders";
import AdminUser from "./AdminPannel/AdminUser";
import Nav from "./Nav";
const Admin=()=>{
    const dashboard={
        position:"relative",
        top:"100px",
        width:"70%",
        height:"70px",
        borderRadius:"10px",
        backgroundColor:"white",
        border:"2px solid black",
        marginLeft:"15%"
    }
    const dashMen={
        width:"33.33%",
        backgroundColor:"orangered",
        border:"1px solid black",
        height:"100%",
        float:"left",
        borderRadius:"5px",
        textAlign:"center",
        paddingTop:"13px",
        fontSize:"25px",
        fontWeight:"bold",
        linkDecoration:"none"
    }
    return(
        <>

   
        <div style={dashboard}>
            <div style={dashMen}><a href="/AdminUser">Users</a></div>
            <div style={dashMen}><a href="/AdminOrders">Orders</a></div>
            <div style={dashMen}><a href="/AdminInventory">Inventory</a></div>
            </div>

        </>
    )
}
export default Admin;