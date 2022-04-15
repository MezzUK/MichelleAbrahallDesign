import { Grid, Typography } from "@mui/material";

export default function Testimonials() {
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" color="white" bgcolor="#E9007D" sx={{p: '1rem 0rem'}}>
           <Grid item xs={6}>
                <Typography sx={{textAlign: 'center', pt: '1rem'}}>
                    I contacted Michelle for a window mural and it was a great experience from start to finish. Since the work was completed, I’ve had had lots of enquires about business and many more positive comments from the local community. I would use her services again in a flash and would highly recommend her.
                </Typography>
                <Typography variant='h6' sx={{p: '1rem'}}>Sian Gulliver – Little Light yoga studio</Typography>
            </Grid>
        </Grid>
        </>
    )
}