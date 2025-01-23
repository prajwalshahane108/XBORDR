import { Box, Container, Typography, Card, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      image:
        "https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62dec50bea309b2563330123_Feature%20Icon%201.svg",
      title: "Boost Your Business Efficiency",
      description:
        "A user-friendly interface that makes cross-border payments easy.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62dec50b16ef6f77809beb58_Feature%20Icon%202.svg",
      title: "Seamless Integration",
      description:
        "Connects directly to existing business systems to ensure fast adoption.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62dec50b66f64f294538b338_Feature%20Icon%203.svg",
      title: "Real-time Currency Conversion",
      description:
        "Provides transparent and competitive foreign exchange rates.",
    },
  ];

  return (
    <Box sx={{ py: 12, bgcolor: "#f3f3f3" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              component="span"
              sx={{
                bgcolor: "#FF440F26",
                color: "#FF440F",
                px: 2,
                py: 1,
                borderRadius: "50px",
                fontSize: "0.875rem",
                fontWeight: 600,
                display: "inline-block",
                mb: 1,
              }}
            >
              Benefits
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2,
                color: "#000",
              }}
            >
              WELCOME TO
              <br />
              XBORDR
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Typography
              color="text.secondary"
              sx={{ fontSize: "1.125rem", maxWidth: "650px", mx: "auto" }}
            >
              XBORDR is revolutionizing cross-border payments in the tourism
              industry. By leveraging Stablecoin, pegged in value to the US
              Dollar, we are able to drastically reduce transaction costs and
              processing times. This enables businesses to provide a seamless
              payment experience for their customers, making international
              transactions as easy and fast as local ones.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 3) }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    p: 6,
                    minHeight: "350px", // Ensure cards are at least this height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // Ensures consistent spacing between elements
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                    borderRadius: "25px",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{
                      width: "180px", // Set a fixed width for the image
                      height: "150px", // Set a fixed height for the image
                      objectFit: "cover", // Ensures the image maintains its aspect ratio within the box
                      mb: 4,
                    }}
                  />
                  <Typography
                    // variant="h4"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      lineHeight: 1.2,
                      mt: 1,
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      flexGrow: 1,
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
