import React, { useState } from "react";
import { Box, Button, Grid2 as Grid, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormField from "../../../components/FormField";
import CustomTextField from "../../../components/CustomTextField";
import InputField from "../../../components/InputBox";


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .trim()
        .min(2, "First name is too short!")
        .max(50, "First name is too long!")
        .required("First Name is required."),

    lastName: Yup.string()
        .trim()
        .min(2, "Last name is too short!")
        .max(50, "Last name is too long!")
        .required("Last Name is required."),

    email: Yup.string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email format"
        )
        .required("Email is required."),

    phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits")
        .required("Phone number is required."),
});

const LoginSchema = Yup.object().shape({
    firstName: Yup.string()
        .trim()
        .min(2, "First name is too short!")
        .max(50, "First name is too long!")
        .required("First Name is required."),

    password: Yup.string()
        .trim()
        .min(6, "Password is too short!")
        .required("Password is required."),

});


const Login = ({ isSignUp, setIsSignUp }) => {

    const style = {
        flexCol: {
            display: "flex",
            flexDirection: "column ",
            gap: "4px !important",
        }
    }
    // Function to toggle the positions
    const handleSwap = () => {
        setIsSignUp(!isSignUp);
    };
    const initialValues = {
        firstName: "",
        password: "",
    }

    return (
        <>

            <Typography variant="h6">
                Log In
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={isSignUp ? SignupSchema : LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("Form Submitted", values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, errors,
                    touched,
                    handleChange,
                    handleBlur,
                    values,
                    dirty,
                    isValid,
                    setFieldValue,
                    setFieldTouched, }) => (
                    <Form className="space-y-4 px-[70px] text-start">

                        <Box mt={2} sx={style.flexCol}>
                            <Typography variant="body9">First Name :</Typography>
                            <InputField
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.firstName && !!errors.firstName}
                                maxLength={51}
                            // disabled={isEmailVerified}
                            />
                        </Box>
                        <Box mt={2} sx={style.flexCol}>
                            <Typography variant="body9">Password :</Typography>
                            <InputField
                                name="password"
                                placeholder="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && !!errors.password}
                                maxLength={20}
                            // disabled={isEmailVerified}
                            />
                        </Box>


                        <Button
                            variant="contained"
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            {isSubmitting ? "Submitting..." : "Log In"}
                        </Button>
                        <Typography variant="body12" sx={{ marginTop: "20px", display: "block", textAlign: "center" }}>
                            Don’t have an account? <b onClick={handleSwap}> Create an Account </b>
                        </Typography>

                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Login;
