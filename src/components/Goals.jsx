import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import { CheckIcon } from "lucide-react";
import { styled, keyframes } from "@mui/system";
import dynamic from "../assets/dynamic.png";

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
    width: "480px",
    height: "350px",
    backgroundColor: "#f3f3f3",
    backgroundImage: `url("https://images.unsplash.com/photo-1519338381761-c7523edc1f46?q=80&w=1577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,

    backgroundSize: "contain",
    backgroundPosition: "center",
    transform: "rotate(-10deg)",
    borderRadius: "30px",
    animation: `${bounce} 10s infinite`,
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      width: "480px",
      height: "280px",
      transform: "rotate(-8deg)",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "100px",
      width: "560px",
      height: "400px",
      transform: "rotate(-5deg)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "350px",
      height: "450px",
      backgroundColor: "rgba(13, 209, 118, 0.6)",
      filter: "blur(80px)",
      zIndex: 0,
      borderRadius: "50px",
      animation: `${moveBlur} 10s infinite`,
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
      backgroundImage: `url("https://images.unsplash.com/photo-1519338381761-c7523edc1f46?q=80&w=1577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,

      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "30px",
      zIndex: 2,
    },
  }));

  return (
    <Box
      sx={{
        minHeight: { xs: "50vh", sm: "60vh", md: "70vh", lg: "80vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f3f3f3",
        p: { xs: 3, md: 8 },
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* Centered Header */}
      <Typography
  variant="h1"
  sx={{
    fontSize: { xs: "2rem", md: "3rem" },
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000", // Black color for the main text
    // textTransform: "uppercase",
    fontFamily: "Montserrat, sans-serif", // Set Montserrat font
  }}
>
  Why choose{" "}
  <span style={{ color: "#0077B3" }}>xBordr</span> {/* Change color here */}
</Typography>


      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 10 },
          width: "100%",
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "50%" },
            justifyContent: "center ",
            alignItems: "flex-start",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center ", alignItems: "flex-start" }}
          >
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
                  "Easy API integration with tourism payments software.",
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
              <Grid item xs={12} sm={6} key={index} sx={{ mb: 2 }}>
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
            minHeight: { xs: "300px", md: "200px" },
            marginTop: { xs: 0, md: 15 },
          }}
        >
          <PhoneMockup />
        </Box>
      </Box>
    </Box>
  );
};

export default GoalsSection;
