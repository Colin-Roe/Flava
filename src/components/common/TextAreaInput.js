import React, { Component, PropTypes } from "react";

const TextAreaInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  cols,
  rows,
  error
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <textarea
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          cols={cols}
          rows={rows}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  error: PropTypes.string
};

export default TextAreaInput;
