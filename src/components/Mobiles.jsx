import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const FloatingPhones = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "90vh",
        background: "#f3f3f3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 8,
        // overflow: "hidden",
      }}
    >
      {/* Gradient Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
        }}
      >
        {/* Pink Blob */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: 200, sm: 300, md: 400 }, // Responsive size
            height: { xs: 200, sm: 300, md: 400 }, // Responsive size
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 1,
            background: "linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)",
            animation: "movePink 6s ease-in-out infinite",
            top: { xs: "10%", md: "20%" },
            left: { xs: "15%", md: "30%" },
          }}
        />
        {/* Orange Blob */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: 200, sm: 300, md: 400 }, // Responsive size
            height: { xs: 200, sm: 300, md: 400 }, // Responsive size
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 1,
            background: "linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)",
            animation: "moveOrange 3s ease-in-out infinite",
            top: { xs: "50%", md: "40%" },
            right: { xs: "10%", md: "20%" },
          }}
        />
      </Box>

      {/* Phones Container */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }, // Stack on smaller screens
          gap: { xs: "40px", md: "-60px" }, // Adjust gap for responsiveness
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Left Phone */}
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded
              ? "translateY(20px) rotate(-9deg)"
              : "translateY(50px) rotate(-15deg)",
            width: { xs: "550px", sm: "300px", md: "520px" }, // Responsive width
          }}
        >
          <Box
            sx={{
              position: "relative",
              background: "#fff",
              borderRadius: "40px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              padding: "10px",
              animation: "float1 6s ease-in-out infinite",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "35px",
                height: "10px",
                background: "#f5f5f5",
                borderRadius: "5px",
                zIndex: 10,
              }}
            />
            <img
              src="https://cdn.prod.website-files.com/63e626d88ff2d64582912f42/64c8003a5a5e116129bb035f_img1-p-800.png"
              alt="Phone A"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "520px",
                borderRadius: "32px",
                display: "block",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        {/* Right Phone */}
        <Box
          sx={{
            position: "relative",
            zIndex: 20,
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded
              ? "translateY(90px) rotate(8deg)"
              : "translateY(30px) rotate(5deg)",
            width: { xs: "550px", sm: "300px", md: "500px" }, // Responsive width
          }}
        >
          <Box
            sx={{
              position: "relative",
              background: "#fff",
              borderRadius: "40px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              padding: "10px",
              animation: "float2 6s ease-in-out infinite",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "12px",
                left: "50%",
                transform: "translateX(-10%)",
                width: "35px",
                height: "10px",
                background: "#f5f5f5",
                borderRadius: "5px",
                zIndex: 20,
              }}
            />
            <img
              src="https://cdn.prod.website-files.com/63e626d88ff2d64582912f42/64c7fea4f21a24d65730ca2c_payroll-step-2-p-800.png"
              alt="Phone B"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                borderRadius: "42px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Keyframes */}
      <style>
        {`
          @keyframes float1 {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(0deg);
            }
          }
          @keyframes float2 {
            0%, 100% {
              transform: translateY(0) rotate(5deg);
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
            }
          }
          @keyframes movePink {
            0%, 100% {
              top: 20%;
              left: 30%;
            }
            50% {
              top: 35%;
              left: 19%;
            }
          }
          @keyframes moveOrange {
            0%, 100% {
              top: 50%;
              right: 10%;
            }
            50% {
              top: 35%;
              right: 9%;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default FloatingPhones;
