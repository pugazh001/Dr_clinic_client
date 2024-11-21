import React from 'react'

import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import drlogo from "/drcliniclogo.png";
import Footer from "../components/footer"; // Correct relative path
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate=useNavigate();
  return (
    <div style={{ display: "block", overflowX: "hidden" }}>
    <Box
      sx={{
        minHeight: "93vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: "120px",
            height: "120px",
            marginBottom: 3,
          }}
        >
          <img
            src={drlogo}
            alt="Dr Clinic Logo"
            style={{ width: "100%" }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: 4,
            fontWeight: "bold",
            color: "#17e2d3",
          }}
        >
          Welcome to Dr Clinic Portal
        </Typography>

        {/* Cards Container */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Doctor Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxShadow: 3,
                borderRadius: 3,
                textAlign: "center",
                backgroundColor: "#ffffff",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="#17e2d3">
                  Doctor Login
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login as a doctor to manage your schedule and patients.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#0d8279",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#17e2d3",
                    },
                  }}
                  onClick={() => navigate("/doctor-login")}
                >
                  Go to Doctor Login
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Receptionist Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxShadow: 3,
                borderRadius: 3,
                textAlign: "center",
                backgroundColor: "#ffffff",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="#17e2d3">
                  Receptionist Login
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login to manage appointments and patient records.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#0d8279",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#17e2d3",
                    },
                  }}
                  onClick={() => navigate("/receptionist-login")}
                >
                  Go to Receptionist Login
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Pharma Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxShadow: 3,
                borderRadius: 3,
                textAlign: "center",
                backgroundColor: "#ffffff",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="#17e2d3">
                  Pharma Login
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login to manage inventory and prescriptions.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#0d8279",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#17e2d3",
                    },
                  }}
                  onClick={() => navigate("/pharma-login")}
                >
                  Go to Pharma Login
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Footer />
  </div>
  )
}

export default Home