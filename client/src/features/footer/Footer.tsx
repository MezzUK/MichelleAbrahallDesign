import { Grid, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <>
        <Grid container direction="column" justifyContent="center" alignItems="center" color="white" bgcolor="black">
           <Grid item xs={6} sx={{ p: '1rem'}}>
                <Typography variant='h5' sx={{textAlign: 'center'}}>Get in touch to chat with me about your next project</Typography>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" direction="row" columnSpacing={2} sx={{ pb: '0.5rem' }}>
                <Grid item>
                    <Link variant='h6' color='white' target="_blank" rel="noreferrer" href='https://www.facebook.com/MichelleAbrahall' underline='none'><img src="/images/socialmedia/facebook.png" width="30rm"></img></Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' target="_blank" rel="noreferrer" href='https://twitter.com/MishAbrahall' underline='none'><img src="/images/socialmedia/twitter.png" width="30rm"></img></Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' target="_blank" rel="noreferrer" href='https://www.instagram.com/mish_abs/' underline='none'><img src="/images/socialmedia/instagram.png" width="30rm"></img></Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' target="_blank" rel="noreferrer" href='https://uk.linkedin.com/in/michelleabrahall' underline='none'><img src="/images/socialmedia/linkedin.png" width="30rm"></img></Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' target="_blank" rel="noreferrer" href='http://www.pinterest.com/mabrahall/' underline='none'><img src="/images/socialmedia/pinterest.png" width="30rm"></img></Link>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" direction="row" columnSpacing={10} sx={{ pb: '1rem' }}>
                <Grid item>
                    <Link variant='h6' color='white' href='/catalog' underline='none'>Illustration</Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' href='/catalog' underline='none'>Murals</Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' href='/catalog' underline='none'>Graphic Design</Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' href='/contact' underline='none'>Contact</Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' href='/about' underline='none'>About</Link>
                </Grid>
                <Grid item>
                    <Link variant='h6' color='white' href='https://www.etsy.com/uk/shop/MichelleAbrahall' underline='none'>Shop</Link>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}