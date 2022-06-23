import { useState } from 'react';

import CustomSelect from '../UI/customSelect';
import ButtonSelect from '../UI/buttonSelect';
import AddCustomerModal from '../modals/addcustomerModal';

import classes from './divTwo.module.css';

const options = [
    { value: 'bedrift1', label: 'bedrift1' }
];
const options2 = [
    { value: 'bedrift2', label: 'bedrift2' }
];


const DivTwo = () => {

    const [modalActive, setModalActive] = useState(false);
 

    const openModalHandler = () => {
        setModalActive(true);
    };

    const closeModalHandler = () => {
        setModalActive(false);
    };

    return <div className={classes.container}>

        <p className={classes.from}>From</p>
        <p className={classes.invoiceFor}>Invoice For</p>

        <CustomSelect options={options} width={'80%'} height={'60px'} borderRadius={'15px'}/>
        <ButtonSelect onClick={openModalHandler} options={options2} width={'80%'} height={'60px'} borderRadius={'15px'}/>

        <p className={classes.avsenderAdresse}>Bjørndalen 16</p>
        <p className={classes.mottakerAdresse}>17 Great Suffolk Street</p>

        <p className={classes.avsenderPostkode}>5009 bergen</p>
        <p className={classes.mottakerPostkode}>London SE1 ONS</p>

        <p className={classes.avsenderLand}>Norway</p>
        <p className={classes.mottakerLand}>United Kingdom</p>

        {modalActive && <AddCustomerModal onClose={closeModalHandler}/>}

    </div>
};

export default DivTwo;