import React from "react";
import PropTypes from "prop-types";

export const TextInput = ({ name, label, onChange, placeholder, value, error, errorMessage }) => {
    let wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " " + "has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    maxLength = "200"
                    value={value}
                    onChange={onChange}/>
                {error && <div className="alert alert-danger m-t-xs">{errorMessage}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
};