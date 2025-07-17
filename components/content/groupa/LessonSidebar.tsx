"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CustomAccordion from "../maintenance/CustomAccordion";
import LessonDropdown from "../maintenance/LessonDropdown";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { FaChevronCircleLeft, FaVrCardboard, FaRegCommentDots, FaPlus, FaCog } from "react-icons/fa";
import { ButtonItem, VideoItem } from "@/types/types";
import { lessons } from "./LessonData";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    "Proofreading, Editing, and Citation Mastery",
  ];

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="fixed top-[80px] right-0 flex items-center justify-center rounded-none bg-transparent p-0"
            style={{ width: "60px", height: `${buttonHeight}px` }}
          >
            <FaChevronCircleLeft
              style={{ width: "25px", height: "25px", color: "#4B5563", opacity: 0.3 }}
            />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="overflow-y-auto overflow-x-hidden p-4 w-100 h-full bg-white shadow-lg flex flex-col gap-2">
          <SheetHeader className="flex justify-between items-center mb-4">
            <SheetTitle className="text-lg font-semibold">Content</SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <ChevronLeft />
            </Button>
          </SheetHeader>

          {/* Pre Learning Buttons */}
          <CustomAccordion
            title="Pre Learning"
            icon={<FaCog className="text-lg" />}
            items={[
              {
                id: 'extra1',
                text: 'Pre Test',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => window.open('https://forms.gle/ZvaUJ62HeVS2B9Vy8', '_blank'),
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
                onClick: () => window.open('https://metaverse-five-psi.vercel.app/scenes', '_blank'),
              },
            ]}
          />

          {/* Lesson List */}
          <div className="space-y-2">
            {Object.entries(lessons).map(([, items], i) => (
              <LessonDropdown
                key={i}
                title={lessonname[i]}
                items={items}
                currentVideo={currentVideo}
                visitedIds={visitedIds}
                onSelect={onSelect}
              />
            ))}
          </div>

          {/* Post Learning Buttons */}
          <CustomAccordion
            title="Post Learning"
            icon={<FaCog className="text-lg" />}
            items={[
              {
                id: 'extra1',
                text: 'Post Test',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => window.open('https://forms.gle/KT9LeYTWEx6UngjV7', '_blank'),
              },
              {
                id: 'extra2',
                text: 'VR',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => console.log("ضغطت على زر إضافي 2"),
              },
            ]}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}
