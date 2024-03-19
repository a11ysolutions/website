const VideoPresentation = ({ source }) => {
  return (
    <iframe
      className="alliWidget-video"
      width="560"
      height="400"
      src={source}
      title="A11iWidget - Your ultimate automated Web Accessibility Solution"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
export default VideoPresentation;
