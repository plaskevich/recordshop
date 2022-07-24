import video from '../../assets/bckg-video.mp4';

export default function BackgroundVideo() {
  return (
    <div className='video-container'>
      <video src={video} autoPlay='autoplay' loop='loop' muted className='' />
    </div>
  );
}
