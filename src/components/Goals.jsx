import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
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

  const moveBlur = keyframes`
    0% {
      transform: translateX(10) translateY(0);
      width: 150px;
      height: 150px;
    }
    25% {
      transform: translateX(30px) translateY(30px);
      width: 300px;
      height: 300px;
    }
    50% {
      transform: translateX(-30px) translateY(-30px);
      width: 400px;
      height: 400px;
    }
    75% {
      transform: translateX(20px) translateY(20px);
      width: 250px;
      height: 250px;
    }
    100% {
      transform: translateX(-10px) translateY(0);
      width: 150px;
      height: 150px;
    }
  `;

  const PhoneMockup = styled(Box)(({ theme }) => ({
    width: "580px",
    height: "350px",
    backgroundColor: "#f3f3f3",
    backgroundImage: `url('https://cdn.prod.website-files.com/63e626d88ff2d64582912f42/64c7fea571e2f5bb0f93b9a9_payroll-step-4-p-500.png')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    transform: "rotate(-10deg)", // Rotated in the opposite direction
    borderRadius: "30px",
    animation: `${bounce} 10s infinite`,
    position: "relative", // Necessary for the pseudo-element
    zIndex: 1, // Ensure the main element is above the blur
  
    // Adjust size based on screen width
    [theme.breakpoints.down("md")]: {
      width: "480px",
      height: "280px",
      transform: "rotate(-8deg)", // Slightly adjust rotation
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "100px",
      marginBottom: "100px",
      width: "620px",
      height: "400px",
      transform: "rotate(-5deg)", // Further adjust rotation
    },
  
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
      borderRadius: "50px", // Make it circular
      animation: `${moveBlur} 10s infinite`, // Apply moving blur animation
  
      // Adjust blur and size dynamically
      [theme.breakpoints.down("md")]: {
        width: "350px",
        height: "350px",
        filter: "blur(60px)",
      },
      [theme.breakpoints.down("sm")]: {
        width: "250px",
        height: "250px",
        filter: "blur(40px)",
      },
    },
  
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundImage:
        "url('https://cdn.prod.website-files.com/63e626d88ff2d64582912f42/64c7fea571e2f5bb0f93b9a9_payroll-step-4-p-500.png')",
      backgroundSize: "contain",
      backgroundPosition: "center",
      borderRadius: "30px",
      zIndex: 2, // Place it above the blue background
    },
  }));

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#f3f3f3",
        p: { xs: 3, md: 8 },
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem" },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 4,
            mt: 2,
            color: "#333",
          }}
        >
          WHAT WE OFFER
        </Typography>

        <Grid container spacing={2}>
          {[
            {
              title: "Dynamic Currency Conversion",
              description:
                "Real-time, transparent & competitive foreign exchange rates.",
            },
            {
              title: "Multilingual Support",
              description:
                "Catering to the diverse needs of tourism businesses.",
            },
            {
              title: "Seamless Integration",
              description:
                "Easy API integration with travel platforms like Amadeus.",
            },
            {
              title: "Data Analytics",
              description:
                "Insights into spending patterns for informed decision-making.",
            },
            {
              title: "Enhanced Security",
              description:
                "Blockchain technology and multi-factor authentication for reduced risk of fraud and chargebacks.",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Avatar
                  sx={{
                    p: 1,
                    fontWeight: 800,
                    bgcolor: "#fff",
                    color: "#000",
                    width: 32,
                    height: 32,
                  }}
                >
                  <CheckIcon size={18} />
                </Avatar>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#666",
                      lineHeight: 1.6,
                      fontSize: "0.875rem",
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "300px", md: "400px" },
        }}
      >
        <PhoneMockup />
      </Box>
    </Box>
  );
};

export default GoalsSection;
