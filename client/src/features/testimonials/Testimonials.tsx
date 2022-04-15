import { Grid, Typography } from "@mui/material";

export default function Testimonials() {
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" color="white" bgcolor="#E9007D" sx={{p: '1rem 0rem'}}>
           <Grid item xs={6}>
                <Typography sx={{textAlign: 'center'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quisquam enim distinctio quibusdam tenetur sint, tempore veniam corrupti expedita rerum excepturi ad et? Sed quia ut harum consequuntur ipsum.</Typography>
            </Grid>
        </Grid>
        </>
    )
}