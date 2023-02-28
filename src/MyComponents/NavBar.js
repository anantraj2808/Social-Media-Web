import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LiquorIcon from "@mui/icons-material/Liquor";
import { Mail, Notifications } from "@mui/icons-material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const IconsForWeb = styled(Box)(({ theme }) => ({
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    },
    display: "none", 
  }));

  const UserboxForMobile = styled(Box)(({ theme }) => ({
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    } ,
    display: "flex",
  }));

  const [open, setopen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <LiquorIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          SOCIAL MEDIA
        </Typography>
        <Search sx={{
            display: {
                xs: "none",
                sm: "block"
            }
        }}>
          <InputBase placeholder="Search..." />
        </Search>
        <IconsForWeb>
          <Badge badgeContent={8} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              height: 30,
              width: 30,
            }}
            onClick={e=>setopen(true)}
            src="https://pps.whatsapp.net/v/t61.24694-24/312290331_549719903418158_3724839605484474866_n.jpg?ccb=11-4&oh=01_AdQXEiA7hML59J2XqQDP6yLmtImqY5al5-5431FJUhqMWg&oe=640B0EEA"
          />
        </IconsForWeb>
        <UserboxForMobile onClick={e=>setopen(true)}>
          <Avatar
            sx={{
              height: 30,
              width: 30,
            }}
            src="https://pps.whatsapp.net/v/t61.24694-24/312290331_549719903418158_3724839605484474866_n.jpg?ccb=11-4&oh=01_AdQXEiA7hML59J2XqQDP6yLmtImqY5al5-5431FJUhqMWg&oe=640B0EEA"
          />
          <Typography>Anant</Typography>
        </UserboxForMobile>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
