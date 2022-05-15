import { useState } from "react";
import React from "react";
import '../styles/Email.css';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Parse from 'parse/dist/parse.min.js';
import axios from "axios";
import AuthService from "../services/auth.service";


function SendEmail() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const currentUser =  AuthService.getCurrentUser();
    const from=currentUser.email;
    const sender=currentUser.username;
    const submitHandler = async (e) => {
        e.preventDefault();
        if (!email || !subject || !message) {
            return toast.error('Please fill email, subject and message');
        }
        try {
            setLoading(true);
            const { data } = await axios.post(`http://localhost:8080/api/email`, {
                from,
                sender,
                email,
                subject,
                message,
            });
            setLoading(false);
            toast.success(data.message);
        } catch (err) {
            setLoading(false);
            toast.error(
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
            );
        }
    };
    return (
        <div className="box">
            <ToastContainer position="bottom-center" limit={1} />
            <header className="App-header">
                <form onSubmit={submitHandler} enctype="multipart/form-data">
                    <h1>Send Email</h1>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            onChange={(e) => setSubject(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <label>
                        <button  disabled={loading} type="send" >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                        </label>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default SendEmail;