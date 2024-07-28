import React, { useState } from "react";
import AuthService from "../AuthService";
import { useNavigate } from 'react-router-dom';

function AuthForm() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        role: "trainee", // Default role
        isSignup: false,
    });

    const handleInputChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (form.isSignup) {
            AuthService.register(form.username, form.email, form.password, form.role).then(
                () => {
                    navigate('/');  // Navigate to login page after registration
                }
            ).catch(error => alert("Error registering user"));
        } else {
            AuthService.login(form.email, form.password).then(
                (response) => {
                    const user = response.user;
                    if (user.role === 'admin') {
                        navigate('/admin');
                    } else if (user.role === 'trainer') {
                        navigate('/trainer');
                    } else {
                        navigate('/welcome');
                    }
                }
            ).catch(error => alert("Error logging in user"));
        }
    };

    const toggleMode = () => {
        setForm({ ...form, isSignup: !form.isSignup });
        console.log("YES");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {form.isSignup && (
                        <>
                            <input
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleInputChange}
                                placeholder="Username"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                            <select
                                name="role"
                                value={form.role}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            >
                                <option value="admin" style={{ color: 'black' }}>Admin</option>
                                <option value="trainer" style={{ color: 'black' }}>Trainer</option>
                                <option value="trainee" style={{ color: 'black' }}>Trainee</option>
                            </select>
                        </>
                    )}
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                        style={{ color: 'black' }}
                    />
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                        style={{ color: 'black' }}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        style={{ color: 'black' }}
                    >
                        {form.isSignup ? "Sign Up" : "Sign In"}
                    </button>
                </form>
                <button
                    onClick={toggleMode}
                    className="mt-4 text-sm text-blue-500 hover:underline"
                    style={{ color: 'black' }}
                >
                    {form.isSignup ? "Switch to Sign In" : "Switch to Sign Up"}
                </button>
            </div>
        </div>
    );
}

export default AuthForm;
