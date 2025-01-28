import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import BusinessIcon from "@mui/icons-material/Business";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MailLock, MailOutline, Person2Rounded } from "@mui/icons-material";

const Background = styled(Box)({
  backgroundImage: `url('https://images.unsplash.com/photo-1720931623686-588ef1014e2a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "60px 0",
});

const GlassCard = styled(Paper)({
  background: "rgba(30, 30, 30, 0.9)",
  backdropFilter: "blur(8px)",
  borderRadius: "20px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
  padding: "40px",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.7)",
  },
});

const StyledButton = styled(Button)({
  background: "linear-gradient(135deg, #333333, #444444)",
  color: "#f5f5f5",
  padding: "12px 36px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "30px",
  textTransform: "none",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(135deg, #444444, #555555)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
  },
});

const InfoRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  "& svg": {
    color: "#fff", // Gold accent for icons
    marginRight: "16px",
    fontSize: "28px",
  },
});

const Contact = () => {
  return (
    <Background>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          {/* Contact Information Section */}
          <Grid item xs={12} md={4}>
            <GlassCard>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: "20px",
                 // textTransform: "uppercase",
                }}
              >
                Get in Touch with us
              </Typography>
              <Typography
                variant="p"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: "20px",
                 // textTransform: "uppercase",
                }}
              >
                Contact us here
              </Typography>
              <InfoRow>
                <BusinessIcon />
                <Typography variant="body1" color="text.secondary" sx={{ color: "#e0e0e0" }}>
                  Prince world Exim
                </Typography>
              </InfoRow>
              <InfoRow>
                <MailOutlineIcon />
                <Typography variant="body1" color="text.secondary" sx={{ color: "#e0e0e0" }}>
                info@princeworldexim.com
                </Typography>
              </InfoRow>
              <InfoRow>
                <Person2Rounded />
                <Typography variant="body1" color="text.secondary" sx={{ color: "#e0e0e0" }}>
                ramsagarsharma1985@gmail.com
                </Typography>
              </InfoRow>
              <InfoRow>
                <PhoneInTalkIcon />
                <Typography variant="body1" color="text.secondary" sx={{ color: "#e0e0e0" }}>
                  +91 9920580308 | 7039712825
                </Typography>
              </InfoRow>
              <InfoRow>
                <LocationOnIcon />
                <Typography variant="body1" color="text.secondary" sx={{ color: "#e0e0e0" }}>
                  Office No. 303, Mayuresh Cosmos, Plot No. 37, Sector -11, CBD Belapuer, Navi Mumbai - 400614
                    </Typography>
              </InfoRow>
            </GlassCard>
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} md={8}>
            <GlassCard>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                }}
              >
                Send Us a Message
              </Typography>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledButton variant="contained" type="submit">
                      Submit
                    </StyledButton>
                  </Grid>
                </Grid>
              </form>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>
    </Background>
  );
};

export default Contact;
