import PropTypes from 'prop-types';

export const Filter = ({value, onChange}) => {
    return(
        <label
        style={{
            display:"flex",
            flexDirection:"column",
            border: "1px solid gray",
            padding: "16px",
            borderRadius: "4px",
            marginTop: "16px",
        }}>
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