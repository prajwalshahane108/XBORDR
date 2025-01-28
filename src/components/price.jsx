import { Box, Container, Typography, Button, Card, CardContent, List, ListItem } from "@mui/material";
import { Download } from "lucide-react";

export default function PricingPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f3f3f3", py: 8 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              bgcolor: "#fff3ef",
              color: "#ff4d4d",
              px: 2,
              py: 0.5,
              borderRadius: "20px",
              display: "inline-block",
              mb: 2,
            }}
          >
            Pricing
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
              color: "#333",
            }}
          >
            Choose a plan and
            <br />
            get started
          </Typography>
        </Box>

        {/* Separate Pricing Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Freemium Card */}
          <Card
            sx={{
              minHeight: "450px",
              width: "500px",
              color: "#333",
              borderRadius: 4,
              boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 4,
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Freemium
              </Typography>
              <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", mb: 10 }}>
                <Typography variant="h3" component="span" sx={{ fontWeight: 800 }}>
                  Free
                </Typography>
              </Box>
              {/* <Typography sx={{ mb: 4, opacity: 0.8 }}>
              Ideal for small businesses.
              </Typography> */}
              <List sx={{ mb: 4 }}>
                <ListItem sx={{ px: 0, opacity: 0.9 }}>• Ideal for small businesses.</ListItem>
                <ListItem sx={{ px: 0, opacity: 0.9 }}>• Features: Basic transaction capabilities with real-time currency conversion.</ListItem>
              </List>
              {/* <Button
                variant="contained"
                startIcon={<Download size={18} />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  textTransform: "none",
                  bgcolor: "black",
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.8)",
                  },
                }}
              >
                Download
              </Button> */}
            </CardContent>
          </Card>

          {/* Premium Card */}
          <Card
            sx={{
              minHeight: "500px",
              width: "500px",
              color: "#333",
              borderRadius: 4,
              boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
              background: "linear-gradient(90deg, rgba(252, 186, 3, 1) 0%, rgba(252, 12, 112, 1) 130%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 4,
              mt: 6,
            }}
          >
            <CardContent sx={{ textAlign: "center", }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Premium
              </Typography>
              <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", mb: 2 }}>
                <Typography variant="h3" component="span" sx={{ fontWeight: 800 }}>
                  $4.99
                </Typography>
                <Typography variant="h6" component="span" sx={{ ml: 1, opacity: 0.8 }}>
                  /mo
                </Typography>
              </Box>
              <Typography sx={{ mb: 4, opacity: 0.8 }}>
              Seamless Integration Tools:
              </Typography>
              <List>
                <ListItem sx={{ px: 0, opacity: 0.9 }}>• Enhanced multi-layer encryption for secure transactions.</ListItem>
                <ListItem sx={{ px: 0, opacity: 0.9 }}>• API access for integrating xBordr directly into your website</ListItem>
                <ListItem sx={{ px: 0, opacity: 0.9 }}>• Plug-and-play integration with popular e-commerce platforms like Shopify, WooCommerce, etc.</ListItem>
              </List>
              {/* <Button
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  textTransform: "none",
                  bgcolor: "white",
                  color: "black",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.9)",
                  },
                }}
              >
                Choose Plan
              </Button> */}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
  