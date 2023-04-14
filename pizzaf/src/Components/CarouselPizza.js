import React, { useState } from "react";
import './Navigation.css';
import axios from "axios";
const CarouselPizza =(props)=>{
    const width={
        width:"100%",
        height:"550px",
        backgroundColor:"black"
    }
    const wholeWidth={
      width:"80%"
    }
    const sideBar={
      float:"right",
      position:"absolute",
      top:"70px",
      left:"1039px",
      width:"20%",
      backgroundColor:"black"
      
    }
    const imgWidth={
      width:"280px",
      height:"140px",
      marginTop:"10px",
      marginBottom:"10px",
      borderRadius:"20px"
    }
    const heading={
      textAlign:"center",
      fontWeight:"bolder"
    }
    const headDes={
      textAlign:"center",
      margin:"auto",
      width:"60%"
    }
    const blackbg={
      backgroundColor:"black"
    }
    const AppButton={
      float:"right",
      width:"15%",
      position:"absolute",
      top:"600px",
      right:"20px",
      backgroundColor:"red",
      textAlign:"center",
      color:"white",
      fontWeight:"bold",
      borderRadius:"10px"
    }
    const piztyp={
      width:"50%",
      height:"300px",
      marginLeft:"25%",
      marginRight:"25%",
      marginBottom:"20px",
      marginTop:"20px",
      border:"3px solid black",
      borderRadius:"20px"
    }
    const adc={
      textAlign:"center",
      width:"140px",
      backgroundColor:"red",
      placeholderColor:"white",
      borderRadius:"10px",
      marginLeft:"45%",
      fontWeight:"bolder",
      
    }
    
    let [a,setA]=useState('0');
    let [b,setB]=useState('0');
    let [c,setC]=useState('0');
    let [d,setD]=useState('0');
    let [e,setE]=useState('0');
    const added=()=>{
      console.log(a);
      console.log(props.setLoginUser.email);
      const pizzaName="a:"+a+"b:"+b+"c:"+c+"d:"+d+"e:"+e

      const reg={
        pizzaName,
        email:props.setLoginUser.email,
        phone:props.setLoginUser.phone
      }

      console.log(reg);
      axios.post("http://localhost:9002/submit",reg)
      .then(res=>{alert(res.data.message)})
       
        

      }
    
    console.log(props.setLoginUser.fname);

    const whole={
      backgroundImage:"linear-gradient(to right, black, grey)"
    }
    const dsh={
      textAlign:"center",
      color:"white",
      fontWeight:"bolder",
      paddingTop:"10px"
    }
    return(
        <>
        {/* <!-- Carousel --> */}
<div id="demo" className="carousel slide" data-bs-ride="carousel" style={wholeWidth}>
{/* 
  <!-- Indicators/dots --> */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg" alt="Los Angeles" className="d-block" style={width} />
  
      <div className="carousel-caption">
        <h3>Pizza Mania</h3>
        <p>Delicious Spice Red!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images6.alphacoders.com/698/698287.jpg" alt="Chicago" classNameName="d-block" style={width} />
      <div className="carousel-caption">
        <h3>Chicago Pizza</h3>
        <p>Chlli Nawaab</p>
      </div> 
    </div>
    <div className="carousel-item">
      <img src="https://purepng.com/public/uploads/large/purepng.com-pizzafood-pizza-941524644327twewe.png" alt="New York" className="d-block" style={width} />
      <div className="carousel-caption">
        <h3>Large Shiko</h3>
        <p>We love the Big Apple!</p>
      </div>  
    </div>
  </div>

  
  {/* <!-- Left and right controls/icons --> */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<div className="sideBar" style={sideBar}>
  <img src="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg" alt="pizza1" style={imgWidth}/>
  
  <img src="https://images6.alphacoders.com/698/698287.jpg" alt="pizza1" style={imgWidth}/>
  <img src="https://www.sheknows.com/wp-content/uploads/2018/08/Italian-pizza_g5dogn.jpeg" alt="pizza1" style={imgWidth}/>
</div>

<div style={blackbg} className="container-fluid mt-3">
  <h3 style={heading}>Pizza Shopping</h3>
  <p style={headDes}> As the name suggests, the pizza mania will allow you to go giddy and gaga over all the pizza options that are present in front of you. The sheer vastness and varieties would be worth drooling over. The amazingness in the tastes of these different pizzas would only lead to more mouth-watering goodness. From the pizza menu, you can choose between pizza options that will suit your taste buds. You can also experiment and check out the pizza mania menu for different and unique options that you might not have had the pleasure of trying out. You can never go wrong with a pizza order. This cuisine does not need a specific occasion or time to enjoy. Bask in the delightfulness and dig into the most scrumptious food near me. Sit back and relax as you can place your orders online or by calling the outlets and have the food delivered.</p>
  <p style={AppButton}>
    Welcome {props.setLoginUser.fname}
  </p>
  
   
</div>
{/* choose pizza */}
<div style={whole}>
  <h1 style={dsh}>-:<u>Choose Our Best Pizzas</u>:-</h1>
  <img style={piztyp} src="https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-margherita-.jpg" alt="Neapolitan Pizza" /> 
  <input type="number" id="quantity" style={adc} name="pizza1" placeholder="Enter Quantity" min="0" max="5" onChange={(e)=>setA(e.target.value)} />
  < img style={piztyp}  src="https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-deepdish.jpg" alt="Chicago Pizza" />  <input type="number" style={adc} name="pizza2" placeholder="Enter Quantity" min="0" max="5" onChange={(e)=>setB(e.target.value)}/>
  < img style={piztyp} src="https://cdnimg.webstaurantstore.com/uploads/blog/2016/8/flat.jpg" alt="New York-Style Pizza" />   <input type="number" id="quantity" style={adc} name="pizza3" placeholder="Enter Quantity" min="0" max="5" onChange={(e)=>setC(e.target.value)}/>
  < img style={piztyp} src="https://cdnimg.webstaurantstore.com/uploads/blog/2016/8/rectangle.jpg" alt="Sicilian Pizza" />   <input type="number" id="quantity" style={adc} name="pizza4" placeholder="Enter Quantity" min="0" max="5" onChange={(e)=>setD(e.target.value)}/>
  < img style={piztyp} src="https://cdnimg.webstaurantstore.com/uploads/blog/2016/8/onions.jpg" alt="Greek Pizza" />   <input type="number" id="quantity" style={adc} name="pizza5" placeholder="Enter Quantity" min="0" max="5" onChange={(e)=>setE(e.target.value)}/>
  <br/><br/><button type="button" style={adc} onClick={(e)=>added()}>Add to Cart</button>
  
<h1 style={dsh}>-:<u>Want Customized Pizza? <a href="/CustomPizza">Click Here</a></u>:-</h1>



</div>
        </>
    )
}
export default CarouselPizza;