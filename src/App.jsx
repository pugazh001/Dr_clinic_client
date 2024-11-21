import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import drlogo from "/drcliniclogo.png";
import  Footer  from "./components/footer";
function App() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", credentials);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh", // Ensures the parent container spans full viewport height
          display: "flex",
          justifyContent: "center", // Horizontal centering
          alignItems: "center", // Vertical centering
          backgroundColor: "#f5f5f5", // Subtle background color
          padding: 2, // Padding for small screens
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3, // Subtle shadow for depth
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                marginBottom: 2,
              }}
            >
              <img
                src={drlogo}
                alt="Dr Clinic Logo"
                style={{ width: "100%" }}
              />
            </Box>
            <Typography component="h1" variant="h5" gutterBottom>
              Dr Clinic Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={credentials.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#007bff",
                  "&:hover": { backgroundColor: "#0056b3" },
                }}
              >
                Login
              </Button>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 2 }}
            >
              © 2024 Dr Clinic Doom
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer ></Footer>
    </>
  );
}

export default App;
