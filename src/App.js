import { useState } from 'react';

import classes from './App.module.css';
import { LoginContext } from './context/loginContext';

import DivOne from './components/Views/divOne';
import DivTwo from './components/Views/divTwo';
import DivThree from './components/Views/divThree';
import DivFour from './components/Views/divFour';
import DivFive from './components/Views/divFive';
import Button from './components/UI/button';

import LoginModal from './components/modals/loginModal';


const App = () => {

  const [loginModalActive, setLoginModalActive] = useState(false);
  const [invoiceList, setInvoiceList] = useState([Math.random()]);

  const loginHandler = () => {
    setLoginModalActive(true);
  };

  const logoutHandler = () => {
    setLoginModalActive(false);
  };

  const removeInvoiceHandler = (key) => {
    setInvoiceList(prevList => prevList.filter(item => item !== key))
  };

  const addinputHandler = () => {
    setInvoiceList(prevList => [...prevList, Math.random()])
  };



  return (
    <div className={classes.root}>
      <LoginContext.Provider>
        <div className={classes.container}>
          <header className={classes.heading}>
            <p><svg width="256" height="30" viewBox="0 0 156 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.83602 23.1621C12.1258 23.1621 15.5862 20.2473 15.5862 16.4428C15.5862 11.4723 11.5824 10.3064 8.72257 9.84616C6.83507 9.53935 5.57673 9.17116 5.57673 8.00526C5.57673 7.14616 6.26309 6.71662 7.52143 6.71662C9.32314 6.71662 10.3527 7.54503 10.8961 8.55753L15.3003 6.19503C13.9847 3.12685 11.1249 1.50071 7.75022 1.50071C3.46043 1.50071 0.285986 4.41548 0.285986 8.22003C0.285986 13.1598 4.51858 14.3564 7.40704 14.8166C9.15155 15.0928 10.2955 15.2768 10.2955 16.5041C10.2955 17.4859 9.23735 17.9462 7.83602 17.9462C6.03431 17.9462 4.94756 17.3632 4.40418 16.1053L0 18.4678C1.31554 21.5359 4.1754 23.1621 7.83602 23.1621Z" fill="#171E44" />
              <path d="M25.8565 12.2393C27.744 12.2393 28.459 13.8655 28.459 15.7984V22.6712H33.6067V15.1234C33.6067 10.6132 31.1472 6.87003 25.8565 6.87003C20.5657 6.87003 18.1063 10.6132 18.1063 15.1234V22.6712H23.254V15.7984C23.254 13.8655 23.969 12.2393 25.8565 12.2393Z" fill="#171E44" />
              <path d="M42.8899 23.1314C44.5486 23.1314 45.8355 22.5484 46.7507 21.5359V22.6712H51.6124V14.97C51.6124 10.2757 48.3236 6.83935 43.7478 6.83935C39.2864 6.83935 35.8832 10.5212 35.8832 14.97C35.8832 19.4496 38.7145 23.1314 42.8899 23.1314ZM43.7478 17.9462C42.1177 17.9462 41.0309 16.5962 41.0309 15.0007C41.0309 13.3746 42.1177 12.0246 43.7478 12.0246C45.3779 12.0246 46.4647 13.3746 46.4647 15.0007C46.4647 16.5962 45.3779 17.9462 43.7478 17.9462Z" fill="#171E44" />
              <path d="M59.6167 29.728V22.2723C60.5032 22.7939 61.5614 23.1314 62.6195 23.1314C67.1667 23.1314 70.1982 19.8791 70.1982 14.97C70.1982 10.5212 66.7949 6.87003 62.3336 6.87003C57.7578 6.87003 54.4689 10.2757 54.4689 14.97V29.728H59.6167ZM62.3336 17.9462C60.7034 17.9462 59.6167 16.5962 59.6167 15.0007C59.6167 13.3746 60.7034 12.0553 62.3336 12.0553C63.9637 12.0553 65.0504 13.3746 65.0504 15.0007C65.0504 16.5962 63.9637 17.9462 62.3336 17.9462Z" fill="#171E44" />
              <path d="M80.3473 23.1314C84.8087 23.1314 88.2119 19.4803 88.2119 15.0314C88.2119 10.1223 85.1805 6.87003 80.6333 6.87003C79.5752 6.87003 78.517 7.20753 77.6304 7.72912V0.273438H72.4827V15.0314C72.4827 19.7257 75.7715 23.1314 80.3473 23.1314ZM80.3473 17.9462C78.7172 17.9462 77.6304 16.6268 77.6304 15.0007C77.6304 13.4053 78.7172 12.0553 80.3473 12.0553C81.9774 12.0553 83.0642 13.4053 83.0642 15.0007C83.0642 16.6268 81.9774 17.9462 80.3473 17.9462Z" fill="#171E44" />
              <path d="M97.7891 23.1314C102.25 23.1314 105.654 19.4496 105.654 14.97C105.654 10.5212 102.25 6.83935 97.7891 6.83935C93.3277 6.83935 89.9245 10.5212 89.9245 14.97C89.9245 19.4496 93.3277 23.1314 97.7891 23.1314ZM97.7891 17.9462C96.159 17.9462 95.0722 16.5962 95.0722 15.0007C95.0722 13.3746 96.159 12.0246 97.7891 12.0246C99.4192 12.0246 100.506 13.3746 100.506 15.0007C100.506 16.5962 99.4192 17.9462 97.7891 17.9462Z" fill="#171E44" />
              <path d="M115.244 23.1314C119.706 23.1314 123.109 19.4496 123.109 14.97C123.109 10.5212 119.706 6.83935 115.244 6.83935C110.783 6.83935 107.38 10.5212 107.38 14.97C107.38 19.4496 110.783 23.1314 115.244 23.1314ZM115.244 17.9462C113.614 17.9462 112.527 16.5962 112.527 15.0007C112.527 13.3746 113.614 12.0246 115.244 12.0246C116.874 12.0246 117.961 13.3746 117.961 15.0007C117.961 16.5962 116.874 17.9462 115.244 17.9462Z" fill="#171E44" />
              <path d="M131.127 22.6712V16.9337H132.156C132.242 17.1484 132.385 17.3939 132.528 17.6087L135.96 22.6712H141.994L136.503 14.9393L142.023 7.33026H135.931L132.528 12.2393C132.356 12.4541 132.242 12.6996 132.128 12.945H131.127V0.273438H125.979V22.6712H131.127Z" fill="#171E44" />
              <path d="M149.565 23.1621C153.054 23.1621 156 21.0757 156 17.8541C156 12.0859 148.45 13.8348 148.45 11.9325C148.45 11.4723 148.85 11.1348 149.594 11.1348C150.566 11.1348 151.539 11.6871 151.853 12.6075L155.571 10.3371C154.742 8.61889 152.883 6.83935 149.48 6.83935C145.59 6.83935 143.302 9.17116 143.302 12.0553C143.302 18.0075 150.852 16.1053 150.852 17.9768C150.852 18.4678 150.366 18.8666 149.308 18.8666C148.021 18.8666 147.249 18.3757 146.734 17.3939L143.016 19.6337C144.246 21.9655 146.334 23.1621 149.565 23.1621Z" fill="#171E44" />
            </svg>
            </p>
          </header>
          <div className={classes.wrapper}>
            <p className={classes.invoice}>Invoice</p>
            <div className={classes.buttoncontainer}>
              <Button className={classes.button} onClick={loginHandler}>Log In</Button>
            </div>
          </div>
        </div>
        <div className={classes.invoicecontainer}>
          <div className={classes.invoiceInformation}>
            <DivOne />
            <DivTwo />
          </div>
        </div>
        <div className={classes.inputInfo}>
          <p className={classes.item}>Item</p>
          <p className={classes.quantity}>Quantity</p>
          <p className={classes.price}>Price</p>
          <p className={classes.vat}>VAT</p>
          <p className={classes.total}>Total</p>
        </div>
        <div classname={classes.instances}>
          {invoiceList.map(item => <DivThree key={item} onRemoveInvoice={removeInvoiceHandler.bind(this, item)} />)}
        </div>
        <div>
          <DivFour onAddInvoice={addinputHandler} />
        </div>
        <div>
          <DivFive />
        </div>
        {loginModalActive && <LoginModal onClose={logoutHandler} />}
      </LoginContext.Provider>
    </div>
  )
}

export default App;

