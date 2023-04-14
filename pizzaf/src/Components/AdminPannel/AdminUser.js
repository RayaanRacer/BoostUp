import axios from "axios";
import React, { useState } from "react";
const AdminUser=()=>{
    const pd={
        padding:"8px",
        backgroundColor:"orangered"
    }
    const td={
        padding:"8px",
        backgroundColor:"cyan",
        width:"50px"
    }
    const td1={
        padding:"8px",
        backgroundColor:"cyan",
        width:"50px"
    }
    const whole={
        position:"absolute",
        top:"70px",
        width:"100%",
        height:"100%",
        backgroundColor:"black",
        textAlign:"center"
    }
    const [data,setData]=useState([])
   
    const fetchData=()=>{
        axios.post('http://localhost:9002/all')
        .then((res)=>{
            setData(res.data);
            data.map((elem,ind)=>{

                console.log(elem.fname+" "+elem.lname+" "+elem.email);
            })
        })
    }
    const handleDelete = (email) => {
        console.log(email);
        const j={
            email:email
        }
        axios.post('http://localhost:9002/deleteU',j)
        .then((res)=>{
            alert(res.data.message);
            fetchData();
        })

      };
      const table={
        textAlign:"center",
        marginTop:"20px",
        borderRadius:"20px",
        marginLeft:"35%"
    }
    const but={
        backgroundColor:"red",
        borderRadius:"10px",
        color:"white",
        width:"200px",
        textAlign:"center",
        fontWeight:"bolder"
    }
    return(
        <><div style={whole}>
        <button style={but} onClick={fetchData}>
            Click Here To View All Users
        </button>
        <table border="1" style={table}>
    <thead>
      <tr>
        <th style={pd}>Name</th>
        <th style={pd}>Email</th>
        <th style={pd}>Phone Number</th>
        <th style={pd}>Option</th>
      </tr>
    </thead>
    
        {
            data.map((elem)=>{
                    return(
                        <tr key={elem._id}>
                        <td style={td}>{elem.fname} {elem.lname}</td>
                        <td style={td}>{elem.email}</td>
                        <td style={td}>{elem.phone} </td>
                        <td style={td1}><button onClick={() => handleDelete(elem.email)}>Delete</button></td>
                      </tr>
                
                   
                
            )})
        }
        </table>
        </div>
        </>
    )
}
export default AdminUser;