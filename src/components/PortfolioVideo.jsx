import { useState } from "react";
import { useTranslation } from "react-i18next";

const PortfolioVideo = () => {
  const { t, i18n } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  const videoSrc =
    i18n.language === "tr"
      ? "/portfoliopage/videos/fsvideo-tr.mp4"
      : "/portfoliopage/videos/fsvideo-en.mp4";

  return (
    <div className="w-full max-w-md sm:max-w-2xl mx-auto mb-6">
      {!showVideo ? (
        <button
          onClick={() => setShowVideo(true)}
          className="w-full py-4 px-6 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 
          transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
        >
          <span className="text-blue-400 font-medium group-hover:text-blue-300">
            {t("watch_intro_video")}
          </span>
        </button>
      ) : (
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800/30 backdrop-blur-sm">
          <div
            className="relative w-full h-0"
            style={{ paddingBottom: "56.25%" }}
          >
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg bg-black
                         object-cover sm:object-contain"
              autoPlay
              muted
              controls
              playsInline
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors cursor-pointer"
              aria-label={t("close_video")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioVideo;
