import { AccountBoxSharp, DarkMode, Drafts, Home, LocalGroceryStore, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material'
import React from 'react'
import LeftBarListItem from './LeftBarListItem'

const LeftBar = ({setMode, mode}) => {
  return (
    <Box flex={1.5} p={2} sx={{display:{
        xs: "none",
        sm: "block"
    }}}>
      <Box position='fixed'>
      <List>
          <LeftBarListItem component='a' href='#home' buttonText='Home' icon={<Home/>}/>
          <LeftBarListItem component='a' href='#inbox' buttonText='Inbox' icon={<Drafts/>}/>
          <LeftBarListItem component='a' href='#settings' buttonText='Settings' icon={<Settings/>}/>
          <LeftBarListItem component='a' href='#marketplace' buttonText='Marketplace' icon={<LocalGroceryStore/>}/>
          <LeftBarListItem component='a' href='#profile' buttonText='Profile' icon={<AccountBoxSharp/>}/>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch onChange={e=> setMode(mode === "light" ? "dark" : "light")}></Switch>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default LeftBar
