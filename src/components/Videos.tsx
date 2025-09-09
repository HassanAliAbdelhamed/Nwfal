import React from 'react';
import YouTube from 'react-youtube';
import { Youtube as YoutubeIcon, ExternalLink } from 'lucide-react';
import c1 from '../img/c1.jpg'
import c2 from '../img/c2.jpg'
import c3 from '../img/c3.jpg'
import c4 from '../img/c4.jpg'
import c5 from '../img/c5.jpg'
import s1 from '../img/s1.jpg'
import s2 from '../img/s2.jpg'
import s3 from '../img/s3.jpg'
import s5 from '../img/s5.jpg'


interface VideoCategory {
  name: string;
  videos: Video[];
}

interface Video {
  title: string;
  videoId: string;
  thumbnail: string;
}

const videoCategories: VideoCategory[] = [
  {
    name: "CATIA Projects",
    videos: [
      {
        title: "PART DESIGN",
        videoId: "9SZ_XTo7GHo",
        thumbnail: c1,
      },
      {
        title: "ASSEMBLY DESIGN & DMU KINEMATICS",
        videoId: "NRffAo8gMxc",
        thumbnail: c2,
      },
      {
        title: "GENERATIVE SHAPE DESIGN",
        videoId: "_WFdmMu_3RI",
        thumbnail: c3,
      },
      {
        title: "ASSEMBLY DESIGN",
        videoId: "GnO76iEXHHg",
        thumbnail: c4,
      },
      {
        title: "DRAFTING",
        videoId: "PgKexlS1wjw",
        thumbnail: c5,
      },
    ]
  },
  {
    name: "SOLIDWORKS Projects",
    videos: [
      {
        title: "ADVENCED ASSEMBLY & SIMULATION [ C-CLAMP]",
        videoId: "kUZWn3eVkUE", // Replace with actual video ID
        thumbnail: s1,
      },
      {
        title: "ADVENCED ASSEMBLY & PARTS [ SCISSOR TABLE ]",
        videoId: "yN_ZuHrxhH4", // Replace with actual video ID
        thumbnail: s2,
      },
      {
        title: "PARTS & ASSEMBLY [ PIPE VICE ]",
        videoId: "-cUCeEt_ayU", // Replace with actual video ID
        thumbnail: s3,
      },
      {
        title: "SHEET METAL SOLIDWORKS",
        videoId: "7ItxXqHfGqs", // Replace with actual video ID
        thumbnail: s5,
      },
      // Add more videos here
    ]
  }
];

const Videos: React.FC = () => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      playbackRate: 2
    },
  };

  const onReady = (event: any) => {
    // Set playback speed to 2x when the video player is ready
    event.target.setPlaybackRate(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {videoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="flex items-center gap-6 mb-12">
              <div className="p-6 bg-red-600 rounded-3xl shadow-xl">
                <YoutubeIcon className="text-white" size={35} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-gray-600 text-xl">Watch tutorials and project demonstrations</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-100">
                  <div className="aspect-video">
                    <YouTube
                      videoId={video.videoId}
                      opts={opts}
                      onReady={onReady}
                      className="w-full h-full"
                      iframeClassName="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                      {video.title}
                    </h3>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors group/link"
                    >
                      <YoutubeIcon size={18} />
                      Watch on YouTube
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
