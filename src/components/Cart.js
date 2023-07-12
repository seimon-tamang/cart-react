import SingleProduct from "./SingleProduct";
import {useState, useEffect, useContext} from 'react';
import {Cart} from '../Context';


function CartPage(){

  const {cart, setCart} = useContext(Cart);

  
  const [total,setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price),0))
  }, [cart]);

    return (<div>
        <span style={{fontSize:30}}>My Cart</span>
        <br/>
        <span style={{fontSize:30}}>Total:{total}</span>
        <div className="productContainer">{

            cart.map((item)=>{
                return <SingleProduct prod={item} key={item.id}/>
            })
            }
        </div>
    </div>);
}

export default CartPage;