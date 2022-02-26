import { AppBar, Box, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

const leftLinks = [
    {title: 'portfolio', path: '/catalog'},
    {title: 'shop', path: '/shop'}
]

const rightLinks = [
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const navStyles = {
    color: 'inherit', 
    typography: 'h6',
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
                                {title.toUpperCase()}
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
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>   
    )
    
}