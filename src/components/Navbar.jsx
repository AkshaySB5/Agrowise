import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { List } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#FDFAF0", padding: "10px 0" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} sm={4} md={4}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton>
              <List />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontFamily: "cursive",
                fontSize: "1.6rem",
                fontStyle:"oblique"


              }}
            >
              AgroWise
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={8} md={8} container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={2} sx={{ ml: 78 }}>
            <Button
              variant="contained"
              sx={{
                fontFamily: "ui-sans-serif",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                bgcolor: "black",
                ":hover": {
                  bgcolor: "#A0C655",
                },
              }}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                bgcolor: "black",
                fontFamily: "ui-sans-serif",
                ":hover": {
                  bgcolor: "#A0C655",
                },
              }}
              onClick={() => navigate("/predict")}
            >
              Predict
            </Button>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                bgcolor: "black",
                fontFamily: "ui-sans-serif",
                ":hover": {
                  bgcolor: "#A0C655",
                },
              }}
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
