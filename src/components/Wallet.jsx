import React from "react"
import { Box, Button, Container, Typography, IconButton } from "@mui/material"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"

import { createTheme, ThemeProvider } from "@mui/material/styles"

// Custom theme to match the xBordr orange color
const theme = createTheme({
  palette: {
    primary: {
      main: "#000435",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          padding: "10px 20px",
          fontSize: "1rem",
        },
        outlined: {
          borderColor: "#000435",
          color: "#000000",
          "&:hover": {
            borderColor: "#FF9500",
            backgroundColor: "rgba(255, 149, 0, 0.04)",
          },
        },
      },
    },
  },
})

export default function BitcoinLanding() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 8,
            textAlign: "center",
          }}
        >
          {/* Main heading */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "#1E1E1E",
              mb: 6,
              maxWidth: "800px",
              fontWeight: 500,
              fontSize: { xs: "2rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            xBordr is an innovative payment network and a new kind of money.
          </Typography>

          {/* Buttons container */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                minWidth: "200px",
                color: "white",
              }}
            >
              Get started with xBordr
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                minWidth: "200px",
              }}
            >
              Choose your wallet
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                minWidth: "200px",
              }}
            >
              Buy xBordr
            </Button>
          </Box>

          {/* Video section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <IconButton
              size="large"
              sx={{
                color: "#1E1E1E",
              }}
            >
              <PlayCircleIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                color: "#1E1E1E",
                fontSize: "1.1rem",
              }}
            >
              What is xBordr?
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

