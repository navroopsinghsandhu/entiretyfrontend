// import React from 'react';
import React, {useState} from 'react';
import './Form.css';
import { API_HOST } from './constants';

function Register() {

    // States for registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [wantMembership, setwantMembership] = useState(false);

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
    };

    // Handling the name change
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };

    // Handling the name change
    const handleUserName = (e) => {
        setUserName(e.target.value);
        setSubmitted(false);
        };

    // Handling the password change
    const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    };

    const handleMembership = (e) => {
        setwantMembership(!wantMembership);
        // setSubmitted(false);
    };
    

    // Handling the form submission
    const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '' || userName === '' || password === '') {
        setError(true);
    } else {
        setSubmitted(true);
        setError(false);
        console.log(firstName, lastName, userName, password, wantMembership);
        // try {
            fetch(API_HOST + "/user", {
              method: "POST",
              body: JSON.stringify({
                UserName: userName,
                FirstName: firstName,
                LastName: lastName,
                Password: password,
                wantMembership: wantMembership
              }),
            })
            .then((res) => res.json())
            .then((data) => {
               alert(data)
            })
        //     let resJson = res.json();
        //     if (res.status === 200) {
        //     //   setName("");
        //     //   setEmail("");
        //     //   setMessage("User created successfully");
        //     } else {
        //     //   setMessage("Some error occured");
        //     console.log("REGISTRATION ERROR");
        //     }
        //   } catch (err) {
        //     console.log(err);
        // }
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
        <h1>User {firstName} successfully registered!</h1>
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
        <h1>User Registration</h1>
        </div>

        {/* Calling to the methods */}
        {/* <div className="messages">
        {errorMessage()}
        {successMessage()}
        </div> */}

        <form>
        {/* Labels and inputs for form data */}
        <label className="label">First Name</label>
        <input onChange={handleFirstName} className="input"
            value={firstName} type="text" />

        <label className="label">Last Name</label>
        <input onChange={handleLastName} className="input"
            value={lastName} type="text" />

        <label className="label">Username</label>
        <input onChange={handleUserName} className="input"
            value={userName} type="text" />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
            value={password} type="password" />
        {/* <div className="label">
        <label>Register as a member</label>
        <input  style={{ marginLeft:10}} onChange={handleMembership} className="input"
            value={wantMembership} type="checkbox" />
        </div> */}
        <button onClick={handleSubmit} className="btn_register" type="submit">
            Submit
        </button>
        </form>
    </div>
    );
    
}

export default Register;
// http://127.0.0.1:8000/user

