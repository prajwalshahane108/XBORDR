import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
// import CheckIcon from '@mui/icons-material/Check';
import { CheckIcon } from "lucide-react";
import { styled, keyframes } from "@mui/system";

const GoalsSection = () => {
    const bounce = keyframes`
    0%, 100% {
      transform: translateY(-90px) rotate(10deg);
    }
    75% {
      transform: translateY(-30px) rotate(10deg);
    }
  `;
  
  // Animation for the moving and expanding blur background
  const moveBlur = keyframes`
    0% {
      transform: translateX(10) translateY(0);
      width: 150px;
      height: 150px;
    }
    25% {
      transform: translateX(calc(30px * (2 * (Math.random() - 0.5)))) translateY(calc(30px * (2 * (Math.random() - 0.5))));
      width: 500px;
      height: 50px;
    }
    50% {
      transform: translateX(calc(50px * (2 * (Math.random() - 0.5)))) translateY(calc(50px * (2 * (Math.random() - 0.5))));
      width: 60px;
      height: 650px;
    }
    75% {
      transform: translateX(calc(40px * (2 * (Math.random() - 0.5)))) translateY(calc(40px * (2 * (Math.random() - 0.5))));
      width: 375px;
      height: 750px;
    }
    100% {
      transform: translateX(-10) translateY(0);
      width: 450px;
      height: 150px;
    }
  `;
  
  const PhoneMockup = styled(Box)(({ theme }) => ({
    width: "330px",
    height: "700px",
    backgroundColor: "white",
    backgroundImage: `url('https://www.colorcombos.com/images/colors/DEDEDE.png')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    transform: "rotate(-10deg)", // Rotated in the opposite direction
    borderRadius: "50px",
    animation: `${bounce} 10s infinite`,
    position: "relative", // Necessary for the pseudo-element
    zIndex: 1, // Ensure the main element is above the blur
  
    // Position of the phone mockup itself remains unchanged
    "&::after": {
      content: '""',
      position: "absolute",
      top: "0", // Position the blur behind the phone
      left: "0", // Align the blur to the left of the phone
      width: "450px", // Starting size of the blur
      height: "450px", // Starting size of the blur
      backgroundColor: "rgba(13, 209, 118, 0.6)", // Blue color with transparency
      filter: "blur(80px)", // Strong blur effect
      zIndex: 0, // Ensure it stays behind the phone mockup
      borderRadius: "50%", // Make it circular
      animation: `${moveBlur} 10s infinite`, // Apply moving blur animation
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundImage:
        "url('https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62de7b398b3d4ed5b1641686_App%20D.svg')",
      backgroundSize: "contain",
      backgroundPosition: "center",
      borderRadius: "50px",
      zIndex: 2, // Place it above the blue background
    },
  }));
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#f3f3f3",
        p: { xs: 3, md: 16 },
        gap: { xs: 4, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography
          component="span"
          sx={{
            bgcolor: "#E6F7F5",
            color: "#40BAB2",
            fontSize: "0.875rem",
            fontWeight: 600,
            py: 0.5,
            px: 1.5,
            borderRadius: 1,
            mb: 2,
            display: "inline-block",
          }}
        >
          Goals
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3.5rem" },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 2,
            mt: 2,
            color: "#333",
          }}
        >
          Helps You Set Personalized Goals
        </Typography>

        <Typography
          sx={{
            color: "#666",
            mb: 4,
            fontSize: "1.125rem",
            lineHeight: 1.5,
          }}
        >
          xBordr enables businesses to define clear, actionable objectives tailored to their needs. By using our platform, you can streamline your priorities and achieve measurable outcomes efficiently.
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: "Customizable Financial Targets",
              description:
                "Set goals for reducing transaction costs and processing times.",
            },
            {
              title: "Enhanced Decision-Making",
              description:
                "Use detailed analytics to adjust your strategies and achieve success.",
            },
            {
              title: "Personalized Insights",
              description:
                "Gain actionable recommendations based on your business’s unique requirements.",
            },
          ].map((item, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Avatar
                  sx={{
                    p: 1,
                    fontWeight: 800,
                    bgcolor: "#fff",
                    color: "#000",
                    width: 20,
                    height: 20,
                  }}
                >
                  <CheckIcon sx={{ fontSize: 16 }} />
                </Avatar>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "1.125rem",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Right Content - Phone Mockup */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "400px", md: "600px" },
        }}
      >
        {/* Gradient Background */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(64, 186, 178, 0.2) 0%, rgba(255, 255, 255, 0) 70%)",
            filter: "blur(40px)",
            transform: "scale(1.5)",
          }}
        />

        {/* Phone Mockup */}
        <Box
          sx={{
            pt:12,
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <PhoneMockup />
        </Box>
      </Box>
    </Box>
  );
};

export default GoalsSection;
