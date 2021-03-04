import video from "./bckg-video.mp4";
import "./Video.scss";

export default function BackgroundVideo() {
  return (
    <div className="video-container">
      <video
        src={video}
        autoPlay="autoplay"
        loop="loop"
        muted
        className=""
      ></video>
    </div>
  );
}
