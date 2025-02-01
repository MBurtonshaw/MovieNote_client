import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext.js";
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function Login() {
    const { user, actions } = useContext(UserContext);
    const [ loginUser, setLoginUser ] = useState('');
    const [ loginPassword, setLoginPassword ] = useState('');
    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setLoginUser(event.target.value);
    }

    function handlePasswordChange(event) {
        setLoginPassword(event.target.value);
    }

    function handleSubmit() {
        if (loginUser !== '' && loginUser !== undefined && loginPassword !== '' && loginPassword !== undefined) {
            actions.loginUser({
                username: loginUser, password: loginPassword
            });
            navigate('/');
        } else {
            window.alert('please enter user info');
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <label htmlFor='username'>Username:</label>
            <input name='username' id='username' type='text' value={loginUser} onChange={handleUsernameChange}></input>
            <label htmlFor='password'>Password:</label>
            <input name='password' id='password' type='password' value={loginPassword} onChange={handlePasswordChange}></input>
            <button onClick={handleSubmit}>Go</button>
        </div>
    );

}

export default Login;