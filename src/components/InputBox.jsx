import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  TextField,
  InputAdornment,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { styled } from "@mui/system";
import { FiSearch } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { ErrorMessage } from "formik";

const InputContainer = styled(Box)(({ bgColor }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: bgColor || "white",
  borderRadius: "8px",
  height: "100%",
}));

const StyledInput = styled(TextField)(({ error, placeholderColor }) => ({
  "& .MuiInputBase-input": {
    fontFamily: "Outfit, sans-serif",
    fontSize: "15px",
    color: "#00000099",
    fontWeight: 400,
    padding: "0px 12px",
    height: "52px",

    "&::placeholder": {
      color: placeholderColor || "#333",
    },
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${error ? "#FFBABA" : "#E4E4E7"}`,
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      border: `1px solid ${error ? "#FFBABA" : "#E4E4E7"}`, // Red border if error, else light gray
      borderRadius: "8px",
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${error ? "#FFBABA" : "#E4E4E7"}`, // Red border if error, else light gray
      borderRadius: "8px",
    },
  },
  flex: 1,
}));

const InputField = ({
  type,
  name,
  placeholder,
  placeholderColor,
  label,
  color,
  backgroundColor,
  borderRadius,
  width,
  height,
  border,
  onChange,
  onBlur,
  maxLength,
  value,
  onPointerLeave,
  inputProps,
  acceptedFile,
  disabled,
  restrictCopyPaste,
  accept,
  error = false, // Error state
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fileName, setFileName] = useState("");
  const theme = useTheme();
  const fileInputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
    onChange(event);
  };

  const handleChange = (event) => {
    if (type === "file") {
      handleFileChange(event);
    } else {
      const trimmedValue = event.target.value.trim();
      onChange({ ...event, target: { ...event.target, value: trimmedValue } });
    }
  };
  const handleClick = () => {
    if (type === "file" && fileInputRef.current) {
      fileInputRef.current.click(); // Open the file input dialog
    }
  };

  return (
    <>
      <InputContainer bgColor={backgroundColor} onClick={handleClick}>
        {type === "file" && (
          <input
            type="file"
            hidden
            name={name}
            onChange={handleChange}
            onBlur={onBlur}
            ref={fileInputRef}
            accept={accept}
          />
        )}
        <StyledInput
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type === "file"
                ? "text"
                : type
          }
          placeholder={placeholder}
          name={name}
          sx={{
            "& .MuiSvgIcon-root": {},
          }}
          onPointerLeave={onPointerLeave}
          value={type === "file" ? "" : value}
          onChange={type !== "file" ? onChange : null}
          onBlur={onBlur}
          inputProps={{
            maxLength: maxLength,
            ...inputProps,
            readOnly: type === "file",
            ...(restrictCopyPaste
              ? {
                onCopy: (e) => e.preventDefault(),
                onPaste: (e) => e.preventDefault(),
              }
              : {}),
          }}
          InputProps={{
            endAdornment:
              type === "password" ? (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? (
                      <FaRegEye style={{ fontSize: "26px", color: "#98A2B3" }} />
                    ) : (
                      <FaRegEyeSlash
                        style={{ fontSize: "26px", color: "#98A2B3" }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ) : null,
            startAdornment:
              type === "file" ? (
                <InputAdornment position="start">
                  <div
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AddPhotoAlternateIcon
                      sx={{ fontSize: "24px", color: theme.palette.neutral[400] }}
                    />
                    <Typography
                      variant="tableCell"
                      color={theme.palette.neutral[400]}
                      style={{
                        maxWidth: "200px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "inline-block",
                        marginLeft: "8px",
                      }}
                    >
                      {fileName || "Choose file"}
                    </Typography>
                  </div>
                </InputAdornment>
              ) : type === "search" ? (
                <InputAdornment position="start">
                  <FiSearch style={{ fontSize: "24px", color: "#999" }} />
                </InputAdornment>
              ) : null,
          }}
          error={error}
          placeholderColor={placeholderColor}
          style={{
            cursor: type === "file" ? "pointer" : "default",
            color: color,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            border: "none",
            outline: "none",
            width: width || "100%",
            height: height,
            boxSizing: "border-box",
            fontSize: "14px",
            fontWeight: "300",
            fontFamily: "Outfit",
          }}
          disabled={disabled}
        />
      </InputContainer>
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  onPointerLeave: PropTypes.func,
  inputProps: PropTypes.object,
  acceptedFile: PropTypes.string,
  restrictCopyPaste: PropTypes.bool,
  accept: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholderColor: PropTypes.string,
};

export default InputField;
