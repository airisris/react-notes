import * as React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Editor from "react-simple-wysiwyg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function HomePage() {
  // card
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Note 1
        </Typography>
        <Chip size="small" label="Idea" sx={{ my: "13px" }} />
        <Typography
          component="div"
          variant="caption"
          sx={{ color: "text.secondary" }}
        >
          Jul 21, 2025 9:43 AM
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <CreateIcon sx={{ width: "20px" }} /> Edit
        </Button>
        <Button size="small" color="error">
          <DeleteIcon sx={{ width: "20px" }} />
          Delete
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Container
      maxWidth="md"
      sx={{ py: "20px", minHeight: "80vh", width: "100vw" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          mt: "20px",
        }}
      >
        <Box>
          <Typography variant="h4">All Notes (2)</Typography>
        </Box>
        <Box>
          <FormControl sx={{ minWidth: "160px", pr: "10px" }} size="small">
            <InputLabel id="demo-select-small-label">Category</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
            >
              <MenuItem selected value={10}>
                All Categories
              </MenuItem>
              <MenuItem value={20}>Work</MenuItem>
              <MenuItem value={30}>Personal</MenuItem>
              <MenuItem value={40}>Idea</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "160px" }} size="small">
            <InputLabel id="demo-select-small-label">Sort By</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
            >
              <MenuItem value={10}>Last Updated</MenuItem>
              <MenuItem value={20}>Title</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          py: "20px",
          display: "flex",
          justifyContent: "flex-start",
          gap: "25px",
        }}
      >
        <Box sx={{ maxWidth: "170px" }}>
          <Card>{card}</Card>
        </Box>
        <Box sx={{ maxWidth: "170px" }}>
          <Card>{card}</Card>
        </Box>
      </Box>
      <Fab color="primary" aria-label="add" sx={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default HomePage;
