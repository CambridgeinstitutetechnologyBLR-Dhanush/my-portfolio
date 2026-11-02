'use client';

import React, { useState } from 'react';
import {
  Code,
  Globe,
  Server,
  Cpu,
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    'Programming Languages': Code,
    'Frontend Development': Globe,
    'Backend & Databases': Server,
    'AI & Automation': Cpu,
    'Developer Tools & Platforms': Wrench,
  };

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'Programming Languages', label: 'Languages' },
    { id: 'Frontend Development', label: 'Frontend' },
    { id: 'Backend & Databases', label: 'Backend & DB' },
    { id: 'AI & Automation', label: 'AI & Automation' },
    { id: 'Developer Tools & Platforms', label: 'Tools' },
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.title === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-neutral-200/80 bg-[#fbfbfb]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              <span>// 02. Technical Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl">
              Verified technical capabilities across languages, full-stack web engineering, databases, and AI automation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-100 p-1 rounded-lg border border-neutral-200/90 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-neutral-900 shadow-2xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code;
            return (
              <div
                key={category.title}
                className="flex flex-col justify-between p-5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center border border-neutral-200">
                      <Icon className="w-4 h-4 text-neutral-700" />
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-900 tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-neutral-50 text-neutral-800 border border-neutral-200 hover:border-neutral-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>DISCIPLINE</span>
                  <span className="font-semibold text-neutral-600">
                    {category.skills.length} Technologies
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
