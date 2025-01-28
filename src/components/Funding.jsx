import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
// import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import pie from "../assets/pie.png";
const data = [
  { name: "Product", value: 40 },
  { name: "General Administration", value: 20 },
  { name: "Legal", value: 20 },
  { name: "Business Development", value: 20 },
];

const COLORS = ["#7FD4D4", "#1F4B8E", "#2A69BE", "#4A90E2"];
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4D1C", // Orange/coral color from the design
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "1px",
    },
  },
});
export default function FundingAsk() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header with decorative shapes */}
      <Box sx={{ position: "relative", mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: "#FF4500",
            fontWeight: "bold",
            letterSpacing: "0.1em",
          }}
        >
          FUNDING ASK
        </Typography>
        {/* Decorative triangles */}
        {/* <Box
          sx={{
            position: "absolute",
            top: -20,
            right: 0,
            width: "200px",
            height: "200px",
            zIndex: -1,
          }}
        >
          <img src="https://docs.lightburnsoftware.com/legacy/img/QRCode/ExampleCode.png" alt="Decorative triangles" style={{ width: "100%", height: "100%" }} />
        </Box> */}
      </Box>

      <Grid container spacing={4}>
        {/* Left side - QR Code section */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 2, color: "#000000" }}>
              Scan to receive updates!
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              <img
                src="https://docs.lightburnsoftware.com/legacy/img/QRCode/ExampleCode.png"
                alt="QR Code"
                style={{
                  width: "250px",
                  height: "250px",
                  maxWidth: "100%",
                }}
              />
            </Paper>
          </Box>
        </Grid>

        {/* Right side - Funding details and chart */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", color: "#000000" }}
          >
            Funding Amount for 18-Month Runway
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#000000" }}>
            USD $500,000: $125,000 for 7% equity and $375,000 for an uncapped
            Most Favored Nation (MFN) Simple Agreement for Future Equity (SAFE).
          </Typography>

          {/* Pie Chart */}
          <Box sx={{ height: 400 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -20,
                      right: -20,
                      width: "50%",
                      height: "50%",
                      // background: `linear-gradient(135deg, transparent 50%, ${theme.palette.primary.main} 50%)`,
                      zIndex: -1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={pie} // Replace with actual image path
                    alt="Rawle Annandsingh"
                    sx={{
                      width: "100%",
                      height: "auto",
                      // filter: "grayscale(100%)",
                    }}
                  />
                </Box>
                
              </Box>
            </Grid>
            {/* <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} innerRadius={60} outerRadius={120} paddingAngle={0} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend layout="vertical" align="right" verticalAlign="middle" />
              </PieChart>
            </ResponsiveContainer> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
