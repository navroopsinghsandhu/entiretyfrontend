// import React from 'react';
import React, {useState} from 'react';
import './Form.css';
// import axios from 'axios';
import { API_HOST } from './constants';

function AddProductsPage() {

    // States for registration
    const [ProductName, setProductName] = useState('');
    const [ProductPrice, setProductPrice] = useState('');
    const [ProductPhotoFileName, setProductPhotoFileName] = useState('');
    // const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleProductName = (e) => {
    setProductName(e.target.value);
    setSubmitted(false);
    };

    // Handling the name change
    const handleProductPrice = (e) => {
        setProductPrice(e.target.value);
        setSubmitted(false);
    };

    // Handling the name change
    const handleProductPhotoFileName = (e) => {
        setProductPhotoFileName(e.target.value);
        setSubmitted(false);
    };
    // const handleProductPhotoFileName = (e) => {
    //     const image = e.target.files[0];
    
    //     if (image.size < 1000000) {
    //         setProductPhotoFileName(image);

    //         setSubmitted(false);
    //     }
    //     else {
    //       window.alert("Image files must be less than 1 MB.")
    //     }
        
    //   }

    // Handling the form submission
    const handleSubmit = (e) => {
    e.preventDefault();
    if (ProductName === '' || ProductPrice === '') {
        setError(true);
    } else {
        setSubmitted(true);
        setError(false);
        console.log(ProductName, ProductPrice, ProductPhotoFileName);
        // try {
            fetch(API_HOST + "/products", {
              method: "POST",
              body: JSON.stringify({
                ProductPhotoFileName: "sample.jpg",
                ProductName: ProductName,
                ProductPrice: ProductPrice
              }),
            })
            .then((res) => res.json())
            .then((data) => {
               alert(data)
            })
    }
    };

    // Showing success message
    const successMessage = () => {
    return (
        <div
        className="success"
        style={{
            display: submitted ? '' : 'none',
        }}>
        <h1>Product {ProductName} has been added!</h1>
        </div>
    );
    };

    // Showing error message if error is true
    const errorMessage = () => {
    return (
        <div
        className="error"
        style={{
            display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
        </div>
    );
    };

    return (
    <div className="form">
        <div>
        <h1>Adding Products</h1>
        </div>

        {/* Calling to the methods */}
        {/* <div className="messages">
        {errorMessage()}
        {successMessage()}
        </div> */}

        <form>
            {/* Labels and inputs for form data */}
            <label className="label">Product Name</label>
            <input onChange={handleProductName} className="input"
                value={ProductName} type="text" />

            <label className="label">Product Price</label>
            <input onChange={handleProductPrice} className="input"
                value={ProductPrice} type="text" />

            {/* <label className="label">Upload Product Photo</label>
            <input onChange={handleProductPhotoFileName} className="input"
                value={ProductPhotoFileName} type="file" /> */}

            <button onClick={handleSubmit} className="btn_register" type="submit">
                Add
            </button>
        </form>
    </div>
    );
    
}

export default AddProductsPage;
// http://127.0.0.1:8000/user

