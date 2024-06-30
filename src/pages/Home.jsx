import React from "react";
import image from "../assets/crop.png";
import crop1 from "../assets/crop1.jpg";
import crop2 from "../assets/crop2.jpg";
import crop3 from "../assets/crop3.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Herosection() {
  const Leftcontent = (
    <Grid
      item
      container
      md={6}
      xs={12}
      alignItems="center"
      sx={{ position: "relative" }}
    >
      <img
        src={image}
        style={{
          position: "relative",
          opacity: 0.7,
          maxWidth: "70%",
          maxHeight: "70%",
          top: "-150px",
          left: "50px",
        }}
        alt="centered image"
      />
      <Typography
        variant="h4"
        sx={{
          lineHeight: 1.25,
          fontFamily: "ui-rounded",
          fontWeight: 540,
          mt: 2,
          marginTop: "-400px",
        }}
      >
        Harness the power of AI to optimize agricultural yield by receiving
        personalized crop recommendations tailored to your specific soil
        conditions and climate variables.
      </Typography>
    </Grid>
  );

  const Rightcontent = (
    <Grid
      item
      container
      md={6}
      xs={12}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          width: "70%",
          height: "80%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
          <div>
            <img
              src={crop1}
              alt="Crop 1"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>
          <div>
            <img
              src={crop2}
              alt="Crop 2"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>
          <div>
            <img
              src={crop3}
              alt="Crop 3"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>
        </Carousel>
      </Box>
    </Grid>
  );

  return (
    <Grid container spacing={{ xs: 15, md: 2 }} sx={{ flexGrow: 1 }}>
      {Leftcontent}
      {Rightcontent}
    </Grid>
  );
}

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        pt: 1,
        pr:0,
        bgcolor: "#FDFAF0",
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Hero */}
      <Herosection />
    </Box>
  );
};

export default Home;
