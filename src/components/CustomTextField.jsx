import React from "react";
import PropTypes from "prop-types";
import { TextField, FormControl, styled } from "@mui/material";

const StyledTextField = styled(TextField)(({ error }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: error ? "1px solid #EAECF0" : "1px solid #EAECF0",
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      border: error ? "1px solid #FFBABA" : "1px solid #E4E4E7",
    },
    "&.Mui-focused fieldset": {
      border: error ? "1px solid #FFBABA" : "1px solid #E4E4E7",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#98A2B3",
    opacity: 1,
  },
}));

const CustomTextField = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error = false,
  backgroundColor = "#FCFCFD",
  width = "100%",
  multiline = false,
  rows = 1,
  maxLength,
}) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ width }}>
      <StyledTextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        variant="outlined"
        error={error}
        multiline={multiline}
        rows={multiline ? rows : undefined}
        autoComplete="off"
        InputProps={{
          style: {
            height: multiline ? "auto" : "3rem",
            backgroundColor,
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "400",
            color: "#182230",
          },
        }}
        inputProps={{
          maxLength: maxLength, // Setting maxLength on input
        }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          "& .MuiInputBase-root": {
            color: "#182230",
            backgroundColor,
            borderRadius: "8px",
          },
        }}
      />
    </FormControl>
  );
};

CustomTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxLength: PropTypes.number, // New prop for max length
};

export default CustomTextField;
