import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Logo from "../assets/logo.png";
const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const menuItems = [
    // "Home",
  ];

  const [elevated, setElevated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Add event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(243, 243, 243, 0.8)",
          backdropFilter: "blur(25px)",
          transition: "box-shadow 0.3s ease",
          boxShadow: elevated ? "0px 1px 3px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box display="flex" alignItems="center">
              {/* Logo */}
              <Box
                component="img"
                src={Logo}
                alt="xBordr Logo"
                sx={{
                  height: { xs: 56, sm: 70, md: 93 },
                  width: { xs: 80, sm: 100, md: 137 },
                  objectFit: "contain",
                }}
              />

              {/* Text */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  color: "#000000",
                  background: "#0077B3",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  // textTransform: "uppercase",
                  letterSpacing: "0.1rem",
                }}
              >
                xBordr
              </Typography>
            </Box>

            {/* Desktop Navigation and Download Button */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                {/* Menu Items */}
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "text.secondary",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 500,
                      "&:hover": {
                        color: "text.primary",
                        background: "transparent",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}

                {/* Download Button */}
                {/* <Button
                  variant="contained"
                  endIcon={<Download size={20}/>} // Add this line for the download icon
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    textTransform: "none",
                    px: 3,
                    py: 1,
                    borderRadius: "50px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.8)",
                    },
                  }}
                >
                  Download
                </Button> */}
              </Box>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <IconButton onClick={toggleDrawer(true)} sx={{ color: "black" }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "30%",
            padding: 2,
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={Logo}
            alt="Welike Logo"
            sx={{
              height: 100,
              width: "auto",
              mb: 3,
            }}
          />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={toggleDrawer(false)}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "black",
              color: "white",
              textTransform: "none",
              width: "90%",
              px: 3,
              py: 1,
              mt: 2,
              borderRadius: "50px",
              fontSize: "0.875rem",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
              },
            }}
          >
            Download
          </Button> */}
        </Box>
      </Drawer>
    </>
  );
};

export default Hero;
