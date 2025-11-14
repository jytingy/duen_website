 import React from "react";
 import YouTube from "react-youtube";


 class DemoVideo extends React.Component {
    render() {
      const options = {
        height: '490',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
    return (
<div className="w-full flex justify-center items-center p-4">
  <div className="w-full aspect-video">
    <YouTube
      videoId="6biMWgD6_JY"
      opts={{
        playerVars: { autoplay: 1, controls: 1 }
      }}
    />
  </div>
</div>

    )

    }
    _onReady(event) {
      event.target.pauseVideo();
    }
  }

  export default DemoVideo;