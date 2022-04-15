import { Box, Grid, Link, Typography } from "@mui/material";
import Catalog from "../catalog/Catalog";

(function(){
    var i,e,d=document,s="script";
    i=d.createElement("script");
    i.async=true;
    i.charset="UTF-8";
    i.src="https://cdn.curator.io/published/dd60f528-ea95-4e9e-b06e-d7167eacea9d.js";
    e=d.getElementsByTagName(s)[0];
    if(e.parentNode){
        e.parentNode.insertBefore(i, e);
    }
    })();

export default function InstagramFeed() {
    return (
        <>
            <Grid container direction="column" sx={{backgroundColor: 'green'}} justifyContent="center" alignItems="center">
                <Grid item xs={8}>                
                    <Link variant='h6' color='white' target="_blank" rel="noreferrer" href='https://www.instagram.com/mish_abs' underline='none'>Instagram @mish_abs</Link>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs>
                        <div id="curator-feed-default-feed-layout">
                            <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}