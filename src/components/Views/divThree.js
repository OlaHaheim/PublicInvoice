import { useState } from 'react';

import CustomSelect from '../UI/customSelect';
import ButtonSelect from '../UI/buttonSelect';
import Input from '../UI/input';
import CreateItemModal from '../modals/createitemModal';

import classes from './divThree.module.css';

const item = [];
const VAT = [{ value: '0%', label: '0%' }, { value: '15%', label: '15%' }, { value: '25%', label: '25%' }];

const DivThree = (props) => {

    const [modalActive, setModalActive] = useState(false);


    const openModalHandler = () => {
        setModalActive(true);
    };

    const closeModalHandler = () => {
        setModalActive(false);
    };

    return <div className={classes.container} >
        <div className={classes.innerContainer}>

            <div className={classes.column1}>
                <div className={classes.row1}>
                    <div className={classes.row1container}>
                        <div className={classes.product}>
                            <ButtonSelect onClick={openModalHandler} options={item} width={'100%'} height={'50px'} borderRadius={'10px'} />
                        </div>
                        <Input className={classes.quantity} type="text" placeholder='Quantity'></Input>
                        <Input className={classes.price} type="number" placeholder='Price'></Input>
                        <div className={classes.vat}>
                            <CustomSelect options={VAT} width={'100%'} height={'50px'} borderRadius={'10px'} />
                        </div>
                    </div>
                </div>

                <div className={classes.row2}>
                    <div className={classes.descriptionContainer}>
                        <textarea className={classes.description} placeholder='Description'></textarea>
                    </div>
                </div>
            </div>

            <div className={classes.column2}>
                <p className={classes.total}>EUR 1800</p>
                <div className={classes.close}><div className={classes.circle} onClick={props.onRemoveInvoice}><svg className={classes.svg} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6.58586 8.00008L0.292893 14.293C-0.0976306 14.6836 -0.0976309 15.3167 0.292893 15.7073C0.683418 16.0978 1.31658 16.0978 1.70711 15.7073L8.00008 9.41429L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L9.41429 8.00008L15.7071 1.70726C16.0976 1.31673 16.0976 0.683569 15.7071 0.293044C15.3166 -0.09748 14.6834 -0.09748 14.2929 0.293044L8.00008 6.58586L1.70711 0.292893Z" fill="#171E44" />
                </svg></div></div>
            </div>

            {modalActive && <CreateItemModal onClose={closeModalHandler} />}
        </div>
    </div>
};

export default DivThree;