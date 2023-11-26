
import React from 'react'
import SideMenu from './SideMenu'


const Hero = () => {
    return (
        <>
        <header id="HERO">
            <div id="video-overlay">
                    <img className="hero-logo"  id="logo" src="/img/prlx_logo.png" alt="logo" />
            </div>
            <video id="videoHero" autoPlay src="/video/hero_reel_comp_1.mp4" loop muted></video>
        </header>
        <SideMenu />
        </>
    )
}

export default Hero