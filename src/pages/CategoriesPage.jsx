import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

function CategoriesPage() {
  return (
    <Container
      maxWidth="md"
      sx={{ py: "40px", minHeight: "80vh", width: "100vw" }}
    >
      <Typography variant="h4">Manage Categories</Typography>
      <Paper elevation={3} sx={{ p: "20px", mt: "20px" }}>
        <Typography variant="h6">Add New Category</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            mt: "20px",
          }}
        >
          <TextField
            fullWidth
            id="category_name"
            label="Category Name"
            variant="outlined"
          />
          <Button color="primary" variant="contained">
            Add
          </Button>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: "20px", mt: "20px" }}>
        <Typography variant="h6">Existing Categories (3)</Typography>
        <List
          sx={{
            py: "10px",
            width: "100%",
            borderColor: "divider",
            backgroundColor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemText primary="Personal" />
            <Button color="light">
              <CreateIcon />
            </Button>
            <Button color="light">
              <DeleteIcon />
            </Button>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Work" />
            <Button color="light">
              <CreateIcon />
            </Button>
            <Button disabled color="light">
              <DeleteIcon />
            </Button>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Idea" />
            <Button color="light">
              <CreateIcon />
            </Button>
            <Button disabled color="light">
              <DeleteIcon />
            </Button>
          </ListItem>
          <Divider component="li" />
        </List>
      </Paper>
    </Container>
  );
}

export default CategoriesPage;
