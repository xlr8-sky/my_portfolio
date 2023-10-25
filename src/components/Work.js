import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";

function Work() {
  const education = [
    {
      title: "Art & Multimedia From Oxford University",
      date: "2005-2008",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
    {
      title: "Art & Multimedia From Oxford University",
      date: "2005-2008",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
    {
      title: "Art & Multimedia From Oxford University",
      date: "2005-2008",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
  ];
  const workExp = [
    {
      title: "UI/UX Designer IronSketch",
      date: "2005-2008",
      responsibility: ["Validate CSS", "Project Management"],
    },
    {
      title: "UI/UX Designer IronSketch",
      date: "2005-2008",
      responsibility: ["Validate CSS", "Project Management"],
    },
    {
      title: "UI/UX Designer IronSketch",
      date: "2005-2008",
      responsibility: ["Validate CSS", "Project Management"],
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Education
              </Typography>
              {education.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      {item.description}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Work Experience
              </Typography>
              {workExp.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      <ul style={{ padding: "0 18px" }}>
                        {item.responsibility.map((list) => {
                          return <li>{list}</li>;
                        })}
                      </ul>
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Work;
