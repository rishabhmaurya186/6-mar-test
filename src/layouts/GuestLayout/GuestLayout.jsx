import React, { useState } from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import SignUp from "../../views/pages/Auth/SignUp";
import Login from "../../views/pages/Auth/Login";

const index = ({ children }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    // Function to toggle the positions
    const handleSwap = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <Box sx={{ width: "80vw" }}>
            <Grid container  >
                <Grid
                    sx={{
                        background: "#fff",
                        color: "black",
                        minHeight: "80vh",
                        maxHeight: "80vh",
                        overflowY: "scroll",
                        "::-webkit-scrollbar": {
                            display: "none", // For WebKit browsers (Chrome, Safari)
                        },
                        transition: "transform 0.5s ease", // Add a transition for the transform property
                        transform: isSignUp ? "translateX(100%)" : "translateX(0)", // Change position on swap
                    }}
                    size={{ xs: 12, md: 6 }}
                >
                    {isSignUp ? <SignUp isSignUp={isSignUp} setIsSignUp={setIsSignUp} handleSwap={handleSwap} /> : <Login isSignUp={isSignUp} setIsSignUp={setIsSignUp} handleSwap={handleSwap} />}

                </Grid>

                <Grid
                    sx={{
                        width: "100%", // Ensures it takes full width
                        height: "100%", // Ensures it takes full height of the parent
                        minHeight: "80vh",
                        transition: "transform 0.5s ease",
                        transform: isSignUp ? "translateX(-100%)" : "translateX(0)",
                        padding: "10px",

                        // Background image settings
                        backgroundImage: `url("/images/LogIn.jpg")`,
                        backgroundSize: "cover", // Ensures the image covers the whole area
                        backgroundPosition: "center", // Centers the image
                        backgroundRepeat: "no-repeat", // Prevents tiling

                        display: "flex",
                        alignItems: "end",
                        justifyContent: "center",
                    }}
                    size={{ xs: 12, md: 6 }}
                >
                </Grid>

            </Grid>
        </Box>
    );
};

export default index;
