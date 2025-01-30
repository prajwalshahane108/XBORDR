  import { useEffect, useState } from "react";
  import { Box } from "@mui/material";
  import { keyframes } from "@mui/system";
  import screenone from "../assets/screenone.png";

  // Define animations
  const float = keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  `;

  const movePink = keyframes`
    0%, 100% {
      top: 20%;
      left: 30%;
    }
    50% {
      top: 35%;
      left: 19%;
    }
  `;

  const moveOrange = keyframes`
    0%, 100% {
      top: 50%;
      right: 10%;
    }
    50% {
      top: 35%;
      right: 9%;
    }
  `;

  const CenteredPhone = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []);

    return (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "50vh", sm: "70vh", md: "70vh", lg: "60vh" },
          mb: { xs: 8, sm: 10, md: 12 },
          mt: { xs: 8, sm: 20, md: 12 },
          background: "#f3f3f3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Gradient Background Blobs */}
        <Box sx={{ position: "absolute", inset: 0 }}>
          {/* Pink Blob */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: 200, sm: 300, md: 400 },
              height: { xs: 200, sm: 300, md: 400 },
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.7,
              background: "linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)",
              animation: `${movePink} 6s ease-in-out infinite`,
              top: { xs: "10%", md: "20%" },
              left: { xs: "15%", md: "30%" },
            }}
          />
          {/* Orange Blob */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: 200, sm: 300, md: 400 },
              height: { xs: 200, sm: 300, md: 400 },
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.7,
              background: "linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)",
              animation: `${moveOrange} 6s ease-in-out infinite`,
              top: { xs: "50%", md: "40%" },
              right: { xs: "10%", md: "20%" },
            }}
          />
        </Box>

        {/* Centered Phone */}
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" }, // Increased size
            maxWidth: "600px", // Increased max width
            transform: "rotate(1deg)", // Tilt image
            animation: `${float} 3s ease-in-out infinite`,

          }}
        >
          
            <img
              src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Phone"
              style={{
                border: " 10px solid #ffffff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                width: "100%",
                height: "auto",
                borderRadius: "32px",
                display: "block",
                objectFit: "contain",
                transform: "rotate(-15deg) scale(1.1)", // Rotate and increase size
              }}
            />
        </Box>
      </Box>
    );
  };

  export default CenteredPhone;
