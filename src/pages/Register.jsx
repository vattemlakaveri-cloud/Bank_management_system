import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/register.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: ""
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const registerUser = async (e) => {

        e.preventDefault();


        if (formData.password !== formData.confirmPassword) {

            alert("Passwords do not match");
            return;

        }


        try {

            const response = await axios.post(
                "http://localhost:8080/auth/register",
                {
                    id: Date.now(),
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    username: formData.email,
                    password: formData.password
                }
            );


            alert(response.data);

            navigate("/login");


        } catch (error) {

            console.log(error);
            alert("Registration Failed");

        }

    };


    return (

        <div className="register-container">

            <div className="register-card">


                <h1>Create Account</h1>

                <p>Register to continue banking</p>


                <form 
                    className="register-form"
                    onSubmit={registerUser}
                >


                    <div className="form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                    </div>



                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>



                    <div className="form-group">

                        <label>Phone Number</label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>



                    <div className="form-group">

                        <label>Address</label>

                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />

                    </div>



                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>



                    <div className="form-group">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                    </div>



                    <div className="full-width">

                        <button 
                            type="submit"
                            className="register-btn"
                        >

                            Register

                        </button>

                    </div>


                </form>



                <div className="login-link">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </div>



            </div>

        </div>

    );

}


export default Register;