import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";

const Predictpage = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        pt: 1,
        bgcolor: "#FDFAF0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: "ui-rounded", fontWeight: 800, mb: 2 }}
      >
        Crop Recommendation
      </Typography>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: "600px",
          p: 4,
          borderRadius: "10px",
          bgcolor: "#FDFAF0",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nitrogen"
                variant="outlined"
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker text
                    borderWidth: 2, // Thicker border
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: 2,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker label text
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phosphorus"
                variant="outlined"
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker text
                    borderWidth: 2, // Thicker border
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: 2,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker label text
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Potassium"
                variant="outlined"
                name="potassium"
                value={formData.potassium}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker text
                    borderWidth: 2, // Thicker border
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: 2,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker label text
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Temperature"
                variant="outlined"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker text
                    borderWidth: 2, // Thicker border
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: 2,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker label text
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Humidity"
                variant="outlined"
                name="humidity"
                value={formData.humidity}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker text
                    borderWidth: 2, // Thicker border
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: 2,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker label text
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="pH"
                variant="outlined"
                name="ph"
                value={formData.ph}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker text
                    borderWidth: 2, // Thicker border
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: 2,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontFamily: "ui-sans-serif",
                    fontWeight: 700, // Thicker label text
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Rainfall"
                  variant="outlined"
                  name="rainfall"
                  value={formData.rainfall}
                  onChange={handleChange}
                  InputProps={{
                    sx: {
                      borderRadius: "10px",
                      fontFamily: "ui-sans-serif",
                      fontWeight: 700, // Thicker text
                      borderWidth: 2, // Thicker border
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: 2,
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "ui-sans-serif",
                      fontWeight: 700, // Thicker label text
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "black",
                  ":hover": { bgcolor: "#A0C655" },
                  color: "white",
                  padding: "6px 24px",
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                  fontFamily: "ui-sans-serif",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Predictpage;
