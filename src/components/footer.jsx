// import React from "react";
// import { Box, Container, Typography, Link } from "@mui/material";
// import { styled, keyframes } from "@mui/material/styles";
// import QRCode from "react-qr-code"; // Import QRCode
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaTiktok,
// } from "react-icons/fa";
// const moveAndResize1 = keyframes`
//   0% { transform: translate(-20%, 0) scale(1); }
//   50% { transform: translate(10%, -20%) scale(1.3); }
//   100% { transform: translate(-20%, 0) scale(1); }
// `;

// const moveAndResize2 = keyframes`
//   0% { transform: translate(0, 0) scale(1); }
//   50% { transform: translate(-10%, 10%) scale(1.2); }
//   100% { transform: translate(0, 0) scale(1); }
// `;

// const moveAndResize3 = keyframes`
//   0% { transform: translate(-10%, 0) scale(1); }
//   50% { transform: translate(10%, -10%) scale(1.4); }
//   100% { transform: translate(-10%, 0) scale(1); }
// `;

// const moveAndResize4 = keyframes`
//   0% { transform: translate(0, 10%) scale(1); }
//   50% { transform: translate(-20%, -10%) scale(1.1); }
//   100% { transform: translate(0, 10%) scale(1); }
// `;

// const moveAndResize5 = keyframes`
//   0% { transform: translate(20%, -20%) scale(1); }
//   50% { transform: translate(-10%, 10%) scale(1.2); }
//   100% { transform: translate(20%, -20%) scale(1); }
// `;

// const GradientBackground = styled(Box)(({ animation }) => ({
//   position: "absolute",
//   bottom: 0,
//   left: "50%",
//   transform: "translateX(-50%)",
//   width: "300px",
//   height: "300px",
//   opacity: 1,
//   filter: "blur(40px)",
//   borderRadius: "50%",
//   zIndex: 0,
//   animation: `${animation} 10s infinite ease-in-out`,
// }));

// const StoreButton = styled(Link)(() => ({
//   display: "inline-block",
//   transition: "transform 0.2s ease-in-out",
//   textDecoration: "none", // Ensure no underline
//   "&:hover": {
//     transform: "scale(1.05)",
//   },
//   "& img": {
//     height: "48px",
//     width: "auto",
//   },
// }));

// const FooterLink = styled(Link)(() => ({
//   color: "rgba(0, 0, 0, 0.6)",
//   textDecoration: "none",
//   "&:hover": {
//     color: "rgba(0, 0, 0, 0.8)",
//     textDecoration: "none",
//   },
// }));

// const AppHero = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "#f3f3f3",
//         position: "relative",
//         minHeight: { xs: "100vh", sm: "50vh", md: "80vh", lg: "70vh" }, // Full height on small screens, reduced height on larger screens
//         overflow: "hidden",
//         display: "flex",
//         flexDirection: "column",
//         padding: { xs: 2, md: 4, lg: 1 }, // Add responsive padding
//       }}
//     >
//       {/* Animated background gradients */}
//       <GradientBackground
//         sx={{ background: "#aaeaf8", bottom: "-9%", left: "20%" }}
//         animation={moveAndResize1}
//       />
//       <GradientBackground
//         sx={{ background: "#f1904f", bottom: "0%", left: "34%" }}
//         animation={moveAndResize2}
//       />
//       <GradientBackground
//         sx={{ background: "#85aee9", bottom: "1%", left: "50%" }}
//         animation={moveAndResize3}
//       />
//       <GradientBackground
//         sx={{ background: "#f179a9", bottom: "1%", left: "65%" }}
//         animation={moveAndResize4}
//       />
//       <GradientBackground
//         sx={{ background: "#f7cb6d", bottom: "-9%", left: "81%" }}
//         animation={moveAndResize5}
//       />

//       <Container
//         maxWidth="lg"
//         sx={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           py: 1,
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <Box
//           component="img"
//           src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Welike Logo"
//           sx={{
//             borderRadius: "50%",
//             objectFit: "cover",
//             width: "125px",
//             height: "125px",
//             mb: 4,
//           }}
//         />

//         <Typography
//           sx={{
//             fontSize: { xs: "2.5rem", md: "4.2rem" },
//             fontWeight: "bold",
//             mb: 4.5,
//             maxWidth: "900px",
//             lineHeight: 1.1,
//             letterSpacing: "-0.02em",
//             color: "#111213", // Default color for the rest of the text
//             fontFamily: "montserrat",
//           }}
//         >
//           Join our pre-launch waitlist!
//         </Typography>

//         <Typography
//           variant="h2"
//           sx={{
//             fontSize: { xs: "1.25rem", md: "1.3rem" },
//             color: "rgba(0, 0, 0, 0.6)",
//             mb: 5,
//             fontWeight: "normal",
//           }}
//         >
//           Join our waitlist and be the first to save money and time on your
//           tourism cross-border payments!
//         </Typography>

//         {/* QR Code Section */}
//         <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
//           <QRCode value="https://forms.gle/Y9BF3W8auqinFF5b9" size={128} />
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             flexWrap: "wrap",
//             justifyContent: "center",
//             mb: 8,
//           }}
//         >
//           <StoreButton
//             sx={{
//               pt: 2,
//               pr: 5,
//               pl: 5,
//               pb: 1.5,
//               backgroundColor: "#ffffff",
//               borderRadius: "50px",
//             }}
//           >
//             <a
//               href="https://forms.gle/Y9BF3W8auqinFF5b9"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ textDecoration: "none" }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "1rem",
//                   color: "#111213",
//                   fontWeight: 600,
//                   letterSpacing: "-0.02em",
//                   textDecoration: "none", // Ensures no underline
//                 }}
//               >
//                 Join our waitlist…
//               </Typography>
//             </a>
//           </StoreButton>
//         </Box>
//       </Container>

