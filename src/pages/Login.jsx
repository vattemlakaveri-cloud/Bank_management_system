import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const loginUser = async (e) => {

        e.preventDefault();


        try {

            const response = await axios.post(
                "http://localhost:8080/auth/login",
                {
                    username: formData.email,
                    password: formData.password
                }
            );


            if (response.data === "Login Successful") {

                alert("Login Successful");

                localStorage.setItem(
                    "username",
                    formData.email
                );

                navigate("/dashboard");

            } 
            else {

                alert(response.data);

            }


        } catch (error) {

            console.log(error);

            alert("Login Failed");

        }

    };


    return (

        <div className="login-container">


            <div className="login-card">


                <h1>
                    Bank Management System
                </h1>


                <p>
                    Login to your account
                </p>



                <form 
                    className="login-form"
                    onSubmit={loginUser}
                >


                    <div className="form-group">

                        <label>
                            Email
                        </label>


                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>



                    <div className="form-group">

                        <label>
                            Password
                        </label>


                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>



                    <button 
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>



                </form>



                <div className="register-link">

                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>

                </div>



            </div>


        </div>

    );

}


export default Login;