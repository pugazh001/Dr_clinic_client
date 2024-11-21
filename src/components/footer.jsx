// Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

const footer = () => (
  <Box
    sx={{
      width: "100%",
      backgroundColor: "#0d8279",
      padding: 2,
      textAlign: "center",
    }}
  >
    <Typography variant="body" color="#fff">
      © 2024 Dr Clinic Doom. All Rights Reserved.
    </Typography>
  </Box>
);

export default footer;
