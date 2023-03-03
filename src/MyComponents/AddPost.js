//@ts-check
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddPost = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.default",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);

  const Userbox = styled(Box)(({ theme }) => ({
    gap: "10px",
    alignItems: "center",
    display: "flex",
    marginBottom: "15px",
  }));

  return (
    <>
      <Tooltip
        title="Add post"
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "45%",
            sm: 30,
          },
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} borderRadius={5}>
          <Typography variant="h5" color="gray" textAlign="center" mb={2}>
            Create Post
          </Typography>
          <Userbox>
            <Avatar
              alt="Anant Raj"
              src="https://pps.whatsapp.net/v/t61.24694-24/312290331_549719903418158_3724839605484474866_n.jpg?ccb=11-4&oh=01_AdQXEiA7hML59J2XqQDP6yLmtImqY5al5-5431FJUhqMWg&oe=640B0EEA"
            />
            <Typography color={"text.primary"} fontWeight = "500">Anant Raj</Typography>
          </Userbox>
          <TextField
            sx={{ width: "100%", marginBottom: "10px" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack gap={1} direction="row" mb={5}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="error" />
            <PersonAdd color="success" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{width: "100%"}}
          >
            <Button sx={{width: "80%"}}>Post</Button>
            <Button sx={{width: "20%"}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
