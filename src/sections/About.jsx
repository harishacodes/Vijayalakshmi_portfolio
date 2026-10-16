import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo, highlightCards } from '../data/portfolioData';
import { GraduationCap, Sparkles, BrainCircuit, Bot } from 'lucide-react';

export default function About() {
  const highlightIcons = [Sparkles, BrainCircuit, Bot, GraduationCap];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-[#0c1220]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="About Me"
          title="Bridging Theoretical AI & Practical Applications"
          description="A look into my background, core interests, and foundational experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Detailed Bio */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                Professional Background
              </h3>
              {personalInfo.aboutDetailed.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <strong className="text-slate-700 dark:text-slate-300">Degree:</strong> Bachelor of Computer Applications (BCA)
                </span>
                <span className="flex items-center gap-1.5">
                  <strong className="text-slate-700 dark:text-slate-300">Location:</strong> Chennai, India
                </span>
              </div>
            </div>
          </div>

          {/* Compact Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlightCards.map((card, idx) => {
              const IconComp = highlightIcons[idx % highlightIcons.length];
              return (
                <div
                  key={card.title}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-400/60 dark:hover:border-indigo-500/50 transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {card.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
