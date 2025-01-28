import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const ChallengeSection = () => {
  return (
    <Box
      sx={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
        py: 8,
      }}
    >
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 4,
              color: '#1a202c',
              textTransform: 'uppercase',
            }}
          >
            The Challenge
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mb: 6,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Cross-border payments are plagued by volatile exchange rates, high
            fees, and lengthy processing times, creating friction for businesses.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    py: 6,
                    px: 4,
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      color: '#3b82f6',
                      mb: 2,
                    }}
                  >
                    $30-50
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: '1rem',
                    }}
                  >
                    Average cost for international wire transfers
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    py: 6,
                    px: 4,
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      color: '#3b82f6',
                      mb: 2,
                    }}
                  >
                    1-5 DAYS
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: '1rem',
                    }}
                  >
                    Processing time for international wire transfers
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
};

export default ChallengeSection;
