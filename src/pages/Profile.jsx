import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/profile.css";

function Profile() {

    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/users/profile"
            );

            setProfile(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load profile");

        }

    };

    const handleChange = (e) => {

        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });

    };

    const updateProfile = async (e) => {

        e.preventDefault();

        try {

            await axios.put(
                "http://localhost:8080/api/users/profile",
                profile
            );

            alert("Profile Updated Successfully");

        } catch (error) {

            console.log(error);
            alert("Profile Update Failed");

        }

    };

    return (

        <div className="profile-container">

            <h1 className="profile-title">
                My Profile
            </h1>

            <p className="profile-subtitle">
                View and update your personal information.
            </p>

            <div className="profile-card">

                <div className="profile-header">

                    <div className="profile-image">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                            alt="Profile"
                        />

                    </div>

                    <div className="profile-details">

                        <h2>{profile.fullName}</h2>

                        <p>{profile.email}</p>

                    </div>

                </div>

                <form
                    className="profile-form"
                    onSubmit={updateProfile}
                >

                    <div className="form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            name="fullName"
                            value={profile.fullName}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Phone</label>

                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group full-width">

                        <label>Address</label>

                        <textarea
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="button-group">

                        <button
                            className="save-btn"
                            type="submit"
                        >
                            Save Changes
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default Profile;