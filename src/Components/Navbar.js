import React from 'react'

import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import ApartmentIcon from '@mui/icons-material/Apartment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import { useState } from "react";

const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>,
        },
        {
            text:"About",
            icon:<InfoIcon/>,
        },
        {
            text:"Vision",
            icons:<RemoveRedEyeIcon/>
        },
        {
            text:"Tokenomics",
            icons:<ApartmentIcon/>,
        },
        {
            text:"Road Map",
            icons:<ApartmentIcon/>,
        },
        {
            text:"Community",
            icons:<ApartmentIcon/>,
        },
    ]

  return (
   <nav>
    <div className="nav-logo-container">
        <h1> kekw </h1>
    </div>
    <ul className="navbar-links-container">
      
        <a href="/" target="_blank"> Home </a>
        <a href="/about" target="_blank"> About </a>
        <a href="/vision" target="_blank"> Vision </a>
        <a href="/token" target="_blank"> Tokenomics </a>
        <a href="/road map" target="_blank"> Road Map</a>
        <a href="/community" target="_blank"> Community </a>

     <button className="primary-button"> Buy Now! </button>
    </ul>
    <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
      <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpenMenu(false)}
      onKeyDown={() => setOpenMenu(false)}
      >
        <List>
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>  
    </Drawer>
   </nav>  
  )
}

export default Navbar