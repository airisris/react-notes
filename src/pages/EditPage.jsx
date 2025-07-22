import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Editor from "react-simple-wysiwyg";

function EditNotePage() {
  /*
    rule for form fields state: one state for one field
  */
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("Welcome to <b>Forward College</b>");

  return (
    <Container maxWidth="md" sx={{ py: "40px" }}>
      <Typography variant="h4">Edit Note</Typography>
      <Paper elevation={3} sx={{ p: "20px", mt: "20px" }}>
        <TextField
          fullWidth
          id="note_name"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <FormControl fullWidth sx={{ mt: "20px" }}>
          <InputLabel id="note_category_label">Category</InputLabel>
          <Select
            labelId="note_category_label"
            id="note_category"
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value={10}>Personal</MenuItem>
            <MenuItem value={20}>Work</MenuItem>
            <MenuItem value={30}>Idea</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ mt: "20px" }}>
          <Typography variant="body1" sx={{ mb: "10px" }}>
            Content
          </Typography>
          <Editor
            containerProps={{ style: { height: "300px" } }}
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            mt: "20px",
          }}
        >
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
          <Button component={RouterLink} to="/" variant="outlined">
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default EditNotePage;
