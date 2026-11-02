'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  AlertCircle,
  Clock,
  ArrowUpRight,
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/Icons';
import { personalInfo } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage({ type: null, text: '' });

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit message.');
      }

      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your message has been transmitted successfully. I will get back to you shortly.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred during submission.';
      setStatusMessage({
        type: 'error',
        text: `${message} Alternatively, please email directly at ${personalInfo.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-b border-neutral-200/80 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
            <span>// 05. Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            Contact &amp; Connect
          </h2>
          <p className="text-base text-neutral-700 font-medium">
            Looking for an entry-level software engineering role where I can build AI-backed products end to end.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm text-neutral-600 leading-relaxed">
              Email is the quickest way to reach me. You can also connect via LinkedIn or explore my code on GitHub and problem solving on LeetCode.
            </p>

            {/* Direct Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-900 hover:underline break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-600" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-900 hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-600" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100/70 transition-colors flex items-center justify-between gap-3 shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                      GitHub Repositories
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                      CambridgeinstitutetechnologyBLR-Dhanush
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100/70 transition-colors flex items-center justify-between gap-3 shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                      linkedin.com/in/dhanush-kulkarni
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
              </a>

              {/* LeetCode */}
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100/70 transition-colors flex items-center justify-between gap-3 shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                    <LeetCodeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                      LeetCode Problem Solving
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                      leetcode.com/u/DHANUSH_KULKARNI/
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-neutral-50/60 shadow-xs">
            <h3 className="text-base font-bold text-neutral-900 tracking-tight mb-4">
              Send a Direct Message
            </h3>

            {statusMessage.text && (
              <div
                className={`mb-5 p-4 rounded-lg text-xs leading-relaxed flex items-start gap-2.5 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    : 'bg-red-50 text-red-900 border border-red-200'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Recruiter or Engineering Lead"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border ${
                      errors.name ? 'border-red-400' : 'border-neutral-300'
                    } focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="recruiter@company.com"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border ${
                      errors.email ? 'border-red-400' : 'border-neutral-300'
                    } focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-1.5"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="Software Development Opportunity / Interview"
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border ${
                    errors.subject ? 'border-red-400' : 'border-neutral-300'
                  } focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors`}
                />
                {errors.subject && (
                  <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Discuss role requirements, timeline, or engineering projects..."
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border ${
                    errors.message ? 'border-red-400' : 'border-neutral-300'
                  } focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors`}
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-500">
                  Bengaluru, India · Fast Response
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 disabled:opacity-50 transition-all shadow-xs cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
