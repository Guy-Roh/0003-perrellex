import React, { useRef } from 'react';

type videoHoverProps = {
    videoUrl: string
    overlayText: string
}

const VideoHover = ({videoUrl, overlayText}:videoHoverProps) => {
    const videoRef = useRef<HTMLVideoElement>(null!);
    return(
        <div 
          className="video-hover-container" 
          onMouseOver={() => videoRef.current?.play()} 
          onMouseOut={() => videoRef.current?.pause()}
        >
            <div className="hover-overlay">
                <p dangerouslySetInnerHTML={{__html: overlayText}}></p>
            </div>
            <video ref={videoRef} src={videoUrl} muted loop/>
        </div>
    )
}

export default VideoHover;