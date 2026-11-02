'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/Icons';
import { personalInfo } from '@/data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-neutral-200/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo with Dhanush's Photograph Avatar */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-neutral-900 font-semibold tracking-tight text-base hover:text-black transition-colors"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-300 shadow-2xs group-hover:border-neutral-900 transition-colors shrink-0 bg-neutral-100">
              <Image
                src="/images/profile.jpg"
                alt="Dhanush"
                width={32}
                height={32}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-900 leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 font-normal leading-tight hidden sm:inline-block">
                Aspiring Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-neutral-950 bg-neutral-100 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Socials + Resume Button */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 border-r border-neutral-200 pr-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-neutral-600 hover:text-blue-600 hover:bg-neutral-100 rounded-md transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-neutral-600 hover:text-amber-600 hover:bg-neutral-100 rounded-md transition-colors"
                title="LeetCode Profile"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-all shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-700" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded-md"
            >
              <FileText className="w-3 h-3 text-neutral-700" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white/95 backdrop-blur-md px-4 pt-2 pb-5 space-y-1 shadow-md">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'text-neutral-950 bg-neutral-100 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-700 hover:text-black"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-700 hover:text-blue-600"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-700 hover:text-amber-600"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 rounded-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
