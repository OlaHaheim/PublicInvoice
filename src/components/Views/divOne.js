import { useState } from 'react';
import classes from './divOne.module.css';

import CommentModal from '../modals/commentModal';
import CreateItemModal from '../modals/createitemModal';
import AddCustomerModal from '../modals/addcustomerModal';

import DatePicker from '../UI/datePicker';

const DivOne = () => {
    const [modalActive, setModalActive] = useState(false);

    return <div className={classes.container}>
        <div className={classes.innercontainer}>

            <div className={classes.header}>
                <p className={classes.id}>ID</p>
                <p className={classes.idnumber}>249865</p>
            </div>

            <p className={classes.line}></p>

            <div className={classes.gridcontainer}>

                <div className={classes.grid1}>
                    <p className={classes.issued}>Issued</p>
                    <div className={classes.datepicker}><DatePicker /></div>
                </div>
                <div className={classes.grid2}>
                    <p className={classes.duedate}>Due Date</p>
                    <div className={classes.datepicker}><DatePicker /></div>
                </div>

            </div>

            <div className={classes.footer}>
                <p className={classes.comment}>Comment, PO And Attachments</p>
                <div className={classes.footerpencil} >
                    <svg onClick={() => { setModalActive(true) }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2312 1.10052C14.8732 0.742536 14.2928 0.742536 13.9348 1.10052L1.10149 13.9338C0.929585 14.1058 0.833008 14.3389 0.833008 14.582V18.2487C0.833008 18.755 1.24341 19.1654 1.74967 19.1654H5.41634C5.65946 19.1654 5.89261 19.0688 6.06452 18.8969L18.8979 6.06355C19.2558 5.70556 19.2558 5.12516 18.8979 4.76718L15.2312 1.10052ZM15.4997 6.869L13.1294 4.4987L14.583 3.04506L16.9533 5.41536L15.4997 6.869ZM11.833 5.79506L14.2033 8.16536L6.33301 16.0357L3.9627 13.6654L11.833 5.79506ZM2.66634 14.9617L5.03664 17.332H2.66634V14.9617Z" fill="#5D627C" />
                        <path d="M10.9163 17.332C10.4101 17.332 9.99967 17.7424 9.99967 18.2487C9.99967 18.755 10.4101 19.1654 10.9163 19.1654H18.2497C18.7559 19.1654 19.1663 18.755 19.1663 18.2487C19.1663 17.7424 18.7559 17.332 18.2497 17.332H10.9163Z" fill="#5D627C" />
                    </svg>
                </div>
            </div>
            {modalActive && <CommentModal onClose={() => setModalActive(false)} />}
        </div>
    </div>
};

export default DivOne;