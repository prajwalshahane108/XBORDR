import React from "react";
import { Box, Button, Container, Typography } from "@mui/material"
import Navbar from "./Navbar";
import Features from "./Features";
import Works from "./Works";
// import Price from "./price";
// import Reviews from "./Reviews";
import Footer from "./footer";
import Mobiles from "./Mobiles";
import Motivation from "./Motivation";
import Goals from "./Goals";
// import { Download } from "@mui/icons-material"
import { motion } from "framer-motion"
const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <Box
      sx={{
        minHeight: { xs: "55vh", sm: "70vh", md: "85vh" },
        background: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 20,
        pb: 1,
      }}
    >
      {/* Top Banner */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
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
      </motion.div>

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
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#000",
              mb: 2,
            }}
          >
            Streamline Tourism Payments
            <br />
            with {" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #FFB74D 0%, #FF8A65 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              XBORDR
            </Box>
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              mb: 6,
              fontWeight: 400,
            }}
          >
            Experience the ease of seamless, secure cross-border transactions for travelers worldwide.
          </Typography>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
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
          </Button>
        </motion.div>
      {/* </Container> */}
    </Box>
    </Box>
    <Mobiles/>
    <Features/>
    <Motivation/>
    <Goals/>
    <Works/>
    {/* <Price/> */}
    <Reviews/>
    <Footer/>
    </>
  );
};

export default HeroSection;

