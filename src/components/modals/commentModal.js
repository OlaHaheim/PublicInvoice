import { useState } from 'react';

import classes from './commentModal.module.css';

import Modal from "../UI/modal";
import Input from '../UI/input';


const CommentModal = (props) => {

    const [fileList, setFileList] = useState([]);

    const upploadFileHandler = (event) => {
        setFileList(prevList => [...prevList, { id: Math.random(), content: event.target.value}])
    };

    const removeFileHandler = (key) => {
        setFileList(prevList => prevList.filter(file => file.id !== key));
    };

    return <Modal onClose={props.onClose}>
        <div className={classes.container}>
            <div className={classes.header}><h1>Comment, PO And Attachments</h1></div>
            <div className={classes.input}>
                <Input className={classes.input1} placeholder="Extra comment"></Input>
                <Input className={classes.input2} placeholder="PO reference"></Input>
            </div>
            <div className={classes.main}>
                <h2>Attachments</h2>
                <label className={classes.button} for="file">
                    <input type='file' id="file" className={classes.filebutton} onChange={upploadFileHandler}></input>
                    Upload Attachments</label>
            </div>
            <div className={classes.listcontainer}>

                {fileList.map(file => <p className={classes.listelement} key={file.id}>{file.content}
                    <div className={classes.removefile} onClick={removeFileHandler.bind(this, file.id)}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.04318 1.0395C1.76656 0.762876 1.31807 0.762876 1.04145 1.0395C0.764829 1.31612 0.764829 1.76461 1.04145 2.04123L5.49897 6.49875L1.04145 10.9563C0.764829 11.2329 0.764829 11.6814 1.04145 11.958C1.31807 12.2346 1.76656 12.2346 2.04318 11.958L6.5007 7.50049L10.9581 11.9579C11.2347 12.2345 11.6832 12.2345 11.9599 11.9579C12.2365 11.6813 12.2365 11.2328 11.9599 10.9562L7.50244 6.49875L11.9599 2.04134C12.2365 1.76472 12.2365 1.31623 11.9599 1.0396C11.6832 0.762983 11.2347 0.762983 10.9581 1.0396L6.5007 5.49702L2.04318 1.0395Z" fill="#171E44" />
                        </svg>
                    </div>
                </p>)}

            </div>
        </div>
    </Modal>
};

export default CommentModal;