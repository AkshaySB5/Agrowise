import React from "react";
import { Box, Typography, Link, Stack, Container } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        pt: 15,
        bgcolor: "#FDFAF0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundSize: "cover",
        justifyContent:"inherit"
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "#FDFAF0",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "ui-rounded",
            fontWeight: 800,
            mb: 4,
            textAlign: "center",
            color: "black",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.7,
            fontFamily: "ui-rounded",
            fontWeight: 400,
            fontSize: 23,
            textAlign: "center",
            color: "#444",
            mb: 4,
          }}
        >
          CroPredict is an innovative project aimed at leveraging the power of
          artificial intelligence to optimize agricultural yields. By analyzing
          specific soil conditions and climate variables, our AI provides
          personalized crop recommendations to farmers. Our goal is to enhance
          sustainable farming practices and increase productivity for a better
          future.
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          sx={{ justifyContent: "center", mt: 4 }}
        >
          <Link
            href="mailto:akshaysureshbabu135@gmail.com"
            underline="hover"
            sx={{
              fontSize: "1.25rem",
              fontFamily: "ui-sans-serif",
              color: "#007BFF",
              fontWeight: "bold",
              transition: "color 0.3s",
              ":hover": { color: "#0056b3" },
            }}
          >
            Email Us
          </Link>
          <Link
            href="tel:+1234567890"
            underline="hover"
            sx={{
              fontSize: "1.25rem",
              fontFamily: "ui-sans-serif",
              color: "#007BFF",
              fontWeight: "bold",
              transition: "color 0.3s",
              ":hover": { color: "#0056b3" },
            }}
          >
            Call Us
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
