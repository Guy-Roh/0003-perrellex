"use client"
import React, { useEffect, useRef } from 'react';

type videoHoverProps = {
    videoUrl: string
    overlayText: string
    onClick?: () => void
    className?: string
}

const HoverVideo = ({ videoUrl, overlayText, onClick, className }: videoHoverProps) => {
    const videoRef = useRef<HTMLVideoElement>(null!);

    useEffect(() => {
        // Play and immediately pause to display the first frame
        videoRef.current.play().then(() => {
            videoRef.current.pause();
            videoRef.current.currentTime = .01; // Ensure it stays on the first frame
        });
    }, []);

    return (
        <div
            className={"video-hover-container" + (className ? " " + className : "")}
            onMouseOver={() => videoRef.current?.play()}
            onMouseOut={() => videoRef.current?.pause()}
            onClick={onClick}
        >
            <div className="hover-overlay">
                <p dangerouslySetInnerHTML={{ __html: overlayText }}></p>
            </div>
            <video ref={videoRef} src={videoUrl} muted loop preload="auto"></video>
        </div>
    )
}

export default HoverVideo;
