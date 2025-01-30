import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// Styled components
const StepNumber = styled(Box)(({ theme, color }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "bold",
  color: theme.palette.common.white,
  backgroundColor: color,
  position: "absolute",
  bottom: "-20px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
}));

const StepCard = styled(Paper)(({ theme }) => ({
  // padding: theme.spacing(1),
  height: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  backgroundColor: theme.palette.common.white,
  borderRadius: "20px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "200px",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  marginBottom: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden", // Ensure that the image doesn't overflow
}));

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      color: "#0077B3",
      title: "Start",
      description: "Integrate our API into your tourism payments software or use our web platform.",
      imageUrl:
        "https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62dff0a517e347c1be7f1ee1_Step%201.svg", // Replace with your image URL
    },
    {
      number: "2",
      color: "#FF5722",
      title: "Process",
      description:
        "Input payor & payee banking information, the amount to send and click send. We’ll automatically convert your fiat currency to stablecoin.",
      imageUrl:
        "https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62dff0a6bca70858f1525cb4_Step%202.svg", // Replace with your image URL
    },
    {
      number: "3",
      color: "#4CAF50",
      title: "Complete",
      description:
        "Confirm within minutes on your dashboard that the payee received the funds.",
      imageUrl:
        "https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62dff0a6bf672a53929dc82e_Step%203.svg", // Replace with your image URL
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "#f3f3f3" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          {/* <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              color: "#FF9800",
              fontSize: "1rem",
              fontWeight: 500,
              mb: 2,
            }}
          >
            Step by step
          </Typography> */}
          {/* <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: "bold",
              color: "#1a1a1a",
            }}
          >
            How xBordr Works
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
    color: "#000000", // Default color for the rest of the text
    textAlign: "center", // Centers the text horizontally
    alignSelf: "center", // Centers the component within a flex container
    fontFamily: "Montserrat, sans-serif", // Set Montserrat font
  }}
>
  How <span style={{ color: "#0077B3" }}>xBordr</span> Works
</Typography>

        </Box>

        <Grid container spacing={2}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={step.number}>
              <StepCard>
                <ImageBox>
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    style={{
                      width: "100%", // Makes the image fill the container
                      height: "100%", // Makes the image fill the container's height
                      objectFit: "contain", // Ensures the image covers the container without distorting
                    }}
                  />
                </ImageBox>
                <StepNumber color={step.color}>{step.number}</StepNumber>
              </StepCard>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  mt: 3,
                  color: "#1a1a1a",
                  textAlign: "center",
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  textAlign: "center",
                  px: 2,
                }}
              >
                {step.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
