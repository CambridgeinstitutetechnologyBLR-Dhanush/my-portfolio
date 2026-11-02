'use client';

import React from 'react';
import Image from 'next/image';
import {
  FileDown,
  Mail,
  ArrowRight,
  GraduationCap,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/Icons';
import { personalInfo } from '@/data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-neutral-200/80 bg-[#fdfdfd]"
    >
      {/* Subtle fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Profile Photo Presentation (Prominently shown on small screens) */}
        <div className="flex items-center gap-4 mb-6 lg:hidden">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-neutral-300 shadow-sm shrink-0 bg-neutral-100">
            <Image
              src="/images/profile.jpg"
              alt="Dhanush Profile Photo"
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 shadow-2xs mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-medium text-neutral-800 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <h2 className="text-base font-bold text-neutral-900 tracking-tight leading-tight">
              {personalInfo.title}
            </h2>
            <p className="text-xs text-neutral-600 font-mono mt-0.5">
              Bengaluru, India · CGPA 9.3
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Hero Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Desktop Status & Identity Badge */}
            <div className="hidden lg:flex items-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-neutral-800 tracking-tight">
                  {personalInfo.name} · {personalInfo.title}
                </span>
              </div>
            </div>

            {/* Main Headline as specified */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.18]">
                &ldquo;I build AI-powered web apps that people can actually use.&rdquo;
              </h1>
            </div>

            {/* Supporting Description as specified */}
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              {personalInfo.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 text-white font-medium text-xs sm:text-sm hover:bg-neutral-800 transition-colors shadow-xs active:scale-98 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-neutral-800 font-medium text-xs sm:text-sm border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 transition-colors shadow-2xs active:scale-98 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-neutral-600" />
                <span>Resume (PDF)</span>
              </button>
            </div>

            {/* Verified Social Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono text-neutral-400 font-semibold uppercase tracking-wider mr-1">
                Profiles:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 font-medium transition-colors border border-neutral-200 shadow-2xs"
                title="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 font-medium transition-colors border border-neutral-200 shadow-2xs"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 font-medium transition-colors border border-neutral-200 shadow-2xs"
                title="LeetCode"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-600" />
                <span>LeetCode</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 font-medium transition-colors border border-neutral-200 shadow-2xs"
                title="Email"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-600" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Portrait Photograph Card & Quick Spec */}
          <div className="lg:col-span-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-md space-y-4">
              {/* Actual Profile Photograph Frame */}
              <div className="relative w-full aspect-3/3.8 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-inner group">
                <Image
                  src="/images/profile.jpg"
                  alt="Dhanush - Aspiring Software Engineer Profile Photograph"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />

                {/* Subtle verified badge overlay */}
                <div className="absolute bottom-3 left-3 bg-neutral-900/85 backdrop-blur-xs text-white px-3 py-1 rounded-md text-[11px] font-mono font-medium flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Dhanush · AI App Developer</span>
                </div>
              </div>

              {/* Verified Quick Facts Spec Table */}
              <div className="pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-2.5">
                  Academic &amp; Profile Summary
                </span>
                <dl className="grid grid-cols-3 gap-y-2 text-xs">
                  <dt className="text-neutral-500 font-mono">Role:</dt>
                  <dd className="col-span-2 text-neutral-900 font-medium">
                    {personalInfo.title}
                  </dd>

                  <dt className="text-neutral-500 font-mono">Degree:</dt>
                  <dd className="col-span-2 text-neutral-900 font-medium">
                    {personalInfo.degree}
                  </dd>

                  <dt className="text-neutral-500 font-mono">College:</dt>
                  <dd className="col-span-2 text-neutral-900 font-medium">
                    {personalInfo.institution}
                  </dd>

                  <dt className="text-neutral-500 font-mono">CGPA:</dt>
                  <dd className="col-span-2 text-neutral-900 font-semibold font-mono text-emerald-700">
                    {personalInfo.cgpa}
                  </dd>

                  <dt className="text-neutral-500 font-mono">Batch:</dt>
                  <dd className="col-span-2 text-neutral-900 font-medium">
                    {personalInfo.batch}
                  </dd>

                  <dt className="text-neutral-500 font-mono">Location:</dt>
                  <dd className="col-span-2 text-neutral-900 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    <span>{personalInfo.location}</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
