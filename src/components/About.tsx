'use client';

import React from 'react';
import Image from 'next/image';
import { Layers, Bot, Cpu, GitBranch, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: 'Web Application Engineering',
      description:
        'Building responsive modern web interfaces using JavaScript, HTML, and CSS integrated with cloud databases and secure authentication.',
      icon: Layers,
    },
    {
      title: 'Generative AI & LLMs',
      description:
        'Exploring Generative AI APIs, intelligent conversational tools, and speech integration into practical user applications.',
      icon: Bot,
    },
    {
      title: 'Workflow Automation',
      description:
        'Designing end-to-end multi-platform automation pipelines with tools like n8n and Make to streamline data processing and routine tasks.',
      icon: Cpu,
    },
    {
      title: 'Programming Fundamentals',
      description:
        'Writing clean, maintainable code in Python and SQL with modular design principles, version control, and continuous improvement.',
      icon: GitBranch,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 border-b border-neutral-200/80 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Photo Avatar */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
            <span>// 01. Profile &amp; Focus</span>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-300 shadow-2xs shrink-0 bg-neutral-100">
              <Image
                src="/images/profile.jpg"
                alt="Dhanush"
                width={40}
                height={40}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              About Me
            </h2>
          </div>

          <p className="text-sm text-neutral-600 max-w-xl">
            {personalInfo.title}
          </p>
        </div>

        {/* Narrative & Academic Summary */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-base text-neutral-700 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Currently pursuing a Bachelor of Engineering in Electronics and Communication at Cambridge Institute of Technology, Bengaluru (CGPA 9.3), I enjoy transforming ideas into functional software solutions. I focus on developing clean, practical applications that leverage modern web technologies and Generative AI.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">
                <GraduationCap className="w-3.5 h-3.5 text-neutral-600" />
                Cambridge Institute of Technology · CGPA 9.3
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Aspiring Software Engineer &amp; AI App Developer
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
              Core Competencies
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-neutral-900">Frontend:</strong> HTML, CSS, Flexbox, Bootstrap, JavaScript.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-neutral-900">Databases &amp; Cloud:</strong> Supabase, MongoDB Atlas, SQL.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-neutral-900">Generative AI:</strong> Gemini AI API, Web Speech API, intelligent workflows.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-neutral-900">Automation:</strong> n8n, Make, multi-platform automated pipelines.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-neutral-200 bg-[#fafafa] hover:bg-white hover:border-neutral-300 transition-all duration-200 shadow-2xs group"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
