const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream. Then pass it to the video element and play the video
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch erros
        console.log('Error: ', error);
    }
}

button.addEventListener('click', async () => {
	// Disable button
	button.disabled = true;
	// Start picture in picture
	await videoElement.requestPictureInPicture();
	// Rest button
	button.disabled = false;
});

// On Load
selectMediaStream();