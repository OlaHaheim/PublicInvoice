import classes from './divFour.module.css';

const DivFour = (props) => {
  return <div className={classes.root}>
    <div className={classes.circle} onClick={props.onAddInvoice}><div className={classes.align}><svg className={classes.plussymbol} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.167 1.83464C11.167 1.1903 10.6447 0.667969 10.0003 0.667969C9.35599 0.667969 8.83366 1.1903 8.83366 1.83464V8.83453L1.83366 8.83453C1.18933 8.83453 0.666992 9.35686 0.666992 10.0012C0.666992 10.6455 1.18933 11.1679 1.83366 11.1679L8.83366 11.1679V18.168C8.83366 18.8123 9.35599 19.3346 10.0003 19.3346C10.6447 19.3346 11.167 18.8123 11.167 18.168V11.1679L18.167 11.1679C18.8113 11.1679 19.3337 10.6455 19.3337 10.0012C19.3337 9.35686 18.8113 8.83453 18.167 8.83453L11.167 8.83453V1.83464Z" fill="white" />
    </svg>
    </div>
    </div>
    <div className={classes.linecontainer}>
      <p className={classes.line}></p>
    </div>
  </div>
};

export default DivFour;