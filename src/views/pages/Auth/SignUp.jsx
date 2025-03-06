import React, { useState } from "react";
import { Box, Button, FormControl, Grid2 as Grid, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormField from "../../../components/FormField";
import CustomTextField from "../../../components/CustomTextField";
import InputField from "../../../components/InputBox";
import parsePhoneNumberFromString from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";




const style = {
    flexCol: {
        display: "flex",
        flexDirection: "column ",
        gap: "4px !important",
    }
}



const SignUp = ({ isSignUp, setIsSignUp, handleSwap }) => {
    const [selectedCountry, setSelectedCountry] = useState("US");

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

        mobileNumber: Yup.string()
            .required(
                "A valid account phone number is required, including the country code."
            )
            .test(
                "is-valid-phone",
                "A valid account phone number is required, including the country code.",
                function (value) {
                    if (typeof value !== "string") return false;
                    const phoneNumber = parsePhoneNumberFromString(
                        value,
                        selectedCountry
                    );
                    return phoneNumber ? phoneNumber.isValid() : false;
                }
            )
            .max(
                20,
                "A valid account phone number is required, including the country code."
            ),
    });
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        country: "IN"
    }


    return (
        <>

            <Typography variant="h6">
                {isSignUp ? "SignUp" : "Log In"}
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
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
                        <Box sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
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
                                <Typography variant="body9">Last Name :</Typography>
                                <InputField
                                    name="lastName"
                                    placeholder="Last Name"
                                    type="text"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.lastName && !!errors.lastName}
                                    maxLength={51}
                                // disabled={isEmailVerified}
                                />
                            </Box>

                        </Box>
                        <Box mt={2} sx={style.flexCol}>
                            <Typography variant="body9">Email :</Typography>

                            <InputField
                                name="email"
                                placeholder="example@gmail.com"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && !!errors.email}
                                maxLength={100}
                            // disabled={isEmailVerified}
                            />
                        </Box>

                        <Box mb={2} sx={style.flexCol}>
                            <Typography variant="body9">Phone No. :</Typography>
                            <FormControl
                                name="mobileNumber"
                                fullWidth
                                margin="normal"
                                error={touched.mobileNumber && !!errors.mobileNumber}
                                sx={{ marginTop: "0px", marginBottom: "0px" }}
                            >
                                <PhoneInput
                                    onBlur={(e) => {
                                        handleBlur(e);
                                        setFieldTouched("mobileNumber", true);
                                    }}
                                    inputProps={{ maxLength: 20 }}
                                    value={values.mobileNumber}
                                    variant="outlined"
                                    placeholder="Enter phone number"
                                    onChange={(value, countryData) => {
                                        const formattedPhone = value.startsWith("+")
                                            ? value
                                            : `+${value}`;
                                        console.log("Koca: formattedPhone ", formattedPhone);
                                        setFieldValue("mobileNumber", formattedPhone);
                                        setSelectedCountry(
                                            countryData.countryCode.toUpperCase()
                                        );
                                    }}
                                    defaultCountry={values.country}
                                    country={values.country.toLowerCase()}
                                    inputStyle={{
                                        width: "100%",
                                        height: "45px",
                                        marginTop: "0px",
                                        fontWeight: "normal",
                                        border: "1px solid #e7e7e7",
                                    }}
                                />
                                {console.log("values.country", values.country)}
                            </FormControl>
                            {touched.mobileNumber && errors.mobileNumber && (
                                <Typography color="#DF3939" variant="body10">
                                    {errors.mobileNumber}
                                </Typography>
                            )}
                        </Box>

                        <Button
                            variant="contained"
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            {isSubmitting ? "Submitting..." : "Sign Up"}
                        </Button>
                        <Typography variant="body12" sx={{ marginTop: "20px", display: "block", textAlign: "center" }}>

                            Already have an account? <b onClick={handleSwap}> Log In </b>
                        </Typography>
                    </Form>
                )}
            </Formik>




        </>
    );
};

export default SignUp;
