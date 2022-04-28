import React from 'react';
import './Cart.css';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// Will take in Product name and price
function Cart(props) {
    const useForceRerendering = () => {
        const [counter, setCounter] = React.useState(0);
        return () => setCounter(counter => counter + 1);
      };
      
      // add hook at beginning of a component:
      const forceRerendering = useForceRerendering();
      const navigate = useNavigate();
      // for re-rendering always when it is necessary with:
      
    function generateCartItem(product) {
        return (
            <div className="top-cart" style={{padding:10}}>

            {/****** THIS PART WILL REPEAT FOR EACH DIFFERENT PRODUCT **************/}
                <p className="p_name">{product.ProductName}</p>
                <p className="p_price">${product.ProductPrice}</p>
                <button id ={product.ProductId} className='remove_button' style={{marginLeft:50, padding:5}} onClick={(e) =>{removeProduct(e.target.id)}}> Remove </button>

            {/***********************************************************************/}
                
            </div>
        );
    }

    // const database = [
    //     {
    //         ProductId: 1,
    //         ProductName: "Highlighters",
    //         ProductPrice: 25,
    //         ProductPhotoFileName: "https://static-01.daraz.com.bd/p/bb5372d830a4647f86d9e332b32ec710.jpg"
    //     },
    //     {
    //         ProductId: 2,
    //         ProductName: "Notebooks",
    //         ProductPrice: 20,
    //         ProductPhotoFileName: "https://w7.pngwing.com/pngs/537/490/png-transparent-notebook-pen-%D0%91%D0%BB%D0%BE%D0%BA%D0%BD%D0%BE%D1%82-stationery-notebook-miscellaneous-pencil-file-folders-thumbnail.png"
    //     }
    // ];

    // Get the cart data from backend for each user...
    const [data, setData] = useState([]);

    let totalPrice = data.map(item => item.ProductPrice).reduce((a, b) => a + b, 0);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/productuser/" + localStorage.getItem('token'))
        .then((res) => res.json())
        .then((data) => {
            let cartProducts = []
            for (const [key, value] of Object.entries(data)) {
                console.log(value[0]);
                cartProducts.push(value[0])
              }
            setData(cartProducts);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    function removeProduct(productId = 0){
        fetch("http://127.0.0.1:8000/productuser/" + localStorage.getItem('token') + '/' + productId, { method: 'DELETE' })
            .then(() => {

                fetch("http://127.0.0.1:8000/productuser/" + localStorage.getItem('token'))
        .then((res) => res.json())
        .then((data) => {
            let cartProducts = []
            for (const [key, value] of Object.entries(data)) {
                console.log(value[0]);
                cartProducts.push(value[0])
              }
            setData(cartProducts);
        })

            });
    }

    return (

    <div>
        <div className="cart">
            <h2 className="cart_header">Cart Items</h2>
                {data.map(generateCartItem)}
            
            {/* <div className="total_price_section"> */}
            <p className="total_price_section">Total Price = {totalPrice}</p>
            {/* </div> */}
            <div className="bottom-cart">
                <button className='checkout_btn' style={{padding:10}} >Checkout</button>
            </div>
        </div>
        {/* <Footer /> */}
    </div>

    );
}

// function removeProduct(productId = 0){
//     fetch("http://127.0.0.1:8000/productuser/" + localStorage.getItem('token') + '/' + productId, { method: 'DELETE' })
//         .then(() => console.log('Delete successful'));
// }

export default Cart;