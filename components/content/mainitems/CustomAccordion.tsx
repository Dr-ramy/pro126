import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type AccordionItem = {
  id: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

type Props = {
  title: string;
  icon?: React.ReactNode;  // أيقونة للزر الرئيسي
  items: AccordionItem[];
};

export default function CustomAccordion({ title, icon, items }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2">
      <Button
        variant="outline"
        className="w-full justify-between text-right px-4 py-2 rounded-xl flex items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          {icon}
          {title}
        </div>
        {expanded ? <FaChevronUp /> : <FaChevronDown />}
      </Button>

      {expanded && (
        <div className="mt-2 space-y-2">
          {items.map((btn) => (
            <Button
              key={btn.id}
              variant="ghost"
              className="w-full justify-start text-right px-4 py-2 rounded-md flex items-center gap-2"
              onClick={btn.onClick}
            >
              {btn.icon}
              <span className="text-sm truncate">{btn.text}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
