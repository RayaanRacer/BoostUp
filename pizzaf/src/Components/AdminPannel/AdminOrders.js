import axios from "axios";
import React, { useState } from "react";
const AdminOrders=()=>{
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
        height:"3000px",
        backgroundColor:"black",
        textAlign:"center"
    }
    const [data,setData]=useState([])
    const [cdata,setcdata]=useState([])
    const [pcudata,setpcudata]=useState([])
    const [cudata,setcudata]=useState([])
   
    const fetchPendingData=()=>{
        axios.post('http://localhost:9002/pending')
        .then((res)=>{
            setData(res.data);
            data.map((elem,ind)=>{

                console.log(elem.pizzaName+" "+elem.email+" "+elem.phone);
            })
        })
    }

    const fetchConfirmData=()=>{
        axios.post('http://localhost:9002/fetchC')
        .then((res)=>{
            setcdata(res.data);
            data.map((elem,ind)=>{

                console.log(elem.pizzaName+" "+elem.email+" "+elem.phone);
            })
        })
    }
    const ConfirmPending = (email,pizzaName,phone,id) => {
        console.log(email);
        const j={
            pizzaName,
            email,
            phone,
            id
        }
        axios.post('http://localhost:9002/confirmO',j)
        .then((res)=>{
            alert(res.data.message);
            fetchPendingData();
            fetchConfirmData();
        })

      };

      const fetchCustomPendingData=()=>{
        axios.post('http://localhost:9002/fetchPCU')
        .then((res)=>{
            setpcudata(res.data);
        })
      }
      const ConfirmCustom=(pizzaName,email,phone,id)=>{
        const j={
            pizzaName,
            email,
            phone,
            id
        }
        axios.post('http://localhost:9002/confirmCu',j)
        .then((res)=>{
            alert(res.data.message);
            fetchCustomPendingData();
            fetchConfirmData();
        })
      }
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
    console.log(cdata);
    const fetchCustomData=()=>{
        axios.post('http://localhost:9002/CuData')
        .then((res)=>{
            setcudata(res.data);
            fetchCustomPendingData();
            
        })
    }
    return(
        <><div style={whole}>

{/* All Pending Orders */}
        <button style={but} onClick={fetchPendingData}>
            Click Here To View All Pending Orders
        </button>
        <table border="1" style={table}>
    <thead>
      <tr>
        <th style={pd}>Pizza Name</th>
        <th style={pd}>Email</th>
        <th style={pd}>Phone Number</th>
        <th style={pd}>Option</th>
      </tr>
    </thead>
    
        {
            data.map((elem)=>{
                    return(
                        <tr key={elem._id}>
                        <td style={td}>{elem.pizzaName} </td>
                        <td style={td}>{elem.email}</td>
                        <td style={td}>{elem.phone} </td>
                        <td style={td1}><button onClick={() =>ConfirmPending(elem.email,elem.pizzaName,elem.phone,elem._id)}>Confirm</button></td>
                      </tr>   
        )})
        }
        </table>

{/* All Completed Orders */}
<button style={but} onClick={fetchConfirmData}>
            Click Here To View All Completed Orders
        </button>
        <table border="1" style={table}>
    <thead>
      <tr>
        <th style={pd}>Pizza Name</th>
        <th style={pd}>Email</th>
        <th style={pd}>Phone Number</th>
        <th style={pd}>Option</th>
      </tr>
    </thead>
    
        {
            cdata.map((elem)=>{
                    return(
                        <tr key={elem._id}>
                        <td style={td}>{elem.pizzaName}</td>
                        <td style={td}>{elem.email}</td>
                        <td style={td}>{elem.phone} </td>
                        <td style={td1}><button onClick={() => ConfirmPending(elem.email,elem.pizzaName,elem.phone,elem._id)}>Delete</button></td>
                      </tr>   
        )})
        }
        </table>

        {/* Custom Pending Orders */}
        <button style={but} onClick={fetchCustomPendingData}>
            Click Here To View All Custom Pending Orders
        </button>
        <table border="1" style={table}>
    <thead>
      <tr>
        <th style={pd}>Pizza Name</th>
        <th style={pd}>Email</th>
        <th style={pd}>Phone Number</th>
        <th style={pd}>Option</th>
      </tr>
    </thead>
    
        {
            pcudata.map((elem)=>{
                    return(
                        <tr key={elem._id}>
                        <td style={td}>{elem.pizzaName} </td>
                        <td style={td}>{elem.email}</td>
                        <td style={td}>{elem.phone} </td>
                        <td style={td1}><button onClick={() => ConfirmCustom(elem.pizzaName,elem.email,elem.phone,elem._id)}>Delete</button></td>
                      </tr>   
        )})
        }
        </table>

        <button style={but} onClick={fetchCustomData}>
            Click Here To View All Completed Custom Orders
        </button>
        <table border="1" style={table}>
    <thead>
      <tr>
        <th style={pd}>Pizza Name</th>
        <th style={pd}>Email</th>
        <th style={pd}>Phone Number</th>
        <th style={pd}>Option</th>
      </tr>
    </thead>
    
        {
            cudata.map((elem)=>{
                    return(
                        <tr key={elem._id}>
                        <td style={td}>{elem.pizzaName} {elem.lname}</td>
                        <td style={td}>{elem.email}</td>
                        <td style={td}>{elem.phone} </td>
                        <td style={td1}><button onClick={() => ConfirmPending(elem.email)}>Delete</button></td>
                      </tr>   
        )})
        }
        </table>
        </div>
        </>
    )
}
export default AdminOrders;