import React from "react";
import Punchcard from "./Punchcard";
import { Topic } from "../lib/types";
import InterimSkillsPanel from "./InterimSkillsPanel";

interface SkillsPanelProps {
  label: string;
  skills: Topic[];
  className?: string;
}

export default function SkillsPanel({
  label,
  // skills,
  className,
}: SkillsPanelProps) {
  return (
    <Punchcard className={`${className} p-4 shadow-lg rounded-lg`}>
      <h1
        className={`text-lg text-left my-1 
        sm:text-xl text-stroke-header header-shadow`}
      >
        {label}
      </h1>
      <InterimSkillsPanel />
      {/* <Carousel className="bg-bonewhite/75 shadow-lg rounded-lg min-h-[600px]">
        {skills.map((category, idx) => (
          <div key={idx} className="px-4 py-4 h-full flex flex-col">
            <h2 className="font-abrilFatface text-lg text-terracotta  text-center my-4">
              {category.topic}
            </h2>

            <div className="grow font-cormorantGaramond text-antiqueblack/75 overflow-y-auto">
              {category.topicList.map((sub, i) => (
                <SubtopicRenderer key={i} item={sub} />
              ))}
            </div> */}
      {/* <div className="grow font-cormorantGaramond overflow-y-auto">
              {category.topicList.map((topic, topicIdx) => (
                <div key={topicIdx} className="mb-4">
                  <h3 className="font-semibold text-sm mb-1">{topic.subtopic}</h3>
                  {topic.subtopicList ? (
                    <ul className="list-none ml-4 space-y-1">
                      {topic.subtopicList.map((subtopic, subtopicIdx) => (
                        <li key={subtopicIdx} className="text-sm">
                          <div className="flex items-center justify-between">
                            <span>{subtopic.subtopic}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex items-center justify-between ml-4">
                      <span className="text-sm">{topic.subtopic}</span> 
                      {topic.subtopic && (
                        <span className="text-xs text-gray-600 ml-2">
                          {topic.subtopicList}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div> */}
      {/* </div>
        ))} 
      </Carousel> */}
    </Punchcard>
  );
}
