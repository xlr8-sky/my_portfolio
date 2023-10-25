import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TypographyCss } from "./HeroCss";
// import man from "../assets/man2.jfif";
function Hero() {
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={6}
            sx={{
              height: "90vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{ backgroundColor: "#0CBBA0", width: "150px" }}
            >
              Hello I'm
            </Button>
            <Typography variant="h3" sx={{ fontWeight: "750", mt: 3, mb: 1 }}>
              Akash Kumar Das
            </Typography>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Web developer
            </Typography>
            <Box
              sx={{
                height: "120px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1" sx={TypographyCss}>
                <EmailIcon sx={{ mr: 1 }} />
                akashmango.2001@gmail.com
              </Typography>
              <Typography variant="subtitle1" sx={TypographyCss}>
                <LocalPhoneIcon sx={{ mr: 1 }} />
                +91 6203176003
              </Typography>
              <Typography variant="subtitle1" sx={TypographyCss}>
                <LocationOnIcon sx={{ mr: 1 }} />
                Jamshedpur, Jharkhand, India
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
              }}
            >
              <FacebookIcon />
              <InstagramIcon />
              <GitHubIcon />
              <LinkedInIcon />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
