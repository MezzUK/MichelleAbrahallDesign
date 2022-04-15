import { Typography } from "@mui/material";
import Catalog from "../catalog/Catalog";
import Footer from "../footer/Footer";
import InstagramFeed from "../instagram/Instagram";
import Intro from "../intro/Intro";
import Testimonials from "../testimonials/Testimonials";

export default function HomePage() {
    return (
        <>
            <Intro />
            <Catalog />
            <InstagramFeed />
            <Testimonials />
            <Footer />
        </>
    )
}