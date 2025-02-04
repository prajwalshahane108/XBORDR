import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaStar } from "react-icons/fa";


// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "20px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const ReviewTag = styled(Typography)(({ theme }) => ({
  backgroundColor: "rgba(100, 150, 255, 0.1)",
  color: "#4B8BF4",
  padding: "6px 16px",
  borderRadius: "20px",
  display: "inline-block",
  marginBottom: theme.spacing(2),
  fontWeight: 500,
}));

const StarRating = styled(Box)({
  display: "flex",
  marginBottom: "16px",
  "& .MuiSvgIcon-root": {
    color: "#FF9F43",
    fontSize: "20px",
  },
});

// Review data (no need for a map)
const reviews = [
  {
    id: 1,
    text: "xBordr has completely transformed the way we handle cross-border payments. The low fees and instant processing times are a game-changer for our tourism business.",
    author: "– Emma Johnson",
    handle: "Travel Agency Owner",
  },
  {
    id: 2,
    text: "We no longer worry about volatile exchange rates or high transaction fees. xBordr made it incredibly easy for us to accept international payments seamlessly.",
    author: "– David Green",
    handle: "Hotel Manager",
  },
  {
    id: 3,
    text: "The platform is so intuitive and secure. It’s saved us hours of manual reconciliation, and our customers love the transparent currency conversion.",
    author: "– Sophia Martinez",
    handle: "Tour Operator",
  },
  {
    id: 4,
    text: "Using xBordr for our cross-border transactions has been a breeze. The blockchain-based system is fast, secure, and affordable. Highly recommend it to anyone in the tourism industry.",
    author: "– Liam Carter",
    handle: "Restaurant Owner",
  },
  {
    id: 5,
    text: "xBordr’s multilingual support and real-time data analytics helped us better understand our clients’ spending patterns and adjust our offerings to meet their needs.",
    author: "– Olivia Smith",
    handle: "Luxury Cruise Manager",
  },
  {
    id: 6,
    text: "Finally, a payment solution that understands the unique challenges of the tourism sector! xBordr has simplified everything for us, from FX conversions to fraud protection.",
    author: "– Noah Patel",
    handle: "Adventure Tour Operator",
  },
];

const ReviewsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f3f3",
        padding: { xs: 3, md: 8 },
        textAlign: "center",
      }}
    >
      <ReviewTag>Reviews</ReviewTag>

      <Box textAlign="center" mb={6}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", }}
        >
          What clients say
          <br />
          about us
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} md={6} lg={4} >
          <StyledCard>
            <CardContent sx={{ pt: 4, pb: 5 }}>
              <StarRating sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} fill="#FF9F43" />
                ))}
              </StarRating>

              <Typography
                sx={{
                  color: "#666",
                  marginBottom: 3,
                  lineHeight: 1.6,
                  fontSize: "16px",
                  minHeight: "80px",
                }}
              >
                "{reviews[0].text}"
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  marginBottom: 0.5,
                }}
              >
                {reviews[0].author}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                }}
              >
                {reviews[0].handle}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard sx={{pb: 5}}>
            <CardContent sx={{ p: 4,  }}>
            <StarRating sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} fill="#FF9F43" />
                ))}
              </StarRating>

              <Typography
                sx={{
                  color: "#666",
                  marginBottom: 3,
                  lineHeight: 1.6,
                  fontSize: "16px",
                  minHeight: "80px",
                }}
              >
                "{reviews[1].text}"
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  marginBottom: 0.5,
                }}
              >
                {reviews[1].author}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                }}
              >
                {reviews[1].handle}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <CardContent sx={{ p: 4 }}>
            <StarRating sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} fill="#FF9F43" />
                ))}
              </StarRating>

              <Typography
                sx={{
                  color: "#666",
                  marginBottom: 3,
                  lineHeight: 1.6,
                  fontSize: "16px",
                  minHeight: "80px",
                }}
              >
                "{reviews[2].text}"
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  marginBottom: 0.5,
                }}
              >
                {reviews[2].author}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                }}
              >
                {reviews[2].handle}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <CardContent sx={{ p: 4 }}>
            <StarRating sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} fill="#FF9F43" />
                ))}
              </StarRating>

              <Typography
                sx={{
                  color: "#666",
                  marginBottom: 3,
                  lineHeight: 1.6,
                  fontSize: "16px",
                  minHeight: "80px",
                }}
              >
                "{reviews[3].text}"
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  marginBottom: 0.5,
                }}
              >
                {reviews[3].author}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                }}
              >
                {reviews[3].handle}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Card 5 */}
        <Grid item xs={12} md={6} lg={4} sx={{mt: 5}}>
          <StyledCard sx={{pb: 5}}>
            <CardContent sx={{ p: 4 }}>
            <StarRating sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} fill="#FF9F43" />
                ))}
              </StarRating>

              <Typography
                sx={{
                  color: "#666",
                  marginBottom: 3,
                  lineHeight: 1.6,
                  fontSize: "16px",
                  minHeight: "80px",
                }}
              >
                "{reviews[4].text}"
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  marginBottom: 0.5,
                }}
              >
                {reviews[4].author}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                }}
              >
                {reviews[4].handle}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Card 6 */}
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <CardContent sx={{ p: 4 }}>
            <StarRating sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} fill="#FF9F43" />
                ))}
              </StarRating>

              <Typography
                sx={{
                  color: "#666",
                  marginBottom: 3,
                  lineHeight: 1.6,
                  fontSize: "16px",
                  minHeight: "80px",
                }}
              >
                "{reviews[5].text}"
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  marginBottom: 0.5,
                }}
              >
                {reviews[5].author}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                }}
              >
                {reviews[5].handle}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewsSection;
