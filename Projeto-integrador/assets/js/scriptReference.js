function reference() {
  vid = document.getElementById("video");
  const video = document.querySelector("#video");
  video.requestPictureInPicture();
  vid.play();
}
