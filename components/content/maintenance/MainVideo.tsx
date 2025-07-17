"use client";

import { useRef, useState, useEffect } from "react";
import LessonSidebar from "../groupa/LessonSidebar";
import { ButtonItem, VideoItem } from "@/types/types";
import { videoMap, formLinks } from "../groupa/LessonData";

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState<VideoItem>({
    id: "1vid0",
    text: "Goals",
    title: "Goals",
    icon: "",
    src: videoMap["1vid0"],
  });

  const [visitedIds, setVisitedIds] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const [buttonHeight, setButtonHeight] = useState(200);

  const handleLessonClick = (btn: ButtonItem) => {
    if (videoMap[btn.id]) {
      setCurrentVideo({ ...btn, title: btn.text, src: videoMap[btn.id] });
    } else if (formLinks[btn.id]) {
      window.open(formLinks[btn.id], "_self");
    }
    setVisitedIds((prev) => new Set(prev).add(btn.id));
  };

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setButtonHeight(containerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [currentVideo]);

  return (
    <div className="relative flex flex-col items-center rtl text-right min-h-screen bg-white overflow-x-hidden">
      
      <main className="p-1 space-y-4 w-full max-w-6xl mx-auto relative" ref={containerRef}>
        
        <h6 className="text-sm sm:text-base md:text-lg font-bold text-center mb-1">
          {currentVideo.title}
        </h6>

        <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl mx-auto bg-black rounded-2xl overflow-hidden shadow-xl">
          <video
            key={currentVideo.src}
            src={currentVideo.src}
            controls
            className="w-full max-h-[calc(100vh-6rem)] object-contain"
          />
        </div>
      </main>

      {/* الشريط الجانبي وزر الفتح */}
      <LessonSidebar
        currentVideo={currentVideo}
        visitedIds={visitedIds}
        onSelect={handleLessonClick}
        buttonHeight={buttonHeight}
      />
    </div>
  );
}
