'use client';

import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/Icons';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number>(2025);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-800/80">
          {/* Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-white text-neutral-950 font-mono text-xs font-bold flex items-center justify-center">
                D
              </span>
              <h3 className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-xs text-neutral-400">
              {personalInfo.title} · Bengaluru, India
            </p>
          </div>

          {/* Socials & Connect */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-blue-400 transition-colors border border-neutral-800"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 transition-colors border border-neutral-800"
              title="LeetCode Profile"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
              title="Email Contact"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800 ml-2 cursor-pointer"
              aria-label="Scroll to top of page"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p>
            Aspiring Software Engineer | AI Application Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
