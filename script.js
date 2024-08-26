const gifs = [
    "assets/Happy Birthday To My Princess Marceline_Bubblegum.gif",
    "assets/Happy Birthday To My Princess Marceline_Bubblegum (1).gif"
];

let currentGifIndex = 0;

function changeGif(index) {
    currentGifIndex = index;
    document.getElementById('gifImage').src = gifs[index];
    
    // Update active dot
    const dots = document.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}

function nextGif() {
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
    changeGif(currentGifIndex);
}

function previousGif() {
    currentGifIndex = (currentGifIndex - 1 + gifs.length) % gifs.length;
    changeGif(currentGifIndex);
}

// Auto-play GIFs
function autoPlayGifs() {
    setInterval(nextGif, 5000); // Change GIF every 5 seconds
}

// Keyboard controls for navigating GIFs
function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
        previousGif();
    } else if (event.key === "ArrowDown") {
        nextGif();
    }
}

// Fullscreen toggle
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    }
}

// Start auto-play and listen for keyboard events when the page loads
window.onload = () => {
    autoPlayGifs();
    document.addEventListener('keydown', handleKeyDown);
};
