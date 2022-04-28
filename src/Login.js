import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import UserPage from './UserPage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Form.css';
import { API_HOST } from './constants';

function Login({ setToken }) {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    // User Login info
    // const database = [
    //   {
    //     username: "user1",
    //     password: "pass1"
    //   },
    //   {
    //     username: "user2",
    //     password: "pass2"
    //   }
    // ];

    const navigate = useNavigate();


    let database;
    let fetchRes = fetch(API_HOST + "/user");
    fetchRes.then(res =>
        res.json()).then(users => {
            console.log(users)
            database = users;
        })
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // // Find user login info
      // console.log("hash(uname.value)", hash(uname.value)['result'])
      // const userData = database.find((user) => user.UserName === hash(uname.value));
  
      // // Compare user info
      // if (userData) {
      //   if (userData.Password !== pass.value) {
      //     // Invalid password
      //     setErrorMessages({ name: "pass", message: errors.pass });
      //   } else {
      //     setIsSubmitted(true);
          // Redirect to User's home page with products list
        
        fetch(API_HOST + "/login", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'UserName': uname.value,
          'Password': pass.value,
        })
        })
        .then(res =>
        res.json()).then(userdata => {
            // token = userdata;
            if(userdata["token"] != ''){
              setToken(userdata["token"]);
              setIsSubmitted(true);
              localStorage.setItem('role', userdata["role"]);
              localStorage.setItem('name', userdata["UserName"]);
            } else {
              alert("Could not login")
            }
            
        })
        
        // }
      // } else {
      //   // Username not found
      //   setErrorMessages({ name: "uname", message: errors.uname });
      // }
      navigate(`/`);
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required  className="input"/>
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required  className="input"/>
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
          <input type="submit" className="btn_register"/>
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          {/* {isSubmitted ? history.push('/user') : renderForm} */}
          {/* Create a User component that will have a logout button */}
        </div>
      </div>
    );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;