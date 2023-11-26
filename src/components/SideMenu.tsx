import React, { useState, useEffect } from "react";

const SideMenu = () => {

        /*Sets up the scroll event listener to be used for the side menu*/
        const [color, setColor] = useState("white");
        useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > (window.innerHeight * 0.8)) {
              setColor("black");
            } else {
              setColor("white");
            }
          };
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);
        const sectionNames = ['HERO', 'PORTFOLIO', 'ABOUT', 'CONTACT'];
        /*Sets up the click event listener for the side menu*/
        const handleClick = (sectionIndex: number) => {
            const element = document.getElementById(sectionNames[sectionIndex]);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
    return(
        <>
            <span id="side-menu" style={{color:color}}>☰
                <div className="menu_item" style={{color:color}} key={0} onClick={() => handleClick(0)}>
                HOME
                </div>
                <div className="menu_item" style={{color:color}} key={1} onClick={() => handleClick(1)}>
                {sectionNames[1]}
                </div>
                <div className="menu_item" style={{color:color}} key={2} onClick={() => handleClick(2)}>
                {sectionNames[2]}
                </div>
                <div className="menu_item" style={{color:color}} key={3} onClick={() => handleClick(3)}>
                {sectionNames[3]}
                </div>
            </span>
        </>
    )
}

export default SideMenu