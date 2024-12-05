console.log("content loaded");

chrome.storage.sync.get("videoSpeed", ({ videoSpeed }) => {
    const targetSpeed = videoSpeed || 1.0;

    const setVideoSpeed = (video, speed) => {
        if (video) {
            video.playbackRate = speed;
            console.log(`Video speed set to ${speed}`);
        }
    };

    const updateVideoSpeeds = () => {
        const videos = document.querySelectorAll("video");
        videos.forEach((video) => setVideoSpeed(video, targetSpeed));
    };
});

document.addEventListener("DOMContentLoaded", async () => console.log("kekw"));
