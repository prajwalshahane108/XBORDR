import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import palace from "../assets/palace.png";
import haveli from "../assets/haveli.png";
import Tower from "../assets/Tower.png";
// Custom theme for the green color
const theme = createTheme({
  palette: {
    primary: {
      main: "#2ECC71", // Bright green color for the heading
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: 1,
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
  },
});

const businessItems = [
  {
    percentage: "0.0%",
    title: "Send & Receive",
    image: Tower, // Replace with Eiffel Tower image
  },
  {
    percentage: "0.5%",
    title: "On & Off Ramp",
    image: palace, // Replace with Cinquantenaire image
  },
  {
    percentage: "0.8%",
    title: "FX Conversion",
    image: haveli, // Replace with Colosseum image
  },
];

export default function BusinessModel() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Heading */}
        {/* <Typography
          variant="h1"
          fontWeight="bolder"
          color="#000000"
          gutterBottom
          sx={{ mb: 6 }}
        >
          OUR BUSINESS MODEL
        </Typography> */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem" },
            fontWeight: "bold",
            lineHeight: 1.2,
            mb: 4,
            mt: 2,
            ml: 0, // No left margin
            color: "#000000",
            textAlign: "center", // Centers the text horizontally
            alignSelf: "center", // Centers the component within a flex container
          }}
        >
          OUR BUSINESS MODEL
        </Typography>

        {/* Grid Container */}
        <Grid container spacing={4}>
          {businessItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                  "& .MuiCardContent-root": {
                    padding: (theme) => theme.spacing(2, 0),
                  },
                }}
              >
                {/* Percentage */}
                <Typography
                  variant="h2"
                  component="h2"
                  align="center"
                  sx={{ mb: 1, color: "#4CAF50",  }}
                >
                  {item.percentage}
                </Typography>

                {/* Title */}
                <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
                  {item.title}
                </Typography>

                {/* Image */}
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    borderRadius: 3,
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
