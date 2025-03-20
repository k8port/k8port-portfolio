"use client";

import React, { useState } from "react";
import { Database, Layout, Terminal, Server } from "lucide-react";
import dynamic from "next/dynamic";

interface InterimSkillsPanelProps {
  className?: string;
}

// Only keep the RadarChart dynamic import
const RadarChart = dynamic(() => import("./RadarChart"), { ssr: false });

// Add type for level values
type DreyfusLevel = 1 | 2 | 3 | 4 | 5;

const DREYFUS_LEVELS: Record<DreyfusLevel, { name: string; color: string }> = {
  1: { name: "Novice", color: "bg-novice_" },
  2: { name: "Advanced Beginner", color: "bg-adv_begin_" },
  3: { name: "Competent", color: "bg-competent_" },
  4: { name: "Proficient", color: "bg-proficient_" },
  5: { name: "Expert", color: "bg-expert_" },
};

const skillsData = {
  Frontend: {
    icon: Layout,
    skills: [
      { name: "React", level: 5, projects: 12 },
      { name: "TypeScript", level: 4, projects: 8 },
      { name: "CSS/Tailwind", level: 4, projects: 15 },
    ],
  },
  Backend: {
    icon: Server,
    skills: [
      { name: "Node.js", level: 4, projects: 10 },
      { name: "Python", level: 3, projects: 6 },
      { name: "Java", level: 3, projects: 5 },
    ],
  },
  Database: {
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 4, projects: 8 },
      { name: "MongoDB", level: 3, projects: 5 },
      { name: "Redis", level: 2, projects: 3 },
    ],
  },
  DevOps: {
    icon: Terminal,
    skills: [
      { name: "Docker", level: 4, projects: 7 },
      { name: "AWS", level: 3, projects: 6 },
      { name: "CI/CD", level: 3, projects: 8 },
    ],
  },
};

// Add type for category keys
type CategoryKey = keyof typeof skillsData;

export default function SkillsDisplay({ className }: InterimSkillsPanelProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Frontend");

  const Badge = ({ level }: { level: DreyfusLevel }) => (
    <span
      className={`${DREYFUS_LEVELS[level].color} px-2 py-1 rounded-full text-xs text-bonewhite font-medium`}
    >
      {DREYFUS_LEVELS[level].name}
    </span>
  );

  // Format data for the radar chart
  const radarData = skillsData[activeCategory].skills.map((skill) => ({
    skill: skill.name,
    value: skill.level,
  }));

  return (
    <>
      <div
        data-testid="skills-panel"
        className={`max-w-4xl p-4 md:p-6 rounded-lg shadow-lg ${className}`}
      >
        {/* Category Buttons */}
        <div className="flex justify-center mb-4 md:mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-lg bg-offwhite/90 p-1">
            {Object.entries(skillsData).map(([category, data]) => {
              const Icon = data.icon;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as CategoryKey)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-md transition-all ${
                    activeCategory === category
                      ? "bg-parchment/90 ring-1 ring-agedparchment shadow-xs text-brightblue"
                      : "hover:bg-pistachio/90 hover:ring-ashes_450 hover:text-ashes_850"
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Skills List */}
          <div className="space-y-4">
            {skillsData[activeCategory].skills.map((skill) => (
              <div key={skill.name} className="bg-offwhite/90 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <Badge level={skill.level as DreyfusLevel} />
                </div>
                <div className="text-sm text-gray-600">
                  {skill.projects} projects completed
                </div>
              </div>
            ))}
          </div>

          {/* Radar Chart */}
          <div className="bg-offwhite/90 rounded-lg p-4">
            <div className="w-full h-64">
              <RadarChart data={radarData} />
            </div>
          </div>
        </div>

        {/* Dreyfus Level Legend */}
        <div className="mt-8 pt-4 border-t">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(DREYFUS_LEVELS).map(([level, { name, color }]) => (
              <div key={level} className="flex items-center space-x-1">
                <div className={`w-3 h-3 rounded-full ${color}`}></div>
                <span className="text-sm text-gray-600">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
