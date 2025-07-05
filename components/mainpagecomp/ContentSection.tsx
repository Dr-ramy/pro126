'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ContentSection() {
  const [isExpandedIntro, setIsExpandedIntro] = useState(false);
  const [isExpandedGoals, setIsExpandedGoals] = useState(false);
  const [isExpandedContent, setIsExpandedContent] = useState(false);

  return (
    <div dir="ltr" className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 4: Authors */}
        <Card className="flex flex-col h-full p-0">
          <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
            <CardTitle className="text-base">Authors</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-1">
            <div>
              <strong> Author</strong>
              <br />- Marwa Mohamed Badr Abdel Fattah - An English instructor at Faculty of science - Mansoura University.
              <br />
              <br /><strong> Supervisors</strong>
              <br />- Prof. Azza Ahmed Hamdy Al-Marsafy - Professor of TEFL Department of Curriculum &amp; Instruction - Faculty of Education-Zagazig University
              <br />
              <br />- Dr. Magda Kamel Abd Al-sameea - Teacher Emeritus of TEFL Department of Curriculum &amp; Instruction - Faculty of Education-Zagazig University
            </div>
          </CardContent>
        </Card>

        {/* Card 1: Introduction */}
        <Card className="flex flex-col h-full p-0">
          <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
            <CardTitle className="text-base">Introduction</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-1">
            <div>
              <p>
                This site outlines the implementation of a Textual Analysis and Virtual Reality-Based Program designed to enhance Faculty of Science students&rsquo; EFL communicative performance,
                {!isExpandedIntro && <span className="dot"> ...</span>}
                {isExpandedIntro && (
                  <span className="moreText">
                    meta-linguistic awareness, and academic self-efficacy. The program integrates textual analysis strategies with virtual reality (VR) environments to create an interactive learning experience.
                  </span>
                )}
              </p>
            </div>
            <div className="mt-auto flex justify-end pt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpandedIntro(!isExpandedIntro)}
              >
                {isExpandedIntro ? "Less" : "More"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Goals */}
        <Card className="flex flex-col h-full p-0">
          <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
            <CardTitle className="text-base"> General objectives</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-1">
            <div>
              <p>
                <strong>The recent program aims to:</strong>
                <br />- Introduce selves and express opinions.
                <br />- Develop public speaking and presentation skills.
                <br />- Participate in discussions and academic conversations.
                <br />- Answer spontaneous questions and handle interruptions.
                <br />- Understand academic lectures and discussions.
                <br />- Listen for details and take effective notes.
                <br />- Understand speaker intent and tone.
                <br />- Understand debates and scientific arguments.
                {!isExpandedGoals && <span className="dot"> ...</span>}
                {isExpandedGoals && (
                  <span className="moreText">
                    <br />- Read scientific texts and interpret research articles.
                    <br />- Engage in academic reading and perform critical analysis.
                    <br />- Apply efficient reading strategies for scientific papers.
                    <br />- Assess the credibility of scientific sources.
                    <br />- Write scientific reports and research papers.
                    <br />- Structure and organize research papers effectively.
                    <br />- Enhance academic writing through grammar, data presentation, and paraphrasing.
                    <br />- Master proofreading, editing, and citation techniques.
                  </span>
                )}
              </p>
            </div>
            <div className="mt-auto flex justify-end pt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpandedGoals(!isExpandedGoals)}
              >
                {isExpandedGoals ? "Less" : "More"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Content */}
        <Card className="flex flex-col h-full p-0">
          <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
            <CardTitle className="text-base">Content</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-1">
            <div>
              <p>
                <strong> Schedule of implementing the Program: </strong>
                <br />
                <strong> Speaking skills</strong>
                <br />- Introducing Myself &amp; Expressing Opinions.
                <br />- Public Speaking &amp; Presentation Skills.
                <br />- Participating in Discussions &amp; Academic Conversations.
                <br />- Answering Spontaneous Questions &amp; Handling Interruptions.           
                <br />
                {!isExpandedContent && <span className="dot"> ...</span>}
                {isExpandedContent && (
                  <span className="moreText">
                    <strong> Listening skills</strong>
                    <br />- Understanding Academic Lectures &amp; Discussions.
                    <br />- Listening for Details &amp; Note-Taking.
                    <br />- Understanding Speaker Intent &amp; Tone.
                    <br />- Understanding Debates &amp; Scientific Arguments.
                    <br />
                    <strong>Reading skills </strong>
                    <br />- Scientific Reading &amp; Research Article Interpretation.
                    <br />- Academic Reading &amp; Critical Analysis.
                    <br />- Efficient Reading Strategies for Scientific Papers.
                    <br />- Assessing the Credibility of Scientific Sources.
                    <br />
                    <strong>Writing skills </strong>
                    <br />- Writing Scientific Reports &amp; Research Papers.
                    <br />- Writing Research Papers &ndash; Structure &amp; Organization.
                    <br />- Academic Writing &ndash; Grammar, Data Presentation, and Paraphrasing.
                    <br />- Proofreading, Editing, and Citation Mastery.
                  </span>
                )}
              </p>
            </div>

            <div className="mt-auto flex justify-end pt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpandedContent(!isExpandedContent)}
              >
                {isExpandedContent ? "Less" : "More"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
