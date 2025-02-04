import React from "react";
import { Box, Container, Typography, Paper, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import BlurOnIcon from "@mui/icons-material/BlurOn";
import TimerIcon from "@mui/icons-material/Timer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// Motion Container for smoother animations
const MotionBox = motion(Box);

const ComparisonFlow = ({ type, icons, labels }) => {
  const theme = useTheme();

  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 3 }}> {/* Reduced mb */}
      <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: "bold" }}>
        {type}
      </Typography>
      <MotionBox
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 4 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {icons.map((Icon, index) => (
          <React.Fragment key={index}>
            <Box sx={{ textAlign: "center" }}>
              <Icon
                sx={{
                  fontSize: 50,
                  color: type.includes("Traditional") ? "gold" : "#000435",
                }}
              />
              <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                {labels[index]}
              </Typography>
            </Box>
            {index < icons.length - 1 && (
              <KeyboardDoubleArrowRightIcon fontSize="large" sx={{ mx: 2, color: "#000000" }} />
            )}
          </React.Fragment>
        ))}
      </MotionBox>
    </Paper>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Paper elevation={2} sx={{ p: 3, height: "100%", borderRadius: 2 }}>
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Icon sx={{ mr: 2, color: "primary.main", fontSize: 40 }} />
      <Typography variant="h6" color="#000000" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    </Box>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default function CryptoComparison() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* Header */}
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: "bold" }}>
          <span style={{ color: "#FF5722" }}>INTRODUCING</span>{" "}
          <span style={{ color: "#2196F3" }}>XBORDR</span>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, fontSize: "1.1rem" }}>
          We simplify cross-border transactions using a Stablecoin pegged to the value of the US Dollar.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <FeatureCard
            icon={AttachMoneyIcon}
            title="Low Transaction Cost"
            description="Average transaction cost - less than $0.01"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            icon={TimerIcon}
            title="Fast Processing"
            description="Average processing time - seconds to minutes"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            icon={BlurOnIcon}
            title="Enhanced Security"
            description="Real-time & competitive foreign exchange rates with seamless integration"
          />
        </Grid>
      </Grid>

      {/* Flow Comparisons */}
      <ComparisonFlow
        type="Traditional Banking Flow"
        icons={[AccountBalanceIcon, AccountBalanceIcon, AccountBalanceIcon]}
        labels={["Sender Bank", "Intermediary Banks", "Recipient Bank"]}
      />

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: "center", fontSize: "1rem" }}>
        High Transaction Costs - Long Settlement Times - Volatile Foreign Exchange Rates
      </Typography>

      <ComparisonFlow
        type="Stablecoin Finance Flow"
        icons={[AccountBalanceWalletIcon, BlurOnIcon, AccountBalanceWalletIcon]}
        labels={["Sender Wallet", "Transaction on Blockchain", "Recipient Wallet"]}
      />

      <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", fontSize: "1rem" }}>
        Low Transaction Costs - Fast Settlement Times - No Foreign Exchange Volatility
      </Typography>
    </Container>
  );
}
