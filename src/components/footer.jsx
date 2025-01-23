import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import Logo from "../assets/logo.png";
// Keyframes for moving and resizing
const moveAndResize1 = keyframes`
  0% { transform: translate(-20%, 0) scale(1); }
  50% { transform: translate(10%, -20%) scale(1.3); }
  100% { transform: translate(-20%, 0) scale(1); }
`;

const moveAndResize2 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-10%, 10%) scale(1.2); }
  100% { transform: translate(0, 0) scale(1); }
`;

const moveAndResize3 = keyframes`
  0% { transform: translate(-10%, 0) scale(1); }
  50% { transform: translate(10%, -10%) scale(1.4); }
  100% { transform: translate(-10%, 0) scale(1); }
`;

const moveAndResize4 = keyframes`
  0% { transform: translate(0, 10%) scale(1); }
  50% { transform: translate(-20%, -10%) scale(1.1); }
  100% { transform: translate(0, 10%) scale(1); }
`;

const moveAndResize5 = keyframes`
  0% { transform: translate(20%, -20%) scale(1); }
  50% { transform: translate(-10%, 10%) scale(1.2); }
  100% { transform: translate(20%, -20%) scale(1); }
`;

// Styled components for gradient effects with animations
const GradientBackground = styled(Box)(({ animation }) => ({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "300px",
  height: "300px",
  opacity: 1,
  filter: "blur(40px)",
  borderRadius: "50%",
  zIndex: 0,
  animation: `${animation} 10s infinite ease-in-out`,
}));

const StoreButton = styled(Link)(() => ({
  display: "inline-block",
  transition: "transform 0.2s ease-in-out",
  textDecoration: "none", // Ensure no underline
  "&:hover": {
    transform: "scale(1.05)",
  },
  "& img": {
    height: "48px",
    width: "auto",
  },
}));


const FooterLink = styled(Link)(() => ({
  color: "rgba(0, 0, 0, 0.6)",
  textDecoration: "none",
  "&:hover": {
    color: "rgba(0, 0, 0, 0.8)",
    textDecoration: "none",
  },
}));

const AppHero = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f3f3f3",
        position: "relative",
        minHeight: "130vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Animated background gradients */}
      <GradientBackground
        sx={{ background: "#aaeaf8", bottom: "-9%", left: "20%" }}
        animation={moveAndResize1}
      />
      <GradientBackground
        sx={{ background: "#f1904f", bottom: "0%", left: "34%" }}
        animation={moveAndResize2}
      />
      <GradientBackground
        sx={{ background: "#85aee9", bottom: "1%", left: "50%" }}
        animation={moveAndResize3}
      />
      <GradientBackground
        sx={{ background: "#f179a9", bottom: "1%", left: "65%" }}
        animation={moveAndResize4}
      />
      <GradientBackground
        sx={{ background: "#f7cb6d", bottom: "-9%", left: "81%" }}
        animation={moveAndResize5}
      />

      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Welike Logo"
          sx={{
            width: "125px",
            height: "125px",
            mb: 4,
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "2.5rem", md: "5.2rem" },
            fontWeight: 600,
            mb: 4.5,
            maxWidth: "900px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#111213",
            fontFamily: "plus jakarta sans,",
          }}
        >
          The XBORDR is now available
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.3rem" },
            color: "rgba(0, 0, 0, 0.6)",
            mb: 5,
            fontWeight: "normal",
          }}
        >
          Explore XBORDR today and experience seamless transactions, stability,
          and security in the world of cryptocurrency.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 8,
          }}
        >
         <StoreButton
  sx={{
    pt: 2,
    pr: 5,
    pl: 5,
    pb: 1.5,
    backgroundColor: "#ffffff",
    borderRadius: "50px",
  }}
>
  <Typography
    sx={{
      fontSize: "1rem",
      color: "#111213",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      textDecoration: "none", // Ensures no underline
    }}
  >
    Learn More
  </Typography>
</StoreButton>

          {/* <StoreButton
            sx={{
              pt: 2,
              pr: 5,
              pl: 5,
              pb: 1.5,
              backgroundColor: "#ffffff",
              borderRadius: "50px",
            }}
            href="#"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://cdn.prod.website-files.com/62da6b5f754c761cc1b0de4b/62e02d6615cfc41079ebc5a4_Google%20Play.svg"
              alt="Get it on Google Play"
            />
          </StoreButton> */}
        </Box>
      </Container>

      <Box
        sx={{
          py: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
              flexWrap: "wrap",
            }}
          >
            <FooterLink href="#">Powered by DSHG SONIC</FooterLink>
            {/* <FooterLink href="#">Made by </FooterLink> */}
            {/* <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Style Guide</FooterLink>
            <FooterLink href="#">Changelog</FooterLink> */}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AppHero;
