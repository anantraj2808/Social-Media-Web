import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const LeftBarListItem = ({component, href, buttonText, icon}) => {
  return (
    <ListItem disablePadding>
            <ListItemButton component = {component} href={href}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={buttonText} />
            </ListItemButton>
          </ListItem>
  )
}

export default LeftBarListItem
