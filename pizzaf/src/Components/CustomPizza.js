import React, { useState } from "react";
import Nav from './Nav';
import axios from "axios";

const CustomPizza=(props)=>{
    const [baseh,setBase]=useState('');
    const [sauce,setSauce]=useState('');
    const [cheese,setCheese]=useState('');
    const [veg,setVeg]=useState('');
    const pizzaName=`base ${baseh}, sauce ${sauce}, cheese ${cheese} veg ${veg}`;
    const Add=()=>{
        const custom={
            pizzaName,
            email:props.setLoginUser.email,
            phone:props.setLoginUser.phone
        }
        axios.post('http://localhost:9002/custom',custom)
        .then((res)=>{alert(res.data.message)
            window.location.href="/payment";
        })

    }
    const base={
        marginLeft:"30px",
        marginRight:"27px",
        width:"200px",
        height:"200px",
        marginTop:"10px",
        borderRadius:"10px"
    }
    const heading={
        marginLeft:"35%",
        marginRight:"35%",
        fontWeight:"bolder",
        backgroundColor:"red",
        color:"white",
        textAlign:"center",
        borderRadius:"10px",
        fontFamily: "'Play', sans-serif'"
    }
    const heading1={
        marginLeft:"35%",
        marginRight:"35%",
        marginTop:"80px",
        fontWeight:"bolder",
        backgroundColor:"red",
        color:"white",
        textAlign:"center",
        borderRadius:"10px",
        fontFamily: "'Play', sans-serif'"
    }
    const whole={
        backgroundColor:"black",
        height:"10000px",
        position:"absolute",
        top:"70px"
    }
    const select={
        marginLeft:"30px",
        marginRight:"27px",
        width:"200px",
        height:"30px",
        backgroundColor:"cyan",
        float:"left",
        marginTop:"20px",
        textAlign:"center",
        fontWeight:"bold",
        borderRadius:"15px"

    }
    const white={
        backgroundColor:"white",
        height:"10px"
    }    
    const adc={
        textAlign:"center",
        width:"140px",
        backgroundColor:"red",
        placeholderColor:"white",
        borderRadius:"10px",
        marginLeft:"45%",
        marginTop:"30px",
        fontWeight:"bolder",
        
      }
return(
    <>
    <Nav />
    <br/><br/><br/><br/>
    <div style={whole}>
    <h1 style={heading}>Choose Base Type</h1>
    <img src="https://www.kff.co.uk/images_products/HD_pizza-base-thin-crispy.jpg" style={base} alt=""/>
    
    <img src="https://th.bing.com/th/id/OIP.Kh5G9ViS9gjEtGSQt-XS2QHaFj?w=280&h=210&c=7&r=0&o=5&pid=1.7" style={base} alt=""/>
    
    <img src="https://th.bing.com/th/id/OIP.ll59EJaUqQYAvqxsYOJVtAHaFU?pid=ImgDet&rs=1" style={base} alt=""/>
    
    <img src="https://th.bing.com/th/id/OIP.YJm8Q35wQzwGU0gbpcLl_wHaHa?pid=ImgDet&w=680&h=680&rs=1" style={base} alt=""/>
    
    <img src="https://th.bing.com/th/id/OIP.LwIqc1-Jst8dW1dAkNzHQwHaF4?w=266&h=211&c=7&r=0&o=5&pid=1.7" style={base} alt=""/>
    
    <div style={select}> Thin Crust <input type="radio" onClick={()=>setBase('Thin Crust')} name="BaseType"/> </div>
    <div style={select}> Thick Crust <input type="radio" onClick={()=>setBase('Thick Crust')} name="BaseType"/> </div>
    <div style={select}> New York-style <input type="radio" onClick={()=>setBase('NewYork Style')} name="BaseType"/></div>
    <div style={select}> Neapolitan <input type="radio" onClick={()=>setBase('Neapolitan')} name="BaseType"/></div>
    <div style={select}> Whole Wheat <input type="radio" onClick={()=>setBase('Whole Wheat')} name="BaseType"/></div>
    <div style={white}>
    </div>

    <h1 style={heading1}>Choose Sauce Type</h1>    <div style={white}>
    </div>
    <img src="https://thecookspyjamas.com/wp-content/uploads/How-To-Make-The-Best-Pizza-Sauce-3.jpg" style={base} alt=""/>
    
    <img src="https://th.bing.com/th/id/OIP.4_ThxV66Q5t_FPTvWj8cvAHaFU?pid=ImgDet&rs=1" style={base} alt=""/>
    
    <img src="https://th.bing.com/th/id/OIP.m6T-gkcP4oiihDsQquHY_gAAAA?pid=ImgDet&rs=1" style={base} alt=""/>
    
    <img src="https://i1.wp.com/mytastycurry.com/wp-content/uploads/2020/08/Pizza-Sauce-Recipe.jpg?resize=680%2C1008&ssl=1" style={base} alt=""/>
    
    <img src="https://th.bing.com/th/id/OIP.p5yxfV-pr2s0cMfbeYY1egHaJz?pid=ImgDet&w=680&h=900&rs=1" style={base} alt=""/>
    
    <div style={select}> Marinara <input type="radio"  onClick={()=>setSauce('Mariana')} name="sauceType"/> </div>
    <div style={select}> White Sauce <input type="radio"   onClick={()=>setSauce('White Sauce')} name="sauceType"/> </div>
    <div style={select}> Pesto Sauce <input type="radio"  onClick={()=>setSauce('Pesto Sauce')} name="sauceType"/></div>
    <div style={select}> BBQ Sauce <input type="radio"  onClick={()=>setSauce('BBQ Sauce')} name="sauceType"/></div>
    <div style={select}> Garlic Sauce <input type="radio"  onClick={()=>setSauce('Garlic Sauce')} name="sauceType"/></div>
    <div style={white}>
    </div>


    <h1 style={heading1}>Choose Cheese Type</h1>    <div style={white}>
    </div>
    <img src="https://assets.teenvogue.com/photos/5ab665d06d36ed4396878433/master/pass/GettyImages-519526540.jpg" style={base} alt=""/>
    
    <img src="https://img-aws.ehowcdn.com/600x600/photos.demandstudios.com/getty/article/41/217/96790826.jpg" style={base} alt=""/>
    
    <img src="https://th.bing.com/th/id/OIP.HspaG1hjfvxHlHclLii6bAAAAA?pid=ImgDet&rs=1" style={base} alt=""/>
    
    <img src="https://i1.wp.com/mytastycurry.com/wp-content/uploads/2020/08/Pizza-Sauce-Recipe.jpg?resize=680%2C1008&ssl=1" style={base} alt=""/>
    
    <img src="https://www.belforno.com/wp-content/uploads/2018/06/10-crazy-pizza-toppings-3-e1528455951627.png?x95384" style={base} alt=""/>
    
    <div style={select}> Mozzarella <input type="radio" onClick={()=>setCheese('Mozzarella')} name="CheeseType"/> </div>
    <div style={select}> Parmesan <input type="radio"  onClick={()=>setCheese('Parmesan')} name="CheeseType"/> </div>
    <div style={select}> Cheddar <input type="radio" onClick={()=>setCheese('Cheddar')} name="CheeseType"/></div>
    <div style={select}> Provolone <input type="radio" onClick={()=>setCheese('Provolone')} name="CheeseType"/></div>
    <div style={select}> Fontina <input type="radio" onClick={()=>setCheese('Frontina')} name="CheeseType"/></div>
    <div style={white}>
    </div>

    
    <h1 style={heading1}>Choose Veggies</h1>    <div style={white}></div>
    <div style={select}> No Veggies <input type="radio" onClick={()=>setVeg('No Veggies')} name="VeggiesType"/> </div>
    <div style={select}> Few Toppings <input type="radio"  onClick={()=>setVeg('Few Toppings')} name="VeggiesType"/> </div>
    <div style={select}> Moderate Toppings <input type="radio" onClick={()=>setVeg('Moderate Toppings')} name="VeggiesType"/></div>
    <div style={select}> Extra Toppings <input type="radio" onClick={()=>setVeg('Extra Toppings')} name="VeggiesType"/></div>
    <div style={select}> Full Cover <input type="radio" onClick={()=>setVeg('Full Cover')} name="VeggiesType"/></div>
  
    <button type="button" style={adc} onClick={Add} >Add to Cart</button>
    <hr></hr>
    <div style={white}>
    </div>
    </div>
    
    </>
)
}
export default CustomPizza;