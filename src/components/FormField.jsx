import { Box, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { useState } from "react";

const FormField = ({ label, name, type = "text" }) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggelPassword = () => {
        setShowPassword(preState => !preState)
    }



    return (

        <Box sx={{
            "& > *": { display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }
        }}>
            <Typography variant="body6">{label}</Typography>
            <Field type={type === "password"
                ? showPassword
                    ? "text"
                    : "password"
                : type} name={name} className="w-full p-2 border rounded" />
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
        </Box>


    )
}


export default FormField