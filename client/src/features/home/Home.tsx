import { Typography } from "@mui/material";
import Catalog from "../catalog/Catalog";
import InstagramFeed from "../instagram/Instagram";
import Intro from "../intro/Intro";

export default function HomePage() {
    return (
        <>
            <Intro />
            <Catalog />
            <InstagramFeed />
        </>
    )
}