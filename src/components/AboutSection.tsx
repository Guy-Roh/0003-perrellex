import Button from "@mui/material";
import { useState } from "react";
import InnerText from "./InnerText";
import data from "../data/about-text.json";

const AboutSection = () => {
    const [about, setAbout] = useState<"English" | "Dutch">("English");
    const handleClick = () => {
        setAbout(about === "English" ? "Dutch" : "English");
    };

    const aboutText = data.aboutText[about].desktop;
    const aboutTextMobile = data.aboutText[about].mobile;

    return (
        <section id="ABOUT">
            <h1>ABOUT ME</h1>
            <div id="about-container">
                <video
                    preload="metadata"
                    id="about-photo"
                    src="/video/about-photos.mp4"
                    aria-label="photos of videographer Perrellex with camera"
                    autoPlay
                    loop
                    muted
                />
                <br />
                <div id="about-wrapper">
                    <InnerText
                        className="desktop-text"
                        id="about-text"
                        text={aboutText}
                    ></InnerText>
                    <InnerText
                        className="mobile-text"
                        id="about-text"
                        text={aboutTextMobile}
                    ></InnerText>
                    <button
                        type="button"
                        className="custom-button"
                        onClick={handleClick}
                    >
                        {about === "English" ? "NL" : "EN"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;