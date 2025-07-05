import type { ButtonItem } from "@/types/types"

// بيانات الدروس
export const lessons: {
  lesson_one: ButtonItem[]
  lesson_two: ButtonItem[]
  lesson_three: ButtonItem[]
  lesson_four: ButtonItem[]
  lesson_five: ButtonItem[];
  lesson_six: ButtonItem[];
  lesson_seven: ButtonItem[];
  lesson_eight: ButtonItem[];
  lesson_nine: ButtonItem[];
  lesson_ten: ButtonItem[];
  lesson_eleven: ButtonItem[];
  lesson_twelve: ButtonItem[];
  lesson_thirteen: ButtonItem[];
  lesson_fourteen: ButtonItem[];
  lesson_fifteen: ButtonItem[];
  lesson_sixteen: ButtonItem[];
} = {
  lesson_one: [
    { type: "button", id: "1vid0", text: "Goals", icon: "video", time: "" },
    { type: "button", id: "1vid1", text: "Vocabulary", icon: "video" },
    { type: "button", id: "1act1", text: "Activity", icon: "activity" },
    { type: "button", id: "1vid2", text: "Self-Introduction ", icon: "video" },
    { type: "button", id: "1act2", text: "Activity", icon: "activity" },
    { type: "button", id: "1act3", text: "Guided Self-Introduction", icon: "activity" },
    { type: "button", id: "1vid3", text: "Scientific Opinion", icon: "video" },
    { type: "button", id: "1act4", text: "Activity", icon: "activity" },
    { type: "button", id: "1act5", text: "Activity", icon: "activity" },
    { type: "button", id: "1act6", text: "Guided Self-Evaluation", icon: "activity" },
    { type: "button", id: "1act7", text: "Feedback", icon: "activity" },
    { type: "button", id: "1act8", text: "assignment", icon: "quiz" },
    ],
  lesson_two: [
    { type: "button", id: "2vid0", text: "lesson", icon: "video" },
    { type: "button", id: "2act1", text: "Activity", icon: "activity" },
  ],
  lesson_three: [],
  lesson_four: [],lesson_five: [], lesson_six: [],lesson_seven: [], lesson_eight: [], lesson_nine: [], lesson_ten: [], lesson_eleven: [], lesson_twelve: [],
lesson_thirteen: [], lesson_fourteen: [], lesson_fifteen: [], lesson_sixteen: [],
}

// روابط الفيديوهات
export const videoMap: Record<string, string> = {
  "1vid0": "/videos/vid1/vid0.mp4",
  "1vid1": "/videos/vid1/vid1.mp4",
  "1vid2": "/videos/vid1/vid2.mp4",
  "1vid3": "/videos/vid1/vid3.mp4",
  "1vid4": "/videos/vid1/vid4.mp4",
  "1vid5": "/videos/vid1/vid5.mp4",
  "2vid0": "/videos/vid2/vid0.mp4",
}

// روابط النماذج
export const formLinks: Record<string, string> = {
  "1act1": "https://forms.gle/QEFKLGgkzkK2nLdh7",
  "1act2": "https://forms.gle/MyfkTxeKw5cFoU6V6",
  "1act3": "https://forms.gle/yv9nSCzUvGG3mGC28",
  "1act4": "https://forms.gle/qZbA7RYmfpfwiKq49",
  "1act5": "https://forms.gle/WdmNTvop3ZKn1WaH8",
  "1act6": "https://forms.gle/GRWMSpgSMD6zhVEs9",
  "1act7": "https://forms.gle/xrCu5VDuvEnqoLv5A",
  "1act8": "https://forms.gle/pffcPuGr9zRdQ5U6A",
/*****************************************************************/
  "2act1": "https://forms.gle/Zs8mEhJSFRL9hMip7",

}
