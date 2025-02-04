import React from "react"
import { Box, Container, Typography, Paper } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#f3f3f3", // Blue background color
    },
    secondary: {
      main: "#ff4d4d", // Red color for laptop border
    },
  },
  typography: {
    h3: {
      fontWeight: 700,
      letterSpacing: 1,
    },
  },
})

export default function SuccessSlide() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mt: 8,
          bgcolor: "primary.main",
          minHeight: "75vh",
          position: "relative",
          overflow: "hidden",
          py: 4,
        }}
      >
        {/* Geometric shapes */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            opacity: 0.2,
          }}
        >
            {/* <svg width="200" height="200" viewBox="0 0 200 200">
              <polygon points="0,200 200,200 0,0" fill="#004d99" />
            </svg> */}
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* Heading */}
            <Typography
              variant="h3"
              sx={{
                color: "#ff5722",
                mb: 4,
                fontWeight: "bold",
              }}
            >
              EARLY SUCCESS AND MOMENTUM
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              {/* Laptop mockup */}
              <Paper
                elevation={3}
                sx={{
                  width: { xs: "100%", md: "50%" },
                  maxWidth: 600,
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "20px solid #ff4d4d",
                }}
              >
                <Box
                  component="img"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(85)-78hjVCe4jwNIwJPh3UPXOwN92lsPxa.png"
                  alt="Success Momentum"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Paper>

              {/* Bullet points */}
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  {[
                    "Secured first customer in Munich, Germany.",
                    "On-boarded a technical co-founder through Y Combinator.",
                    "MVP is under development and will launch in Q2 2025.",
                  ].map((text, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "black",
                          borderRadius: "50%",
                          mt: 1,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#000000",
                          fontWeight: 400,
                          lineHeight: 1.4,
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

