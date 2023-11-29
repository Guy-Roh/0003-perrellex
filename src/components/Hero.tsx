import { useMediaQuery } from 'react-responsive';
import SideMenu from './SideMenu';

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return (
        <>
            <header id="HERO">
                <div id="video-overlay">
                    <img className="hero-logo" height="280px" id="logo" src="/img/prlx_logo.png" alt="logo" />
                </div>
                <video 
                    id="videoHero" 
                    autoPlay 
                    loop 
                    muted
                >
                    <source src={isMobile ? "/video/hero_reel_comp_2_1.mp4" : "/video/hero_reel_comp_1.mp4"}
                    type='video/mp4' />
                </video>
            </header>
            <SideMenu />
        </>
    );
};

export default Hero;
