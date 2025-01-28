import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Bounce animation for the phone mockup
const bounce = keyframes`
     0%, 100% {
    transform: translateY(-10px) rotate(-10deg);
  }
  75% {
    transform: translateY(-30px) rotate(-10deg);
  }
`;

// Animation for the moving and expanding blur background
const moveBlur = keyframes`
  0% {
    transform: translateX(10) translateY(10);
    width: 150px;
    height: 150px;
  }
  25% {
    transform: translateX(calc(50px * (2 * (Math.random() - 0.5)))) translateY(calc(30px * (2 * (Math.random() - 0.5))));
    width: 500px;
    height: 50px;
  }
  50% {
    transform: translateX(calc(50px * (2 * (Math.random() - 0.5)))) translateY(calc(50px * (2 * (Math.random() - 0.5))));
    width: 60px;
    height: 650px;
  }
  75% {
    transform: translateX(calc(50px * (2 * (Math.random() - 0.5)))) translateY(calc(40px * (2 * (Math.random() - 0.5))));
    width: 375px;
    height: 350px;
  }
  100% {
    transform: translateX(-10) translateY(0);
    width: 450px;
    height: 150px;
  }
`;

// Styled component for phone mockup
const PhoneMockup = styled(Box)(({ theme }) => ({
  width: "590px",
  height: "400px",
  backgroundColor: "white",
  backgroundImage: `url('')`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  transform: "rotate(-10deg)",
  borderRadius: "20px",
  animation: `${bounce} 2s infinite`,
  position: "relative", // Necessary for the pseudo-element
  zIndex: 1, // Ensure the main element is above the blur

  // Position of the phone mockup itself remains unchanged
  "&::after": {
    content: '""',
    position: "absolute",
    top: "0", // Position the blur behind the phone
    left: "0", // Align the blur to the left of the phone
    width: "500px", // Starting size of the blur
    height: "500px", // Starting size of the blur
    backgroundColor: "rgba(0, 122, 255, 0.6)", // Blue color with transparency
    filter: "blur(50px)", // Strong blur effect
    zIndex: 0, // Ensure it stays behind the phone mockup
    borderRadius: "50%", // Make it circular
    animation: `${moveBlur} 18s infinite`, // Apply moving blur animation
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://cdn.prod.website-files.com/63e626d88ff2d64582912f42/64c7fea471e2f5bb0f93b87c_payroll-step-3-p-800.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    borderRadius: "50px",
    zIndex: 2, // Place it above the blue background
  },
}));

const MotivationSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        backgroundColor: "#f3f3f3",
        padding: "40px",
      }}
    >
      {/* Left Section: Phone Mockup */}
      <Box sx={{ flex: "1 1 40%", display: "flex", justifyContent: "center" }}>
        <PhoneMockup />
      </Box>

      {/* Right Section: Text and Button */}
      <Box sx={{ flex: "1 1 30%", padding: "20px", textAlign: "left" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            marginBottom: "16px",
            color: "#333",
          }}
        >
          REBOUND OF THE<br /> TOURISM MARKET
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            marginBottom: "24px",
          }}
        >
          As the tourism sector rebounds post-pandemic, stablecoin adoption grows
          and cryptocurrency regulatory frameworks solidify, xBordr is uniquely
          positioned to serve this growing market by offering efficient and cost-effective
          cross-border payment solutions tailored for tourism businesses.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            marginBottom: "16px",
          }}
        >
          <strong>$1.5 Trillion Tourism Receipts</strong>
          <br />
          The global tourism market is experiencing a robust recovery, with the
          United Nations World Tourism Organization (UNWTO) reporting that international
          tourist arrivals will return to full recovery in 2024 with an estimated 1.3 billion
          International Tourist Arrivals. This resurgence is driven by pent-up demand
          for travel and increased consumer confidence as restrictions ease.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            marginBottom: "16px",
          }}
        >
          <strong>$10.8 Trillion Stablecoin</strong>
          <br />
          In 2023, stablecoins settled $10.8T worth of transactions of which $2.3T
          were related to organic activities including payments and cross-border
          remittances, according to Coinbase. They have become particularly valuable
          in emerging markets where access to stable currencies is limited.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0066ff",
            color: "white",
            padding: "10px 24px",
            fontWeight: 600,
            borderRadius: "24px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#0056d4",
            },
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default MotivationSection;
