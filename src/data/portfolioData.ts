import {
  Project,
  SkillCategory,
  CertificationItem,
  ActivityItem
} from '@/types';

export const personalInfo = {
  name: 'Dhanush',
  title: 'Aspiring Software Engineer | AI Application Developer',
  headline: 'I build AI-powered web apps that people can actually use.',
  status: 'Open to Software Engineering & AI Opportunities',
  bio: 'I build AI-powered web apps that people can actually use.',
  summary:
    'Engineering student passionate about software development and AI-powered applications. I work with Python, JavaScript, HTML, CSS, and SQL to build practical applications that solve real-world problems. I enjoy exploring Generative AI, integrating AI capabilities into applications, and continuously improving my programming skills.',
  degree: 'B.E. in Electronics and Communication Engineering',
  institution: 'Cambridge Institute of Technology, KR Puram, Bengaluru',
  cgpa: '9.3 / 10',
  batch: 'Sep 2024 – Jul 2028',
  location: 'Bengaluru, Karnataka, India',
  email: 'kulkarnidhanush8@gmail.com',
  phone: '+91 89043 88749',
  github: 'https://github.com/CambridgeinstitutetechnologyBLR-Dhanush',
  linkedin: 'https://www.linkedin.com/in/dhanush-kulkarni',
  leetcode: 'https://leetcode.com/u/DHANUSH_KULKARNI/',
  photo: '/images/profile.jpg',
  resumeUrl: '/resume.pdf',
  coreFocus: [
    {
      title: 'Web Application Engineering',
      description: 'Developing responsive web interfaces using JavaScript, HTML, and CSS integrated with cloud databases.'
    },
    {
      title: 'Generative AI & LLMs',
      description: 'Exploring Generative AI APIs and integrating intelligent conversational and speech capabilities into user-facing apps.'
    },
    {
      title: 'Workflow Automation',
      description: 'Building multi-platform automation pipelines with tools like n8n and Make to streamline data processing.'
    },
    {
      title: 'Practical Problem Solving',
      description: 'Applying solid programming fundamentals in Python and SQL with Git version control best practices.'
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'SQL']
  },
  {
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'Flexbox', 'Bootstrap']
  },
  {
    title: 'Backend & Databases',
    skills: ['Supabase', 'MongoDB Atlas']
  },
  {
    title: 'AI & Automation',
    skills: ['Generative AI', 'n8n', 'Make', 'Automation Workflows']
  },
  {
    title: 'Developer Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel']
  }
];

export const projects: Project[] = [
  {
    id: 'edureach',
    title: 'Edureach',
    category: 'AI-Powered College Intelligence Platform',
    description:
      'A college intelligence platform featuring intelligent AI search and cloud database integration to provide helpful academic guidance.',
    bullets: [
      'Built a college counseling platform with responsive modern web interfaces and cloud database integration.',
      'Integrated intelligent search and AI responses so answers stay grounded in verified platform data.'
    ],
    technologies: ['JavaScript', 'MongoDB Atlas', 'HTML', 'CSS', 'Generative AI'],
    liveUrl: 'https://edureach-platform-8kaw.vercel.app/',
    githubUrl: 'https://github.com/CambridgeinstitutetechnologyBLR-Dhanush/edureach-platform'
  },
  {
    id: 'taxora-ai',
    title: 'Taxora AI',
    category: 'Intelligent Tax Assistant',
    description:
      'An AI-driven tax assistant web application with a streamlined dashboard, secure authentication, and cloud data management.',
    bullets: [
      'Built an AI tax assistant in JavaScript with a clear dashboard and secure sign-in.',
      'Used Supabase for the database and user authentication, keeping user data protected and the app ready to scale.'
    ],
    technologies: ['JavaScript', 'Supabase', 'HTML', 'CSS'],
    liveUrl: 'https://taxoraai-65lw-80td9kfqf-dhanush6.vercel.app/',
    githubUrl: 'https://github.com/CambridgeinstitutetechnologyBLR-Dhanush/taxoraai'
  },
  {
    id: 'intelligent-email-assistant',
    title: 'Intelligent Email Assistant',
    category: 'AI/ML Productivity Tool',
    description:
      'An intelligent assistant applying machine learning algorithms to automate email parsing, triage, and task processing.',
    bullets: [
      'Developed an assistant that uses AI/ML to automate email processing and save time for the user.',
      'Engineered features that analyze and understand email content, streamlining workflows and cutting manual effort.'
    ],
    technologies: ['AI/ML', 'Python', 'JavaScript', 'Automation'],
    liveUrl: 'https://intelligent-email-assistant-nu.vercel.app/',
    githubUrl: 'https://github.com/CambridgeinstitutetechnologyBLR-Dhanush/Intelligent_Email_Assistant'
  },
  {
    id: 'ai-voice-language-tutor',
    title: 'AI Voice Language Tutor',
    category: 'Speaking Practice with Instant Feedback',
    description:
      'An interactive language learning web application leveraging Google Gemini AI and speech synthesis for dynamic conversational practice.',
    bullets: [
      'Created a language learning app that uses Google Gemini AI to correct grammar and vocabulary.',
      'Implemented speech recognition with the Web Speech API and spoken replies with Google TTS for interactive pronunciation practice.'
    ],
    technologies: ['Google Gemini', 'Web Speech API', 'Google TTS', 'JavaScript', 'Generative AI', 'HTML', 'CSS'],
    liveUrl: 'https://ai-voice-language-tutor.onrender.com/',
    githubUrl: 'https://github.com/CambridgeinstitutetechnologyBLR-Dhanush/ai-voice-language-tutor'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-python',
    title: 'Programming Foundations with Python',
    issuer: 'NxtWave',
    issueDate: 'Apr 2026',
    verificationUrl: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=PNKVCLGSTU'
  },
  {
    id: 'cert-make',
    title: 'AI Workflows and Automation, project completion using Make',
    issuer: 'NxtWave',
    issueDate: 'Jan 2026',
    verificationUrl: 'https://cdn1.ccbp.in/misc/workshop-acad-make-workshop-completion/L1BVYGLQ9J.png'
  },
  {
    id: 'cert-databases',
    title: 'Introduction to Databases',
    issuer: 'NxtWave',
    issueDate: 'Jun 2025',
    verificationUrl: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=AIOEJGSGGJ'
  },
  {
    id: 'cert-responsive',
    title: 'Build Your Own Responsive Website',
    issuer: 'NxtWave',
    issueDate: 'Feb 2025',
    verificationUrl: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=XAVAAUDXUW'
  },
  {
    id: 'cert-static',
    title: 'Build Your Own Static Website',
    issuer: 'NxtWave',
    issueDate: 'Nov 2024',
    verificationUrl: 'https://certificates.ccbp.in/academy/static-website?id=FRGHEBLZWX'
  }
];

export const activitiesData: ActivityItem[] = [
  {
    id: 'adastra',
    title: 'Technical Member, Drones and Robotics Club (Adastra)',
    organization: 'Cambridge Institute of Technology',
    role: 'Volunteer',
    description: 'Collaborated on technical projects, software integrations, and robotics club initiatives.'
  }
];
