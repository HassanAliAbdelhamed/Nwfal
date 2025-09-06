import React from 'react';
import YouTube from 'react-youtube';
import { Youtube as YoutubeIcon, ExternalLink } from 'lucide-react';

interface VideoCategory {
  name: string;
  videos: Video[];
}

interface Video {
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
  tags: string[];
}

const videoCategories: VideoCategory[] = [
  {
    name: "CATIA Projects",
    videos: [
      {
        title: "Advanced Engine Block Design",
        description: "Complete V8 engine block modeling with thermal analysis and optimization",
        videoId: "NRffAo8gMxc",
        thumbnail: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600",
        tags: ["Thermal Analysis", "V8 Engine", "Optimization"]
      },
      // Add more videos here
    ]
  },
  {
    name: "SolidWorks Projects",
    videos: [
      {
        title: "Robotic Arm Mechanism",
        description: "6-DOF industrial robotic arm with kinematic simulation",
        videoId: "NRffAo8gMxc", // Replace with actual video ID
        thumbnail: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600",
        tags: ["Robotics", "6-DOF", "Simulation"]
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
                <YoutubeIcon className="text-white" size={50} />
              </div>
              <div>
                <h2 className="text-5xl font-bold text-gray-900">{category.name}</h2>
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
                      className="w-full"
                      iframeClassName="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {video.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-red-600/90 text-white text-xs rounded-full font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
