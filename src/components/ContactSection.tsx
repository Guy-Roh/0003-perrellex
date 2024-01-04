import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const ContactSection = () => {
    // Each icon will lead to the desired platform
    const socialLinks = [
        "https://www.instagram.com/perrellex.official/",
        "https://www.youtube.com/@perrellex/videos",
        "perrellex@gmail.com",
        "tel:+32493143752"
    ];

    const handleClick = (listNumber: number) => {
        window.open(socialLinks[listNumber], '_blank');
    };

    const handleCopyToClipboard = (listNumber: number, attribute: string) => {
        navigator.clipboard.writeText(socialLinks[listNumber]);
        return (
            alert(attribute + " copied to clipboard!")
        )
    }

    return (
        <div>
            <section id="CONTACT">
                <h1>CONTACT</h1>
                <p className="contact-field">
                    <InstagramIcon onClick={() => handleClick(0)} style={{ cursor: 'pointer' }} />
                    <br />
                    <YouTubeIcon onClick={() => handleClick(1)} style={{ cursor: 'pointer' }} />
                    <br />
                    <EmailIcon onClick={() => handleCopyToClipboard(2, "e-mail")} style={{ cursor: 'pointer' }} />
                    <br />
                </p>
            </section>
            <footer>
                <p>© 2024 Perrellex</p>
                <p>website made by<p onClick={
                    () => window.open("https://www.linkedin.com/in/guy-van-raemdonck-390bb7204/", '_blank')
                } style={{ cursor: 'pointer' }
                }>
                Guy Van Raemdonck</p></p>
            </footer>
        </div>

    );
};

export default ContactSection;
