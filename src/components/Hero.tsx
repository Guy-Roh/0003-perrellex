import SideMenu from './SideMenu'
import React, { useEffect, useState } from 'react';

const video_source = [
    "/video/hero_reel_comp_1.mp4",
    "/video/hero_reel_comp_2.mp4",
]

const Hero = () => {
    const [videoSource, setVideoSource] = useState(video_source[1])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1080) {
                setVideoSource(video_source[1])
            } else {
                setVideoSource(video_source[0])
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    

    return (
        <>
        <header id="HERO">
            <div id="video-overlay">
                    <img className="hero-logo" height="280px" id="logo" src="/img/prlx_logo.png" alt="logo" />
            </div>
            <video id="videoHero" autoPlay src={videoSource} loop muted></video>
        </header>
        <SideMenu />
        </>
    )
}

export default Hero