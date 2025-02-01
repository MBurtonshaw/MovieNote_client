import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext.js";

function Register() {
    const { actions } = useContext(UserContext);
    const [registrationUser, setRegistrationUser] = useState('');
    const [registrationPassword, setRegistrationPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleSubmit() {
        if (!registrationUser.trim() || !registrationPassword.trim() || !confirmedPassword.trim() ) {
            setError("All fields are required.");
            return;
        }

        if (registrationPassword !== confirmedPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError(""); // Clear errors before submitting
        actions.registerUser({
            username: registrationUser.trim(),
            password: registrationPassword.trim(),
            confirmPassword: confirmedPassword.trim(),  
            role: 'USER',
        });

        // Optionally, clear form fields after submission
        setRegistrationUser('');
        setRegistrationPassword('');
        setConfirmedPassword('');
        navigate('/login');
    }

    return (
        <div>
            <h1>Register</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <label htmlFor="username">Username:</label>
            <input
                id="username"
                type="text"
                value={registrationUser}
                onChange={(e) => setRegistrationUser(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                value={registrationPassword}
                onChange={(e) => setRegistrationPassword(e.target.value)}
            />

            <label htmlFor="confirm">Confirm Password:</label>
            <input
                id="confirm"
                type="password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
            />

            <button onClick={handleSubmit} disabled={!registrationUser || !registrationPassword || !confirmedPassword }>
                Register
            </button>
        </div>
    );
}

export default Register;