import { useState } from 'react';

import classes from './addcustomerModal.module.css';

import Button from '../UI/button';
import Modal from '../UI/modal';
import Input from '../UI/input';

const AddCustomerModal = (props) => {

    const [radioValue, setRadioValue] = useState("person");

    const customerChangeHandler = (event) => {
        const customer = event.target.value;
        setRadioValue(customer);
    };

    let content;

    if (radioValue === "person") {
        content = <div>
            <div className={classes.persongrid}>
                <p>First Name</p>
                <p>Last Name</p>
                <Input></Input>
                <Input></Input>
                <p>Email</p>
                <p>Address</p>
                <Input></Input>
                <Input></Input>
            </div>
        </div>
    } else {
        content = <div>
            <div className={classes.companyName}>
                <p>Company Name</p>
                <Input></Input>
            </div>
            <div className={classes.companyInfo}>
                <p>Email</p>
                <p>Adress</p>
                <Input></Input>
                <Input></Input>
            </div>
        </div>;
    }


    return <Modal onClose={props.onClose}>
        <div className={classes.container}>
            <div><h1 className={classes.header}>Add Customer</h1></div>

            <div className={classes.radioContainer}>
                <label className={classes.customRadioButton}>
                    <input type="radio" id='Person' name='customer' value="person" onChange={customerChangeHandler}></input>
                    <span className={classes.checkmark}></span>
                    <p className={classes.text}>Person</p>
                </label>
                <label className={classes.customRadioButton}>
                    <input type="radio" id='Company' name='customer' value="company" onChange={customerChangeHandler}></input>
                    <span className={classes.checkmark}></span>
                    <p className={classes.text}>Company</p>
                </label>
            </div>

            {content}
            <Button className={classes.button}>Save</Button>
        </div>
    </Modal >
};

export default AddCustomerModal;