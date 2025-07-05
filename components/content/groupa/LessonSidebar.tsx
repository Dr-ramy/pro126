"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import LessonDropdown from "../mainitems/LessonDropdown";
import CustomAccordion from "../mainitems/CustomAccordion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ButtonItem, VideoItem } from "@/types/types";
import { lessons } from "./LessonData";
import { useState } from "react";
import { FaChevronCircleLeft, FaVrCardboard,FaRegCommentDots  } from "react-icons/fa";
import { FaPlus, FaCog } from "react-icons/fa";
import { useRouter } from 'next/navigation';



type Props = {
  currentVideo?: VideoItem;
  visitedIds?: Set<string>;
  onSelect: (item: ButtonItem) => void;
  buttonHeight: number;
};

export default function LessonSidebar({
  currentVideo,
  visitedIds,
  onSelect,
  buttonHeight,
}: Props) {
  const [open, setOpen] = useState(false);

  const router = useRouter();


const lessonname = [
  "Introducing Myself & Expressing Opinions",
  "Public Speaking & Presentation Skills",
  "Participating in Discussions ",
  "Answering Spontaneous Questions ",
  "Understanding Academic Lectures ",
  "Listening for Details & Note-Taking",
  "Understanding Speaker Intent & Tone",
  "Understanding Debates ",
  "Scientific Reading",
  "Academic Reading & Critical Analysis",
  "Efficient Reading Strategies ",
  "Assessing the Credibility of Scientific Sources",
  "Writing Scientific Reports ",
  "Writing Research Papers – Structure ",
  "Academic Writing – Grammar",
  "Proofreading, Editing, and Citation Mastery"
];

  return (
    <>
      {/* زر فتح القائمة مثبت */}
      <Button
        variant="ghost"
        onClick={() => setOpen(true)}
        className="fixed top-[80px] right-0 flex items-center justify-center rounded-none bg-transparent p-0"
        style={{ width: "60px", height: `${buttonHeight}px` }}
      >
        <FaChevronCircleLeft style={{ width: "25px", height: "25px", color: "#4B5563", opacity: 0.3 }} />
      </Button>

      {/* الشريط الجانبي */}
      <Drawer direction="right" open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <DrawerContent
          className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 overflow-y-auto max-h-screen flex flex-col gap-2"
          style={{ overflowY: "auto", overflowX: "hidden" }}
        >
          <DrawerHeader className="flex justify-between items-center mb-4">
            <DrawerTitle className="text-lg font-semibold">Content</DrawerTitle>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <ChevronLeft />
            </Button>
          </DrawerHeader>

          {/* أزرار قبل القائمة */}
<CustomAccordion
  title="Pre Learning"
  icon={<FaCog className="text-lg" />}
  items={[
    {
      id: 'extra1',
      text: ' Pre Test',
      icon: <FaPlus className="text-gray-500" />,
      onClick: () =>  window.open('https://forms.gle/ZvaUJ62HeVS2B9Vy8', '_blank'),
    },
    {
      id: 'extra2',
      text: 'Chat Room',
      icon: <FaRegCommentDots className="text-gray-500" />,
      onClick: () => router.push('/chat'),
    },
     {
      id: 'extra3',
      text: 'VR',
      icon: <FaVrCardboard className="text-gray-500" />,
      onClick: () =>  window.open('https://metaverse-five-psi.vercel.app/scenes', '_blank'),
    },
  ]}
/>


          {/* قائمة الدروس */}
    <div className="space-y-2">
      {Object.entries(lessons).map(([, items], i) => (
        <LessonDropdown
          key={i}
          title={` ${lessonname[i]}`}
          items={items}
          currentVideo={currentVideo}
          visitedIds={visitedIds}
          onSelect={onSelect}
        />
      ))}
    </div>


          {/* أزرار بعد القائمة */}
<CustomAccordion
  title="Post Learning"
  icon={<FaCog className="text-lg" />}
  items={[
    {
      id: 'extra1',
      text: 'Post Test',
      icon: <FaPlus className="text-gray-500" />,
      onClick: () =>  window.open('https://forms.gle/KT9LeYTWEx6UngjV7', '_blank'),
    },
    {
      id: 'extra2',
      text: 'VR',
      icon: <FaPlus className="text-gray-500" />,
      onClick: () => console.log("ضغطت على زر إضافي 2"),
    },
  ]}
/>

        </DrawerContent>
      </Drawer>
    </>
  );
}
