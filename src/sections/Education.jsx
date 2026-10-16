import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-[#0c1220]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Academic Foundation"
          title="Education"
          description="Formal academic degrees and foundational computer applications learning."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{edu.location}</span>
                </div>

                {edu.details && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
