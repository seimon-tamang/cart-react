import { faker } from '@faker-js/faker';
import {useContext, useState} from 'react';
import SingleProduct from './SingleProduct';
import './styles.css'
import { Cart } from '../Context.js';


const Home = ()=>{

    faker.seed(69);

    const{cart,setCart} = useContext(Cart);
    console.log(useContext(Cart))

    const productsArray = [...Array(20)].map(()=>({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.avatar()
    }));



    const [products] = useState(productsArray);
    
    return (
        <div className='productContainer'>
            {
                products.map(prod=>{
                   return <SingleProduct key={prod.id} prod={prod}   />
                })
            }
        </div>
    )

    
};

export default Home;