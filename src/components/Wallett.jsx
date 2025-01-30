import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FX from "../assets/FX.png";
import Time from "../assets/Time.png";
import Money from "../assets/Money.png";

const MotionBox = motion(Box);

const ComparisonFlow = ({ type, icons, labels }) => {
  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 3 }}>
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
              <Icon sx={{ fontSize: 50, color: type.includes("Traditional") ? "gold" : "#000435" }} />
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

const FeatureCard = ({ image, title, description }) => (
  <Paper elevation={2} sx={{ p: 2, height: "100%", borderRadius: 2, textAlign: "center" }}>
    <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
      <img src={image} alt={title} style={{ width: 100, height: 100 }} />
    </Box>
    <Typography variant="h6" color="#000000" sx={{ fontWeight: "bold" }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default function CryptoComparison() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: "bold", fontFamily: "montserrat" }}>
          <span style={{ color: "#FF5722" }}>INTRODUCING</span>{" "}
          <span style={{ color: "#0077B3" }}>xBordr</span>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, fontSize: "1.1rem" }}>
          We simplify cross-border transactions using a Stablecoin pegged to the value of the US Dollar.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <FeatureCard image={Money} title="Save Money" description="Stablecoin is the cheapest way to send money worldwide." />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard image={Time} title="Save Time”" description="Stablecoin is the fastest way to send money worldwide." />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard image={FX} title="Save Foreign Exchange" description="Stablecoin is the least volatile way to send money worldwide." />
        </Grid>
      </Grid>

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
        icons={[AccountBalanceWalletIcon, AccountBalanceWalletIcon, AccountBalanceWalletIcon]}
        labels={["Sender Wallet", "Transaction on Blockchain", "Recipient Wallet"]}
      />

      <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", fontSize: "1rem" }}>
        Low Transaction Costs - Fast Settlement Times - No Foreign Exchange Volatility
      </Typography>
    </Container>
  );
}
