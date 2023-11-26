import React, { useState } from "react";
import { Paper, Chip } from "@mui/material";
import VideoHover from "./HoverVideo";
import fileUrls from "../data/file_urls2.json";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

type PortfolioSectionProps = {
    fileUrls: { title: string; link: string; description: string }[];
};

const PortfolioSection = () => {
    const [selectedVideo, setSelectedVideo] = useState<{
        link: string;
        index: number;
    } | null>(null);
    const [genre, setGenre] = useState<string | null>("All");
    const genres = ["Corporate", "Dance", "Events", "Music Videos"];

    const handleClickVideo = (videoLink: string, index: number) => {
        setSelectedVideo({ link: videoLink, index });
    };

    const handleClickGenre = (
        _event: React.MouseEvent,
        newGenre: string | null
    ) => {
        setGenre(newGenre);
    };

    if (!fileUrls) {
        console.log(fileUrls + " is undefined");
        return <h1>loading...</h1>;
    }

    return (
        <>
            <section id="PORTFOLIO">
                <h1>PORTFOLIO</h1>
                <div className="portfolio-toggle">
                    <ToggleButtonGroup
                        exclusive
                        value={genre}
                        aria-label="text formatting"
                        className="buttonToggleGroup custom-button"
                    >
                        <ToggleButton onClick={handleClickGenre} value={"All"}>
                            All Videos
                        </ToggleButton>
                        <ToggleButton
                            onClick={handleClickGenre}
                            value={genres[0]}
                        >
                            {genres[0]}
                        </ToggleButton>
                        <ToggleButton
                            onClick={handleClickGenre}
                            value={genres[1]}
                        >
                            {genres[1]}
                        </ToggleButton>
                        <ToggleButton
                            onClick={handleClickGenre}
                            value={genres[2]}
                        >
                            {genres[2]}
                        </ToggleButton>
                        <ToggleButton
                            onClick={handleClickGenre}
                            value={genres[3]}
                        >
                            {genres[3]}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div id="portfolio-cards-container">
                    {fileUrls.map((videoItem, index) => {
                        // Check if this video is the selected one
                        const isSelected = selectedVideo?.index === index;
                        // Check if the genre is selected
                        const isGenre = genre === videoItem.category;
                        if (genre === videoItem.category || genre === "All") {
                            return (
                                <div
                                    key={index}
                                    onClick={() =>
                                        handleClickVideo(videoItem.link, index)
                                    }
                                >
                                    {isSelected ? (
                                        <div className="youtube-video-container">
                                            <iframe
                                                style={{
                                                    width: "100%",
                                                    height: "26vh",
                                                }}
                                                src={videoItem.link}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <Paper>
                                            <VideoHover
                                                videoUrl={
                                                    "/video/teasers/" +
                                                    videoItem.title +
                                                    ".mp4"
                                                }
                                                overlayText={
                                                    videoItem.description
                                                }
                                            />
                                        </Paper>
                                    )}
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}

                    <h2>
                        more coming soon...
                    </h2>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;
