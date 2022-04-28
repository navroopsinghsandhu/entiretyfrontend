import React from 'react';
import { useState } from 'react';
import { API_HOST } from './constants';

function Product(props) {
    const [addedFlag, setaddedFlag] = useState(false)
    function addToCart(){
        setaddedFlag(true)
        fetch(API_HOST + "/productuser", {
              method: "POST",
              body: JSON.stringify({
                ProductId: props.ProductId,
                UserId: localStorage.getItem('token')  // Gets user id from local storage token
              }),
            });
    }

    if(localStorage.getItem('token') != null){
        fetch(API_HOST + "/productusercheck/" + localStorage.getItem('token') + "/" + props.ProductId)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.isAdded == "True")
            setTimeout(()=>{
                if(data.isAdded == "True"){
                    setaddedFlag(true)
                }
            }, 100)
        
        })
    }


    return (

    <div>
        <div className="product">
            <div className="top">
                <img className="circle-img" src={props.ProductPhotoFileName} alt="product_img" />
                <h2 className="name">{props.ProductName}</h2>
            </div>
            <div className="bottom">
                <p className="info">Product Price ${props.ProductPrice}</p>
                {/* <p className="info">{props.key}</p>; */}

                { localStorage.getItem("role") == 'customer'  || localStorage.getItem("role") == 'member' ? <button className="add_to_cart_btn" style={{padding:10}} onClick={addedFlag ? null :addToCart}>{addedFlag ? "Added" : "Add to Cart"}</button> : ""}
                { localStorage.getItem("role") == 'manager' ? <button id ={props.ProductId} className='remove_button' style={{marginLeft:10, padding:5}} onClick={(e) =>{props.removeProduct(e.target.id)}}> Remove </button> : ""}
            </div>
        </div>
    </div>

    );
}


function displayMessage(){
    alert("Product already added to the cart")
}
export default Product;