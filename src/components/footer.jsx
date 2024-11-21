// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: 2,
        textAlign: "center",
        borderTop: "1px solid #ddd",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        This web app is created by <strong>Akilam Technology</strong>
      </Typography>
    </Box>
  );
};