//       <Box sx={{ position: "relative", zIndex: 1 }}>
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               gap: { xs: 2, md: 6 },
//               flexWrap: "wrap",
//             }}
//           >
//             {/* Social Media Links with Icons */}
//             <FooterLink
//               href="https://www.facebook.com/xBordr"
//               target="_blank"
//               sx={{
//                 color: "#3b5998",
//                 fontSize: "1.2rem",
//                 display: "flex",
//                 flexDirection: "column", // Align icon above text
//                 alignItems: "center", // Center-align items
//               }}
//             >
//               <FaFacebook size={34} />
//               Facebook
//             </FooterLink>
//             <FooterLink
//               href="https://x.com/xbordrapp"
//               target="_blank"
//               sx={{
//                 color: "#1DA1F2",
//                 fontSize: "1.2rem",
//                 display: "flex",
//                 flexDirection: "column", // Align icon above text
//                 alignItems: "center", // Center-align items
//               }}
//             >
//               <FaTwitter size={34} />X
//             </FooterLink>
//             <FooterLink
//               href="https://www.instagram.com/xbordr"
//               target="_blank"
//               sx={{
//                 color: "#e4405f",
//                 fontSize: "1.2rem",
//                 display: "flex",
//                 flexDirection: "column", // Align icon above text
//                 alignItems: "center", // Center-align items
//               }}
//             >
//               <FaInstagram size={34} />
//               Instagram
//             </FooterLink>
//             <FooterLink
//               href="https://www.linkedin.com/company/xbordr"
//               target="_blank"
//               sx={{
//                 fontSize: "1.2rem",
//                 color: "#0077b5",
//                 display: "flex",
//                 flexDirection: "column", // Align icon above text
//                 alignItems: "center", // Center-align items
//               }}
//             >
//               <FaLinkedin size={34} />
//               LinkedIn
//             </FooterLink>

//             <FooterLink
//               href="https://www.tiktok.com/@xbordrapp"
//               target="_blank"
//               sx={{
//                 fontSize: "1.2rem",

//                 color: "#000000",
//                 display: "flex",
//                 flexDirection: "column", // Align icon above text
//                 alignItems: "center", // Center-align items
//               }}
//             >
//               <FaTiktok size={34} />
//               TikTok
//             </FooterLink>
//           </Box>

//           {/* Copyright Notice */}
//         </Container>
//         <Typography
//           sx={{
//             mt: 8,
//             textAlign: "center",
//             color: "rgba(0, 0, 0, 0.6)",
//             fontSize: "0.875rem",
//           }}
//         >
//           All rights reserved. Copyright xBordr, Inc. {new Date().getFullYear()}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default AppHero;


import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import QRCode from "react-qr-code";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

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
  textDecoration: "none",
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
        minHeight: { xs: "100vh", sm: "50vh", md: "80vh", lg: "70vh" },
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: { xs: 2, md: 4, lg: 1 },
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
          py: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welike Logo"
          sx={{
            borderRadius: "50%",
            objectFit: "cover",
            width: "125px",
            height: "125px",
            mb: 4,
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "2.5rem", md: "4.2rem" },
            fontWeight: "bold",
            mb: 4.5,
            maxWidth: "900px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#111213",
            fontFamily: "Montserrat, sans-serif", // Set Montserrat font

          }}
        >
          Join our pre-launch waitlist!
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
          Join our waitlist and be the first to save money and time on your
          tourism cross-border payments!
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <QRCode value="https://forms.gle/Y9BF3W8auqinFF5b9" size={128} />
        </Box>

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
            <a
              href="https://forms.gle/Y9BF3W8auqinFF5b9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#111213",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  textDecoration: "none",
                }}
              >
                Join our waitlist…
              </Typography>
            </a>
          </StoreButton>
        </Box>
      </Container>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* Social Media Links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 2, md: 6 },
                flexWrap: "wrap",
              }}
            >
              <FooterLink
                href="https://www.facebook.com/xBordr"
                target="_blank"
                sx={{
                  color: "#3b5998",
                  fontSize: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaFacebook size={34} />
                Facebook
              </FooterLink>
              <FooterLink
                href="https://x.com/xbordrapp"
                target="_blank"
                sx={{
                  color: "#1DA1F2",
                  fontSize: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaTwitter size={34} />X
              </FooterLink>
              <FooterLink
                href="https://www.instagram.com/xbordr"
                target="_blank"
                sx={{
                  color: "#e4405f",
                  fontSize: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaInstagram size={34} />
                Instagram
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/company/xbordr"
                target="_blank"
                sx={{
                  fontSize: "1.2rem",
                  color: "#0077b5",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaLinkedin size={34} />
                LinkedIn
              </FooterLink>
              <FooterLink
                href="https://www.tiktok.com/@xbordrapp"
                target="_blank"
                sx={{
                  fontSize: "1.2rem",
                  color: "#000000",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaTiktok size={34} />
                TikTok
              </FooterLink>

              <FooterLink
                href="mailto:hello@xbordr.com"
                target="_blank"
                sx={{
                  fontSize: "1.2rem",
                  color: "#e4405f",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaEnvelope size={34} />
                Email
              </FooterLink>
            </Box>

            {/* Email Link */}
            {/* <FooterLink
              href="mailto:hello@xbordr.com"
              sx={{
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "1rem",
                mb: 2,
                textAlign: "center",
                "&:hover": {
                  color: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              hello@xbordr.com
            </FooterLink> */}
          </Box>
        </Container>
        <Typography
          sx={{
            mt: 4,
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.875rem",
          }}
        >
          All rights reserved. Copyright xBordr, Inc. {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};

export default AppHero;