import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";
import axios from "axios";

const Predictpage = () => {
  const [formData, setFormData] = useState({
    Nitrogen: "",
    Phosphorus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    pH: "",
    Rainfall: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: parseFloat(e.target.value) || "",
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setResult(response.data.result);
      setError(null);
    } catch (error) {
      console.error("There was an error making the request:", error);
      setError("Error making prediction. Please try again.");
      setResult(null);
    }
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
            {Object.keys(formData).map((key) => (
              <Grid item xs={12} sm={6} key={key}>
                <TextField
                  fullWidth
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  variant="outlined"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  InputProps={{
                    sx: {
                      borderRadius: "10px",
                      fontFamily: "ui-sans-serif",
                      fontWeight: 700,
                      borderWidth: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: 2,
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "ui-sans-serif",
                      fontWeight: 700,
                    },
                  }}
                />
              </Grid>
            ))}
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
        {result && (
          <Typography variant="h6" sx={{ mt: 2, color: "green" }}>
            {result}
          </Typography>
        )}
        {error && (
          <Typography variant="h6" sx={{ mt: 2, color: "red" }}>
            {error}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Predictpage;
