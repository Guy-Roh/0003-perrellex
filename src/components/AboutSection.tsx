import Button from "@mui/material";
import { useState } from "react";
import InnerText from "./InnerText";
import data from "../data/about-text.json";

const AboutSection = () => {
    const [about, setAbout] = useState("English");
    const handleClick = () => {
        if (about === "English") {
            setAbout("Dutch");
        } else {
            setAbout("English");
        }
    };
    const aboutText = [
        "<h2>I'm Jelle Van de Perre,<br> also known as<br> Perrellex</h2><br>If you're looking for video production and content creation for music, dance, corporate, and events, you've come across the right website.<br>Years ago, as a dancer myself, I noticed a lack of proper video content within the Belgian dance community.<br>I decided to change that.<br><br> With years of experience, I take pride in my work, branching out to other fields and drawing the best lessons from each project, being able to create high quality videos of the professional caliber that my clients deserve. I've had the privilege to work with a diverse set of artists to create music and dance videos that inspire and remain true to their vision, alongside capturing live performances that bring memories back to life.<br><br>By continually evolving my craft (alongside my equipment), you can be certain that your videos will be prepared, produced, and edited with great care and responsibility, with every single eye-catching detail being accounted for. My story is one of continuous growth filled with passion for my craft.<br><br>Let's build more stories together.",

        "<h2>Ik ben Jelle Van de Perre,<br> ook bekend als<br>Perrellex</h2><br>Als je op zoek bent naar videoproductie en contentcreatie voor muziek, dans, bedrijven of evenementen, ben je hier aan het juiste adres.<br>Als danser merkte ik jaren geleden dat er een tekort was aan goede videoproducties binnen de Belgische dansgemeenschap.<br>Ik besloot daar verandering in te brengen.<br><br>Met jaren ervaring ben ik trots op mijn werk en heb ik mijn horizon verbreed naar verschillende vakgebieden.<br>Van elk project leer ik, waardoor ik steeds video's van hoge, professionele kwaliteit kan maken die mijn klanten verdienen.<br>Ik heb het voorrecht gehad samen te werken met een diverse groep artiesten om muziek- en dansvideo's te creëren die zowel inspireren als trouw blijven aan hun visie.<br>Daarnaast leg ik live optredens vast, waardoor de herinneringen weer tot leven komen.<br><br>Ik blijf mezelf continu ontwikkelen, zowel in mijn vak als met mijn uitrusting.<br>Daarom kun je erop vertrouwen dat jouw video's met zorg, precisie en aandacht voor detail worden voorbereid, geproduceerd en bewerkt.<br>Mijn verhaal is er een van voortdurende groei en passie voor het vak.<br><br>Laten we samen nieuwe verhalen creëren.",
    ];

    const aboutTextMobile = [
        "<h2>Hello, I'm <br>Jelle Van de Perre<br> also known as Perrellex</h2><br>With extensive experience in editing and filming,<br> I create high-quality, professional videos, capturing the essence of every individual project. My work is marked by continuous growth, passion, and attention to detail.<br><br>Let's collaborate to create inspiring stories.",
        "<h2>Hallo, ik ben <br>Jelle Van de Perre<br> ook bekend als Perrellex</h2><br>Met uitgebreide ervaring in montage en filmen,<br> maak ik hoogwaardige, professionele video's, waarbij ik de essentie van elk individueel project vastleg. Mijn werk wordt gekenmerkt door voortdurende groei, passie en oog voor detail.<br><br>Laten we samenwerken om inspirerende verhalen te creëren.",
    ];

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
                        text={about == "English" ? aboutText[0] : aboutText[1]}
                    ></InnerText>
                    <InnerText
                        className="mobile-text"
                        id="about-text"
                        text={
                            about == "English"
                                ? aboutTextMobile[0]
                                : aboutTextMobile[1]
                        }
                    ></InnerText>
                    <button
                        type="button"
                        className="custom-button"
                        onClick={handleClick}
                    >
                        {about == "English" ? "NL" : "EN"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
