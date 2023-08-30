

const CameraFeed = document.getElementById('cameraFeed');


navigator.mediaDevices.getUserMedia({video: true})
.then(stream => {
  CameraFeed.srcObject = stream;
})
.catch(error => {
  console.error("Error getting camera:", error);
});