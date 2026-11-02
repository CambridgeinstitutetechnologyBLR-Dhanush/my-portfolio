'use client';

import React from 'react';
import {
  ExternalLink,
  Check,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { projects } from '@/data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 border-b border-neutral-200/80 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
            <span>// 03. Selected Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-neutral-600 max-w-xl">
            Four production web and AI-powered applications with public GitHub source code and live deployments.
          </p>
        </div>

        {/* Projects List */}
        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200/90 bg-[#fafafa] hover:bg-white hover:border-neutral-300 transition-all duration-200 shadow-2xs hover:shadow-xs group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  {/* Category Pill */}
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-black">
                    {project.title}
                  </h3>

                  {/* Summary / Description */}
                  <p className="text-sm text-neutral-700 leading-relaxed pt-1">
                    {project.description}
                  </p>

                  {/* Bullet Points from Resume */}
                  <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-neutral-600">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-neutral-900 mt-0.5 shrink-0" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white text-neutral-800 border border-neutral-200 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action Links */}
                <div className="flex flex-row md:flex-col gap-2 shrink-0 pt-2 md:pt-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-neutral-300 text-neutral-800 text-xs font-medium hover:bg-neutral-50 hover:border-neutral-400 transition-colors shadow-2xs cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-neutral-700" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
