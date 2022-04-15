import { AppBar, Box, capitalize, List, ListItem, Switch, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

const leftLinks = [
    {title: 'Portfolio', path: '/catalog'},
    {title: 'Shop', path: '/shop'}
]

const rightLinks = [
    {title: 'About', path: '/about'},
    {title: 'Contact', path: '/contact'}
]

const navStyles = {
    color: '#008000', 
    typography: 'h4',
    '&:hover': {
        color: 'grey.700'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position='static' color='transparent' sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {/* <Switch checked={darkMode} onChange={handleThemeChange} /> */}
                <Box display='flex' alignItems='center'>    
                    <List sx={{display: 'flex'}}>
                        {leftLinks.map(({title, path}) =>(
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box display='flex' alignItems='center'>
                    <NavLink to={'/'}>
                        <img src='/images/Michelle%20Abrahall%20LOGO-02.png' alt='' width="200rem" />
                    </NavLink>
                </Box>
                <Box display='flex' alignItems='center'>
                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) =>(
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>   
    )
    
}