

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from "react-bootstrap";
import Button from '@mui/material/Button';
import '../css/Login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../actions/auth';
import CircularProgress from '@mui/material/CircularProgress';

export default () => {
    let navigate = useNavigate();

    const form = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        dispatch(login(email, password))
            .then(() => {
                // Redirect to the home page
                console.log("Login successful. Token:", localStorage.getItem("token"));
                navigate("/home");
                window.location.reload();
            })
            // .catch(() => {
            //     console.log("Login failed");
            //     setLoading(false);
            // });
            .catch((err) => {
                console.error("Login failed:", err);
                setLoading(false);
            });
    };

    if (isLoggedIn) {
        // Always redirect to the home page if logged in
       
            console.log("User is logged in, redirecting to /home");
        return <Navigate to="/home" />;
    }

    return (
        <>
            <div 
                className='card' 
                style={{
                    backgroundColor: '#F9E79F', // Apply yellow theme to card
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    maxWidth: '400px',
                    margin: '50px auto',
                }}
            >
                <h2 
                    className='card-header' 
                    style={{
                        backgroundColor: '#57c7cb',
                        color: 'black',
                        textAlign: 'center',
                        padding: '10px',
                        borderRadius: '5px',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                    }}
                >
                    Login
                </h2>
                <br/>
                <Form onSubmit={handleSubmit} ref={form}>
                    {/* Email */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                border: '1px solid #C9B67A',
                                borderRadius: '5px',
                                padding: '10px',
                            }}
                        />
                    </Form.Group>

                    {/* Password */}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontWeight: 'bold', marginTop: '15px' }}>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                border: '1px solid #C9B67A',
                                borderRadius: '5px',
                                padding: '10px',
                            }}
                        />
                    </Form.Group> 
                    <br/>

                    {/* Submit Button */}
                    <Button 
                        style={{
                            borderColor: "#D9C97A",
                            backgroundColor: '#D9C97A', // Slightly darker yellow
                            color: 'black',
                            fontWeight: 'bold',
                            width: '100%',
                            textTransform: 'uppercase',
                        }}
                        sx={{
                            '&:hover': {
                                backgroundColor: '#C9B67A', // Darker shade on hover
                            },
                            '&:focus': {
                                backgroundColor: '#C9B67A', // Darker shade on focus
                            },
                            '&:active': {
                                backgroundColor: '#B6A367', // Darker shade on click
                            },
                        }}  
                        variant="contained" 
                        type="submit"
                        className="Button"
                        onClick={handleSubmit}
                    >
                        Submit
                        {loading && (
                            <CircularProgress 
                                size={20} 
                                style={{ marginLeft: '10px', color: 'black' }} 
                            />
                        )}
                    </Button>
                </Form>
            </div>
        </>
    );
};
