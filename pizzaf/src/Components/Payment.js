import React from "react";
const Payment =()=>{
    const whole={
        backgroundImage:"url('https://th.bing.com/th/id/OIP.6bbE2siJf7TZKeEmByhZqQHaEK?pid=ImgDet&rs=1')",
        height:"1000px",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"100%"
    }
    const inner={
        backgroundColor:"black",
        backdropFilter:"blur(12px)",
        width:"45%",
        marginLeft:"26%",
        marginRight:"28%",
        position:"relative",
        top:"100px",
        height:"500px",
        borderRadius:"20px",
        boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        textAlign:"center",

    }
    const h2={
        width:"40%",
        marginLeft:"20%",
        position:"relative",
        top:"40px",
        fontWeight:"bold",
        color:"grey"
    }
    const paypal={
        width:"60%",
        height:"25px",
        backgroundColor:"white",
        position:"relative",
        top:"40px",
        marginLeft:"20%",
        textAlign:"left"
    }
    const radio={
        position:"relative",
        left:"10px",
    }
    const cc={
        width:"60%",
        height:"250px",
        backgroundColor:"white",
        position:"relative",
        top:"40px",
        marginLeft:"20%",
        textAlign:"left"
    }
    const left={
        width:"40%",
        boder:"1px solid black",
        height:"80%"
    }
    const right={
        width:"40%",
        boder:"1px solid black",
        height:"80%"
    }
    const in1={
        marginLeft:"20px",
        marginTop:"9px",
        height:"24px",
        fontSize:"10"
    }
    const in2={
        marginLeft:"90%",
        marginTop:"5px",
        backgroundColor:"orange",
        borderRadius:"5px"
    }
    return(
        <>
        <div style={whole}>
            <div style={inner}>
                <h3 style={h2}>Payment Method</h3>
                <div style={paypal}>
                    <input style={radio} type="radio" name="payment"/>
                    &nbsp; &nbsp; <b>PayPal</b>
                    <img src="https://th.bing.com/th/id/OIP.TBvJQM0YORRyOAY6RwAQkwHaHa?pid=ImgDet&rs=1" height="25" width="25"align="right" alt="Paypal"/>
                </div>
                <br/>
                <div style={paypal}>
                    <input style={radio} type="radio" name="payment"/>
                    &nbsp; &nbsp; <b>
                    <a href="/Razorpay">RazorPay</a>

                    </b>
                    <img src="https://avatars.githubusercontent.com/u/7713209?s=280&v=4" height="25" width="25"align="right" alt="RazorPay"/>
        
                </div>
                <br />
                <div style={cc}>
                    <input style={radio} type="radio" name="payment"/>
                    &nbsp; &nbsp; <b>Debit Card</b>
                    <img src="https://th.bing.com/th/id/OIP.CjQ-yJTynXn5prbGzfOV8wHaEo?pid=ImgDet&rs=1" height="25" width="25"align="right" alt="RazorPay"/> &nbsp;
                    <img src="https://logos-download.com/wp-content/uploads/2016/03/Mastercard_Logo_1990-2048x1223.png" height="25" width="25"align="right" alt="RazorPay"/>
                    <div style={left}>
                        <input type="text" style={in1} placeholder="Name"/><br/>
                        <input type="num" maxLength="16" style={in1} placeholder="Card Number"/><br/>
                        
                        <input type="num" maxLength="3" style={in1} placeholder="CVV"/><br/>
                        
                        <input type="date" style={in1} placeholder="Expiry Date"/><br/>
                        
                        <input type="submit" style={in2} value="Submit"/><br/>
                    </div>
                    <div style={right}>

                    </div >
        
                </div>
            </div>
        </div>
        </>
    )
}
export default Payment;