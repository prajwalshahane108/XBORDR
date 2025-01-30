import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Features from "./Features";
import Works from "./Works";
import Price from "./price";
import Reviews from "./Reviews";
import Footer from "./footer";
import Mobiles from "./Mobiles";
import Motivation from "./Motivation";
import Goals from "./Goals";
import BusinessModel from "./Business-Model";
import MOMENTUM from "./MOMENTUM";
import Wallett from "./Wallett";
import Team from "./Team";
import Landscape from "./Landscape";
import CHALLENGE from "./CHALLENGE";
import Funding from "./Funding";
// import { Download } from "@mui/icons-material"
import { motion } from "framer-motion";
import FundingAsk from "./Funding";
const HeroSection = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: { xs: "25vh", sm: "30vh", md: "85vh" },
          background: "#f3f3f3", // Default background color
          // backgroundImage: "url('https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Add your image path here
          backgroundSize: "cover", // Ensure the image covers the entire container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 20,
          pb: 1,
        }}
      >
        {/* Top Banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              bgcolor: "rgba(0,0,0,0.05)",
              borderRadius: "50px",
              px: 3,
              // py: 1,
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 4,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              Release 1.14
            </Typography>
            <Button
              endIcon={<span>→</span>}
              sx={{
                textTransform: "none",
                color: "text.primary",
                "&:hover": { bgcolor: "transparent", opacity: 0.8 },
              }}
            >
              See what's new
            </Button>
          </Box>
        </motion.div> */}

        {/* <Container maxWidth="md" sx={{ textAlign: "center" }}> */}
        {/* Main Heading */}
        <Box sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4.9rem" },
                fontWeight: "bold",
                lineHeight: 1.2,
                color: "#000",
                mb: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  background: "#0077B3",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                  fontFamily: "Montserrat, sans-serif", // Set Montserrat font

                  fontWeight: "bold",
                }}
              >
                xBordr
              </Box>
              <br />
              simplifies cross-border
              <br />
              payments
              <br />
              for tourism businesses.{" "}
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                mb: 6,
                fontWeight: 400,
              }}
            >
              Experience the ease of seamless, secure cross-border transactions
              for travelers worldwide.
            </Typography> */}
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* <Button
              variant="contained"
              // startIcon={<Download />}
              sx={{
                bgcolor: "white",
                color: "black",
                py: 2,
                px: 4,
                borderRadius: "50px",
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.8)",
                },
              }}
            >
              Download the App
            </Button> */}
          </motion.div>
          {/* </Container> */}
        </Box>
      </Box>
      {/* <Wallet/> */}
      <Mobiles />
      <Features />
      {/* <Wallett/> */}
      {/* <CHALLENGE />  */}
      <Works />
      <Goals />
      {/* <Motivation /> */}
      {/* <BusinessModel/>  */}
      {/* <MOMENTUM/> */}
      {/* <Team/> */}
      {/* <Reviews /> */}
      {/* <Landscape/> */}
      {/* <Funding/> */}
      <Footer />

      {/* <Price /> */}
    </>
  );
};

export default HeroSection;
