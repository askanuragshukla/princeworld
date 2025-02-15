import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const floatAnimation = {
  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-10px)" },
    "100%": { transform: "translateY(0px)" }
  }
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🌍",
      title: "Global Reach",
      description:
        "We deliver the finest agricultural products to markets worldwide, ensuring seamless logistics and premium quality.",
      delay: "0s"
    },
    {
      icon: "🌾",
      title: "Premium Quality",
      description:
        "Our Makhana, Flavored Makhana, Rice, Pulses, and Maize are sourced from the best farms, ensuring high nutritional value and freshness.",
      delay: "0.3s"
    },
    {
      icon: "🌱",
      title: "Sustainable Trade",
      description:
        "Committed to ethical sourcing and sustainable farming, we support farmers while delivering excellence to customers globally.",
      delay: "0.6s"
    },
    {
      icon: "🚛",
      title: "Fast & Reliable Shipping",
      description:
        "Our logistics network ensures on-time and safe delivery of products worldwide, making trade hassle-free.",
      delay: "0.9s"
    },
    {
      icon: "✅",
      title: "Certified & Trusted",
      description:
        "We adhere to international standards, providing certified agricultural products with unmatched quality.",
      delay: "1.2s"
    },
    {
      icon: "🤝",
      title: "Customer-Centric Approach",
      description:
        "Our focus is on building long-term relationships with customers by providing top-tier service and reliability.",
      delay: "1.5s"
    }
  ];

  return (
    <Box
      sx={{
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 10 },
        textAlign: "center",
        bgcolor: "#F7F3F3", // Subtle off-white background
        borderRadius: "10px", // Soft edges for a modern feel
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "#4A2C2C", // Thematic color
          mb: 4,
        }}
      >
       
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              textAlign: "center",
              mt: index >= 3 ? { xs: 4, md: 6 } : 0 // Adds spacing to second row
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 1,
                animation: "float 3s infinite ease-in-out",
                animationDelay: feature.delay,
                ...floatAnimation,
                color: "#4A2C2C", // Icon color
              }}
            >
              {feature.icon}
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                animation: "float 3s infinite ease-in-out",
                animationDelay: feature.delay,
                ...floatAnimation,
                color: "#4A2C2C", // Title color
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                animation: "float 3s infinite ease-in-out",
                animationDelay: feature.delay,
                ...floatAnimation,
                color: "#333", // Keeps text readable with slight contrast
              }}
            >
              {feature.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
