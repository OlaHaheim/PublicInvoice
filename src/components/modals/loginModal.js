import { useRef, useState } from 'react';
import axios from "axios";

import Button from "../UI/button";
import Input from "../UI/input";
import Modal from "../UI/modal";

import classes from './loginModal.module.css';

const LoginModal = (props) => {

    const [emailInput, setEmailInput] = useState('');
    const [loginOrToken, setLoginOrToken] = useState(false);
    const [nonce, setNonce] = useState('');

    const tokenInput = useRef(0);
    
    const requestLoginHandler = () => {
        axios
            .post('https://api.staging.snapbooks.com/snapbooks/api/v1/auth/passwordless?client_id=invoicer', {
                email: emailInput,
            })
            .then(response => {
                console.log(response)
                setNonce(response.data.nonce)
            })
            .catch(error => console.log(error))
        setLoginOrToken(true);
    };

    const requestTokenHandler = () => {
        const token = tokenInput.current.value;
        axios
            .post('https://api.staging.snapbooks.com/snapbooks/api/v1/auth/passwordless/login?client_id=invoicer', {
                nonce: nonce,
                email: emailInput,
                otp: token,
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
        props.onClose()
    };

    let content;

    if (loginOrToken === false) {
        content = <div><div className={classes.headercontainer}>
            <p className={classes.header}>Log In</p>
        </div>
            <div className={classes.main}>
                <p className={classes.text}>Email</p>
                <Input type='text' className={classes.input} onChange={(event) => setEmailInput(event.target.value)} />
                <Button onClick={requestLoginHandler} className={classes.button}>Log In</Button>
            </div>
        </div>
    } else if (loginOrToken === true) { 
        content = <div><div className={classes.headercontainer}>
            <p className={classes.header}>Authenticate</p>
        </div>
            <div className={classes.main}>
                <p className={classes.text}>Token</p>
                <Input type='number' className={classes.input} ref={tokenInput} />
                <Button onClick={requestTokenHandler} className={classes.button}>Log In</Button>
            </div>
        </div>
    }

    return <Modal onClose={props.onClose}>
        <div className={classes.container}>
            {content}
        </div>
    </Modal>
};

export default LoginModal;