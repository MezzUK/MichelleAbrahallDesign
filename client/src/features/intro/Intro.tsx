import { Grid, Typography } from "@mui/material";

export default function Intro() {
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={8}>
            <img src='images/Michelle_Abrahall_Header.jpg' width='100%'></img>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='subtitle1' sx={{textAlign: 'center', fontFamily: 'Roboto, san-serif', fontWeight: 'bold', color: '#E6266F'}}>
                    Michelle Abrahall is a freelance illustrator, lettering and mural artist based in Leamington Spa, Warwickshire. 
                    Known for her clean, colourful and uplifting illustrations, she works with clients to produce engaging designs for websites, print and branding.
                </Typography>
            </Grid>
        </Grid>
        </>
    )
}