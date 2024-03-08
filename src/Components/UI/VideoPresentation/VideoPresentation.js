import { useRef } from "react";
const VideoPresentation = ({sourceMp4, sourceWebm}) => {
  const videoRef = useRef(null);
  const handleKeyPress = (event) => {
    if (!videoRef.current) return;

    switch (event.key) {
      case " ":
      case "Enter":
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
        break;
      default:
        break;
    }
  };
  return (
    <video
      className="alliWidget-video"
      ref={videoRef}
      tabIndex={0}
      controls
      aria-label="Nombre del video"
      autoPlay
      muted
      loop
    >
      <source src={sourceMp4} type="video/mp4" />
      <source src={sourceWebm} type="video/webm" />
      onKeyPress={handleKeyPress}
    </video>
  );
};
export default VideoPresentation;
