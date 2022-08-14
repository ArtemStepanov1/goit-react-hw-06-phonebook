import PropTypes from 'prop-types';

export const Filter = ({value, onChange}) => {
    return(
        <label>
            Find contact by name 
            <input 
            type="text" 
            value={value}
            onChange={onChange}
            ></input>
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };