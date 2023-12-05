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

    const handleClick = (listNumber:number) => { 
        window.open(socialLinks[listNumber], '_blank');
    };

    const handleCopyToClipboard = (listNumber:number, attribute:string) => {
        navigator.clipboard.writeText(socialLinks[listNumber]);
        return(
            alert(attribute + " copied to clipboard!")
        )
    }

    return (
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
    );
};

export default ContactSection;
