import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function AdminLogin() {

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const loginAdmin = async (e) => {
        e.preventDefault();
        const { username, password } = data; 
        
        try {
            const response = await axios.post("/admin/login", {
                username,
                password,
            });

            if (response.data.error) {
                toast.error(response.data.error); 
            } else {
                setData({ username: "", password: "" });
                toast.success("Admin Login successful. Redirecting to Dashboard...");
                navigate('/admin-dashboard'); 
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to login. Please try again.");
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={loginAdmin}>
                <h2>Admin Login</h2>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter Admin Username"
                        value={data.username}
                        onChange={(e) => setData({ ...data, username: e.target.value })}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Admin Password"
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}