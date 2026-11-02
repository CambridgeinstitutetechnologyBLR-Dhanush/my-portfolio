'use client';

import React from 'react';
import { Award, ExternalLink, Users, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsData, activitiesData } from '@/data/portfolioData';

export default function Certifications() {
  return (
    <section id="credentials" className="py-20 md:py-24 border-b border-neutral-200/80 bg-[#fbfbfb]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
            <span>// 04. Verified Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            Certifications &amp; Activities
          </h2>
          <p className="text-sm text-neutral-600 max-w-xl">
            Official software engineering certifications with direct verification links, plus co-curricular technical leadership.
          </p>
        </div>

        {/* 5 Certifications List */}
        <div className="mt-12 bg-white rounded-2xl border border-neutral-200/90 shadow-2xs overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-neutral-100 bg-neutral-50/70 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
              Verified Technical Certifications ({certificationsData.length})
            </span>
            <span className="text-[11px] font-mono text-neutral-500">
              Direct Issuer Verification
            </span>
          </div>

          <ul className="divide-y divide-neutral-100">
            {certificationsData.map((cert) => (
              <li
                key={cert.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-50/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 pl-6">
                    <span className="font-medium text-neutral-700">
                      {cert.issuer}
                    </span>
                    <span>•</span>
                    <span className="font-mono text-neutral-500">
                      {cert.issueDate}
                    </span>
                  </div>
                </div>

                <div className="pl-6 sm:pl-0 shrink-0">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-all shadow-2xs hover:shadow-xs"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Co-Curricular Activity */}
        <div className="mt-8 bg-white rounded-2xl border border-neutral-200/90 p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                Technical Club &amp; Community
              </span>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                {activitiesData[0].title}
              </h4>
              <p className="text-xs text-neutral-600 mt-0.5">
                {activitiesData[0].organization} · {activitiesData[0].role}
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 shrink-0 self-start sm:self-auto">
            Technical Member
          </span>
        </div>
      </div>
    </section>
  );
}
