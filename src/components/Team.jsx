import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import nature from "../assets/nature.png";
import manish_sir from "../assets/manish_sir.png";
import singh_sir from "../assets/singh_sir.png";
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4D1C", // Orange/coral color from the design
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "1px",
    },
  },
});

export default function TeamSection() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            mb: 4,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          OUR TEAM
        </Typography>

        <Grid container spacing={4}>
          {/* Amsterdam Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={nature}
              alt="Amsterdam Canal"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                mb: 4,
              }}
            />
          </Grid>

          {/* Team Description */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: "1.1rem", color: "#000000" }}
              >
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Rawle
                </Box>{" "}
                is a Techstars Alumnus and Tourism & Hospitality Professional
                with 25+ years of Startup and Sales & Marketing experience.
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "#000000" }}
              >
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Manish
                </Box>{" "}
                is a FinTech technology leader with 20+ years of experience in
                digital strategy and technology consulting, executing MVPs and
                driving growth for startups.
              </Typography>
            </Box>
            <Grid container spacing={6} sx={{ mt: 4 }}>
              {/* Rawle's Profile */}
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -20,
                        right: -20,
                        width: "50%",
                        height: "50%",
                        background: `linear-gradient(135deg, transparent 50%, ${theme.palette.primary.main} 50%)`,
                        zIndex: -1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={singh_sir} // Replace with actual image path
                      alt="Rawle Annandsingh"
                      sx={{
                        width: "200px", // Same width as the first image
                        height: "200px", // Same height as the first image
                        objectFit: "contain", // Ensures the image covers the box while maintaining its aspect ratio
                        filter: "grayscale(100%)", // Apply grayscale filter
                        borderRadius: "8px", // Optional: Add rounded corners
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mt: 2,
                      textTransform: "uppercase",
                      color: "primary.main",
                    }}
                  >
                    Rawle Annandsingh
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Co-Founder & CEO
                  </Typography>
                </Box>
              </Grid>

              {/* Manish's Profile */}
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -20,
                        right: -20,
                        width: "50%",
                        height: "50%",
                        background: `linear-gradient(135deg, transparent 50%, ${theme.palette.primary.main} 50%)`,
                        zIndex: -1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={manish_sir} // Replace with actual image path
                      alt="Manish Balakrishnan"
                      sx={{
                        width: "200px", // Set the same width
                        height: "200px", // Set the same height
                        objectFit: "contain", // Ensures the image covers the box while maintaining its aspect ratio
                        borderRadius: "8px", // Optional: Add rounded corners
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mt: 2,
                      textTransform: "uppercase",
                      color: "primary.main",
                    }}
                  >
                    Manish Balakrishnan
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Co-Founder & CTO
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Team Members */}
      </Container>
    </ThemeProvider>
  );
}
