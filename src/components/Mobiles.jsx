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
        height: "150vh",
        background: "#f3f3f3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
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
            width: 400,
            height: 400,
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 1,
            background: "linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)",
            animation: "movePink 6s ease-in-out infinite",
          }}
        />
        {/* Orange Blob */}
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 1,
            background: "linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)",
            animation: "moveOrange 3s ease-in-out infinite",
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
          width: "100%",
          maxWidth: "1200px",
          gap: "-60px", // Adjust gap for closer appearance
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
              ? "translateY(20px) rotate(-2deg)"
              : "translateY(50px) rotate(-15deg)",
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
              src="https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62de7b395d48ac06163e1b77_App%20A.svg"
              alt="Phone A"
              style={{
                width: "100%", // Adjust width to take full container space
                height: "auto", // Maintain aspect ratio
                maxWidth: "320px", // Ensure it doesn't exceed the original size
                borderRadius: "32px", // Rounded corners for the image
                display: "block", // Removes extra spacing below the image
                objectFit: "contain", // Ensures the image scales appropriately within the container
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
              src="https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62de7b39699c61c72de939af_App%20B.svg"
              alt="Phone B"
              style={{
                width: "300px",
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
              transform: translateY(0) rotate(-10deg);
            }
            50% {
              transform: translateY(-10px) rotate(-10deg);
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
              top: 20%; /* Initial position */
              left: 30%;
            }
            50% {
              top: 35%; /* Moves down slightly */
              left: 19%; /* Slight horizontal adjustment */
            }
          }
          @keyframes moveOrange {
            0%, 100% {
              top: 50%; /* Initial position */
              right: 10%;
            }
            50% {
              top: 35%; /* Moves down slightly */
              right: 9%; /* Slight horizontal adjustment */
            }
          }
        `}
      </style>
    </Box>
  );
};

export default FloatingPhones;
