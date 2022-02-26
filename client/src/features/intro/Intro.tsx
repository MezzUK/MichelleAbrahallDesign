import { Button, Container, Typography } from "@mui/material";

export default function Intro() {
    return (
        <>
        <Container sx={{display: 'relative'}}>
            <img src='images/Hello!.png' width='50%'></img>
            <img src='images/Michelle%20Abrahall.jpg' width='50%'></img>
            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quisquam enim distinctio quibusdam tenetur sint, tempore veniam corrupti expedita rerum excepturi ad et? Sed quia ut harum consequuntur ipsum.</Typography>
        </Container>
        </>
    )
}