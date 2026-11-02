'use client';

import React from 'react';
import { X, Download, Printer, FileText } from 'lucide-react';
import { personalInfo, skillCategories, projects, certificationsData, activitiesData } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-neutral-300 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Action Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/90">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-neutral-800" />
            <h3 className="text-sm font-bold text-neutral-900 tracking-tight font-mono">
              DHANUSH_RESUME.PDF
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Dhanush_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-300 text-neutral-700 text-xs font-medium hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-neutral-900 text-xs sm:text-sm font-sans bg-white print:p-0">
          {/* Header */}
          <div className="border-b-2 border-neutral-900 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-950">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-neutral-700 mt-0.5">
              {personalInfo.title} · Bengaluru, India
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs font-mono text-neutral-600">
              <span>✉ {personalInfo.email}</span>
              <span>•</span>
              <span>☎ {personalInfo.phone}</span>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="underline font-semibold">
                GitHub
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="underline font-semibold">
                LinkedIn
              </a>
              <span>•</span>
              <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="underline font-semibold">
                LeetCode
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h3 className="font-bold text-neutral-900">{personalInfo.degree}</h3>
                <p className="text-xs text-neutral-600">{personalInfo.institution}</p>
              </div>
              <div className="text-right sm:text-right mt-1 sm:mt-0 font-mono text-xs text-neutral-600">
                <span>{personalInfo.batch}</span>
                <span className="block font-semibold text-emerald-700">CGPA: {personalInfo.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-neutral-900 text-xs sm:text-sm">
                      {proj.title} <span className="font-normal text-neutral-600 font-mono text-xs">| {proj.category}</span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-neutral-900 font-semibold underline">
                        Live Demo ↗
                      </a>
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-neutral-600 underline">
                        Code ↗
                      </a>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-neutral-600 pl-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] font-mono text-neutral-500 pt-0.5">
                    Stack: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Skills
            </h2>
            <div className="space-y-1 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title}>
                  <strong className="text-neutral-900">{cat.title}:</strong>{' '}
                  <span className="text-neutral-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Certifications ({certificationsData.length})
            </h2>
            <ul className="space-y-1.5 text-xs text-neutral-700">
              {certificationsData.map((c) => (
                <li key={c.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span>
                    • <strong>{c.title}</strong> — {c.issuer} ({c.issueDate})
                  </span>
                  <a
                    href={c.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-900 font-mono text-[11px] underline"
                  >
                    View Certificate ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Co-Curricular Activities
            </h2>
            <p className="text-xs text-neutral-700">
              • <strong>{activitiesData[0].title}</strong> — {activitiesData[0].organization} ({activitiesData[0].role})
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>Source: Official Dhanush Resume</span>
          <a
            href="/resume.pdf"
            download="Dhanush_Resume.pdf"
            className="text-neutral-900 font-bold hover:underline"
          >
            Download PDF File Directly ↗
          </a>
        </div>
      </div>
    </div>
  );
}
