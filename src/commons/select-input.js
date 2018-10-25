import React from "react";
import PropTypes from "prop-types";

export const SelectInput = ({ name, label, onChange, defaultOption, value, error, errorMessage, options }) => {
    const selectClass = "form-control";
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={selectClass}>
                    <option value="">{defaultOption}</option>
                    { options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })
                    }
                </select>
                {error && <div className="alert alert-danger m-t-xs">{errorMessage}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.bool,
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};