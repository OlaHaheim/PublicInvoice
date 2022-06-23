import { Fragment } from 'react';

import classes from './divFive.module.css';
import Button from '../UI/button';

const DivFive = () => {
    return <Fragment>
        <div className={classes.root}>
            <div className={classes.container}>
                <p className={classes.text}>Subtotal</p>
                <p className={classes.text}>EUR 1845</p>
                <p className={classes.text}>VAT (25%)</p>
                <p className={classes.text}>EUR 246</p>
                <p className={classes.text}>VAT (15%)</p>
                <p className={classes.text}>EUR 246</p>
                <p className={classes.text}>Amount Due</p>
                <p className={classes.text}>EUR 2045</p>
            </div>
        </div>
        <div className={classes.buttoncontainer}>
            <Button className={classes.button}>Preview And Send Invoice</Button>
        </div>
    </Fragment>
};

export default DivFive;