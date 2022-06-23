import classes from './createitemModal.module.css';

import Modal from '../UI/modal';
import Button from '../UI/button';
import CustomSelect from '../UI/customSelect';
import Input from '../UI/input';

const CreateItemModal = (props) => {
    return <Modal onClose={props.onClose}>
        <div className={classes.container}>
            <div className={classes.header}><h1>Create Item</h1></div>
            <div className={classes.inputgrid}>
                <p>Item No</p>
                <p>Name</p>
                <Input></Input>
                <Input></Input>
            </div>
            <h3>Defaults</h3>
            <div className={classes.inputgrid2}>
                <p>Price</p>
                <p>Unit</p>
                <p>Vat Rate</p>
                <Input></Input>
                <CustomSelect height='50px' borderRadius='10px'></CustomSelect>
                <CustomSelect height='50px' borderRadius='10px'></CustomSelect>
            </div>
            <Button className={classes.button}>Create Item</Button>
        </div>
    </Modal>
};

export default CreateItemModal;