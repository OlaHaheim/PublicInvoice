import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    width: '100%',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: state.isSelected ? state.selectProps.menuColor : '#fff',
    color: 'black',
  }),
  control: (_, { selectProps: { width, height, borderRadius } }) => ({
    border: '1px solid #e8e5e7',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '5%',
    backgroundColor: '#fff',
    borderRadius: borderRadius,
    width: width,
    height: height,
  }),
  indicatorSeparator: (provided, state) => ({
    backgroundColor: '#fff',
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: '2%',
    width: state.selectProps.width,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const CustomSelect = (props) => {
  return <Select
      styles={customStyles}
      options={props.options}
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
      menuColor='#f8f7f8'
    />
}

export default CustomSelect;