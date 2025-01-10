import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Makhana Export",
      description:
        "We specialize in exporting premium-quality Makhana, ensuring freshness and nutritional value in every shipment.",
      icon: "🌰",
    },
    {
      id: 2,
      title: "Corn Export & Import",
      description:
        "Our company facilitates the export and import of high-quality corn, meeting international standards for food and agriculture.",
      icon: "🌽",
    },
    {
      id: 3,
      title: "Rice Export",
      description:
        "We deliver superior-grade rice varieties, including basmati and non-basmati, to clients across the globe.",
      icon: "🍚",
    },
    {
      id: 4,
      title: "Walnuts Export",
      description:
        "Our export services ensure the delivery of premium-grade walnuts, rich in flavor and nutrients, to international markets.",
      icon: "🥜",
    },
  ];

  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(to bottom right, #0a1128, #001f54)', color: "#fff" }}>
      {/* Header Section */}
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: 2 }}
      >
        Our Services
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Delivering Quality Through Export and Import Excellence
      </Typography>
      <Typography align="center">
        We take pride in our commitment to providing top-notch export and import services for agricultural products.
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={6} key={service.id}>
            <Paper
              elevation={0}
              sx={{
                padding: 3,
                textAlign: "left",
                backgroundColor: "transparent",
                borderRadius: 2,
                margin: 5,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                animation: "floating 4s ease-in-out infinite", // Add animation
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "24px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {service.id < 10 ? `0${service.id}` : service.id}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#fff",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 1,
                  color: "#fff",
                }}
              >
                {service.icon} {service.title}
              </Typography>
              <Typography
                sx={{
                  opacity: 0.8,
                  fontSize: "14px",
                  color: "#fff",
                }}
              >
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add the floating animation */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px); /* Move slightly up */
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default OurServices;
