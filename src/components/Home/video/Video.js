import "./video.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faClose } from "@fortawesome/free-solid-svg-icons";
import video from "../../../Images/Palm_Trees.mp4";
const Video = () => {
  const [enableVideo, setEnableVideo] = useState(false);
  const openVideo = () => {
    setEnableVideo(true);
  };
  const closeVideo = () => {
    setEnableVideo(false);
  };
  return (
    <section className="video-wrapper">
      {enableVideo && (
        <div className="video-player">
          <FontAwesomeIcon icon={faClose} size="2x" onClick={closeVideo} />
          <div className="overlay" onClick={closeVideo}></div>
          <div className="video">
            <video autoPlay={true} controls>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
        </div>
      )}
      <div className="container">
        <h3>The Right Headphones</h3>
        <p>
          In ornare quam viverra orci sagittis. Duis ultricies lacus sed turpis
          tincidunt id aliquet risus. Arcu felis bibendum ut tristique et.
        </p>
        <div className="play" onClick={openVideo}>
          <FontAwesomeIcon icon={faPlay} size="lg" />
        </div>
      </div>
    </section>
  );
};
export default Video;
