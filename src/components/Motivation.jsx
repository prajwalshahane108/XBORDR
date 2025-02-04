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
    filter: "blur(80px)", // Strong blur effect
    zIndex: 0, // Ensure it stays behind the phone mockup
    borderRadius: "50%", // Make it circular
    animation: `${moveBlur} 20s infinite`, // Apply moving blur animation
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
        minHeight: "130vh",
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
          sx={{
            backgroundColor: "#e8f0ff",
            display: "inline-block",
            color: "#0066ff",
            fontWeight: 600,
            padding: "4px 12px",
            borderRadius: "12px",
            fontSize: "14px",
            marginBottom: "16px",
          }}
        >
          Tasks
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            marginBottom: "16px",
            color: "#333",
          }}
        >
          Motivates you to <br />
          complete all the tasks
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            marginBottom: "24px",
          }}
        >
          XBORDR simplifies task management for businesses by offering intuitive tools to help you track and achieve your goals efficiently. With features like automated reminders, real-time status updates, and progress tracking, you’ll stay organized and focused.
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

