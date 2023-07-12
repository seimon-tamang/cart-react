import {Cart} from '../Context';
import {useContext} from 'react';

function SingleProduct({prod}){

    const {cart,setCart} = useContext(Cart);
    
    return (<div className="product"> 
        <img src={prod.image} alt={prod.name}></img>
        <div className = "productDesc">
            <span style={{fontWeight:700}}>{prod.name}</span>
            <span> 💲{prod.price.substring(0,3)}</span>
        </div>
        {
        cart.includes(prod)?(
                <button onClick={()=>{
                    setCart(cart.filter((c)=>{
                        return c.id!==prod.id;
                    }));
                }}>Remove from Cart</button>
                
                
                ):(
            <button className="add" onClick={()=>{
                setCart([...cart,prod]);
            }}>Add to Cart</button>
        )
        }
        

        
    </div>);
    
}

export default SingleProduct;