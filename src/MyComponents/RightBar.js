//@ts-check
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {

    const imageData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  }
];

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup
          max={7}
          sx={{
            alignContent: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://pps.whatsapp.net/v/t61.24694-24/315783367_657209709383838_7244379326199632538_n.jpg?ccb=11-4&oh=01_AdRIpc9WfYC5DpAbBYm9l-2XcYmh2TJ19zzeN6EycRhsCQ&oe=640AD9B5"
          />
          <Avatar
            alt="Travis Howard"
            src="https://pps.whatsapp.net/v/t61.24694-24/315802512_1555352871556626_1877552826029469761_n.jpg?ccb=11-4&oh=01_AdRi1wwC63pySzzCXOetSe_hHCxK0qnrtnNfVuhPJz6JPA&oe=640AB9DE"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://pps.whatsapp.net/v/t61.24694-24/325966863_1819317131769908_125475408868171582_n.jpg?ccb=11-4&oh=01_AdQR2PY-LfuVIdNwBXBAnzCss1gECaLwcYMz5uV_eNhPig&oe=640AB1CF"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://pps.whatsapp.net/v/t61.24694-24/323862528_734512838281235_2600304408773540253_n.jpg?ccb=11-4&oh=01_AdQq7Txjsr13vyhbY6WHBQyfRyT3yY4WsekjdeWP5NOBvQ&oe=640ABD58"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://pps.whatsapp.net/v/t61.24694-24/301402885_5834414429971017_2032393710778451207_n.jpg?ccb=11-4&oh=01_AdQIVBFx3p_ilNdPJ7s3T65oWNMyAX8rS2fpMu4ILRlCMw&oe=640AD023"
          />
          <Avatar alt="Remy Sharp" src="https://pps.whatsapp.net/v/t61.24694-24/312290331_549719903418158_3724839605484474866_n.jpg?ccb=11-4&oh=01_AdQXEiA7hML59J2XqQDP6yLmtImqY5al5-5431FJUhqMWg&oe=640B0EEA" />
          <Avatar
            alt="Travis Howard"
            src="https://pps.whatsapp.net/v/t61.24694-24/315802512_1555352871556626_1877552826029469761_n.jpg?ccb=11-4&oh=01_AdRi1wwC63pySzzCXOetSe_hHCxK0qnrtnNfVuhPJz6JPA&oe=640AB9DE"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://pps.whatsapp.net/v/t61.24694-24/325966863_1819317131769908_125475408868171582_n.jpg?ccb=11-4&oh=01_AdQR2PY-LfuVIdNwBXBAnzCss1gECaLwcYMz5uV_eNhPig&oe=640AB1CF"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://pps.whatsapp.net/v/t61.24694-24/323862528_734512838281235_2600304408773540253_n.jpg?ccb=11-4&oh=01_AdQq7Txjsr13vyhbY6WHBQyfRyT3yY4WsekjdeWP5NOBvQ&oe=640ABD58"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://pps.whatsapp.net/v/t61.24694-24/301402885_5834414429971017_2032393710778451207_n.jpg?ccb=11-4&oh=01_AdQIVBFx3p_ilNdPJ7s3T65oWNMyAX8rS2fpMu4ILRlCMw&oe=640AD023"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mb={2} mt={2}>
          Gallery
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          {imageData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://pps.whatsapp.net/v/t61.24694-24/301402885_5834414429971017_2032393710778451207_n.jpg?ccb=11-4&oh=01_AdQIVBFx3p_ilNdPJ7s3T65oWNMyAX8rS2fpMu4ILRlCMw&oe=640AD023" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://pps.whatsapp.net/v/t61.24694-24/315802512_1555352871556626_1877552826029469761_n.jpg?ccb=11-4&oh=01_AdRi1wwC63pySzzCXOetSe_hHCxK0qnrtnNfVuhPJz6JPA&oe=640AB9DE" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://pps.whatsapp.net/v/t61.24694-24/325966863_1819317131769908_125475408868171582_n.jpg?ccb=11-4&oh=01_AdQR2PY-LfuVIdNwBXBAnzCss1gECaLwcYMz5uV_eNhPig&oe=640AB1CF" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default RightBar;
