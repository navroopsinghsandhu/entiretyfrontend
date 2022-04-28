import logo from './product_images/startup_logo.jpeg';
import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Nav({token, setToken}) {
    const [ isLoggedIn, setIsLoggedIn] = useState(true)
    const [ role, setRole] = useState("customer")
    let logInFlag = false;
    if(typeof(token)  == "string" && token != "false") {
        logInFlag = true
    }

    useEffect(() => {
        setIsLoggedIn(logInFlag)
        setRole(localStorage.getItem("role"))
    });
 
    const handleClick = () => {
        setIsLoggedIn(false)
        setToken(false)
        localStorage.clear();
        navigate(`/`);
    }
    const navigate = useNavigate();

    function resetUnderline(){
        var elements = document.getElementsByClassName("underlined");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.textDecoration = 'none';
        }       
    }
    return (

    <div>
        <nav className ="navbar background">
            <ul className="nav-list">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                { !isLoggedIn ? <Link to="/login" >
                    <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline" }}>Login</li>
                </Link> : <li><img className="circle-img" src={require('./product_images/human.png')} /><h1 style={{color: "black"}}>{ localStorage.getItem('name')}</h1></li>}
                <Link to="/">
                    <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Home</li>
                </Link>
                { !isLoggedIn  ? <Link to="/register" >
                    <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Register</li> </Link>: '' }
                <Link to="/products" >
                    <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Products</li>
                </Link>

                 {isLoggedIn && role == 'manager' ? <Link to="/addproducts">
                    <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Add Products</li>  </Link>: ''}
                
                {role == 'customer' || role == 'member'? <Link to="/cart" >
                    <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Cart</li></Link> : ''}
                {isLoggedIn && role == 'member'? <Link to="/memberoffers" >
                    <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Member Offers</li>  </Link>: ''}
                { !isLoggedIn ? "": <li onClick={handleClick} >Logout</li> }
            </ul>

            <div className="rightNav">
                <input type="text" placeholder="Search for products..."name="search" id="search"/>
                <button className="btn btn-sm" type="submit"><i className="fa fa-search"></i></button>
                {/* <button className="btn btn-sm">Search</button> */}
            </div>
        </nav>
    </div>

    );
}

export default Nav;