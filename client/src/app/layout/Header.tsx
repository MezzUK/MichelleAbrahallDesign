import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

const leftLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'shop', path: '/shop'}
]

const rightLinks = [
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position='static' color='transparent' sx={{mb: 4}}>
            <Toolbar>
                <Switch checked={darkMode} onChange={handleThemeChange} />
                <List sx={{display: 'flex'}}>
                    {leftLinks.map(({title, path}) =>(
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{color: 'inherit', typography: 'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Typography variant='h6' component={NavLink} to={'/'} sx={{color: 'inherit', textDecoration: 'none'}}>
                    Michelle Abrahall Design
                </Typography>
                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) =>(
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{color: 'inherit', typography: 'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>   
    )
    
}