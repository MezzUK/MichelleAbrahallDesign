import { Button, Typography } from "@mui/material";

export default function Intro() {
    return (
        <>
        <div className="image">
            <img src='./'></img>
        </div>
        <div className="description">
            <div className="mish"></div>
            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quisquam enim distinctio quibusdam tenetur sint, tempore veniam corrupti expedita rerum excepturi ad et? Sed quia ut harum consequuntur ipsum.</Typography>
            <Button>Contact Us</Button>
        </div>
        </>
    )
}