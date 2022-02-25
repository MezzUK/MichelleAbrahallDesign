import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
        <AppBar position='static' color='transparent' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    Michelle Abrahall Design
                </Typography>
            </Toolbar>
        </AppBar>   
    )
    
}