import React ,{useState, useEffect} from 'react';
import './ProductsPage.css';
import Footer from './Footer';
import Product from './Product';
import { API_HOST } from './constants';

function ProductsPage() {

    function createProduct(product) {
        return (
          <Product
            key={product.ProductId}
            ProductId={product.ProductId}
            ProductName={product.ProductName}
            ProductPrice={product.ProductPrice}
            ProductPhotoFileName={require('./product_images/general_product_img.jpg')}
            removeProduct={removeProduct}
          />
        );
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_HOST + "/products")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            console.log("data", data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    function removeProduct(productId = 0){
        console.log("id", productId)
        fetch(API_HOST + "/products/" + productId, { method: 'DELETE' })
            .then(() => {
                fetch(API_HOST + "/products")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    console.log("data", data)
                })
                .catch((err) => {
                    console.log(err);
                });

            });
    }

    return (

    <div>
        {data.map(createProduct)}
        <Footer /> 
        
    </div>

    );
}

export default ProductsPage;





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