import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';
import {
  Code2,
  Cpu,
  Sparkles,
  Network,
  Boxes,
  Search,
  Layers,
  Workflow,
  Server,
  Database,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  Users
} from 'lucide-react';

const iconMap = {
  Code2,
  Cpu,
  Sparkles,
  Network,
  Boxes,
  Search,
  Layers,
  Workflow,
  Server,
  Database,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  Users
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Technical Arsenal"
          title="Skills & Technologies"
          description="A clear, realistic overview of my core engineering competencies and tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                  {cat.category}
                </h3>

                <ul className="mt-4 space-y-3">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  {cat.skills.length} competencies
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
