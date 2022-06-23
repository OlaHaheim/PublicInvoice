import Select from 'react-select';

import classes from './buttonSelect.module.css';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    width: '100%',
    height: '40px',
    marginTop: '1%',
    marginBottom: '1%',
    borderRadius: '5px',
    backgroundColor: state.isSelected ? state.selectProps.menuColor : '#fff',
    color: 'black',
  }),
  control: (_, { selectProps: { width, height } }) => ({
    border: '1px solid #e8e5e7',
    borderRadius: '14px',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '1%',
    backgroundColor: '#fff',
    width: width,
    height: height,
  }),
  indicatorSeparator: (provided, state) => ({
    backgroundColor: '#fff',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    color: '#171e44',
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: '2%',
    width: state.selectProps.width,
  }),
  theme: (provided, state) => ({
    ...provided, 
    color: state.isFocused ? '#f8f7f8' : '#fff',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}


const ButtonSelect = (props) => {

  console.log('inside the buttonselect');

  const customMenuList = ({ children, innerProps, }) => {
    return <div {...innerProps} className={classes.menucontainer}>
      {children}
      <div className={classes.buttoncontainer} onClick={props.onClick}>
        <div className={classes.button}>
          <div className={classes.buttoncontent}>
            <p className={classes.text}>Add Customer</p>
            <div className={classes.circle}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.50879 1.125C6.50879 0.779822 6.22897 0.5 5.88379 0.5C5.53861 0.5 5.25879 0.779822 5.25879 1.125V4.87494L1.50879 4.87494C1.16361 4.87494 0.883789 5.15476 0.883789 5.49994C0.883789 5.84512 1.16361 6.12494 1.50879 6.12494L5.25879 6.12494V9.875C5.25879 10.2202 5.53861 10.5 5.88379 10.5C6.22897 10.5 6.50879 10.2202 6.50879 9.875V6.12494L10.2588 6.12494C10.604 6.12494 10.8838 5.84512 10.8838 5.49994C10.8838 5.15476 10.604 4.87494 10.2588 4.87494L6.50879 4.87494V1.125Z" fill="#FCDA67" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  };

  return <Select
    styles={customStyles}
    options={props.options}
    width={props.width}
    height={props.height}
    components={{ MenuList: customMenuList }}
    menuColor='#f8f7f8'/>
}

export default ButtonSelect;
