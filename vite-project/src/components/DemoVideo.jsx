 import YouTube from "react-youtube";


export default function DemoVideo() {
  return (
    <div className="relative w-full pb-[56.25%]"> 
      {/* 16:9 aspect ratio → 9/16 = 0.5625 */}
      <YouTube
        videoId="HNqKs65YCP8"
        className="absolute top-0 left-0 w-full h-full"
        iframeClassName="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
