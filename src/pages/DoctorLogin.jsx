// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";

function DoctorLogin() {
  return (
    <Container>
      <Box sx={{ padding: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Doctor Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default DoctorLogin;
