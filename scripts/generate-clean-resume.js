const fs = require('fs');
const path = require('path');

// Generate a valid, clean standard single-page PDF 1.4 document
function generatePDF() {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length 2600 >>
stream
BT
/F1 22 Tf
50 742 Td
(DHANUSH) Tj
/F2 10 Tf
0 -18 Td
(Software Developer | Full-Stack Developer   -   Bengaluru, Karnataka, India) Tj
0 -14 Td
(Email: kulkarnidhanush8@gmail.com   |   Phone: +91 89043 88749) Tj
0 -14 Td
(GitHub: github.com/CambridgeinstitutetechnologyBLR-Dhanush   |   LinkedIn: linkedin.com/in/dhanush-kulkarni) Tj
0 -14 Td
(LeetCode: leetcode.com/u/DHANUSH_KULKARNI/) Tj

/F1 12 Tf
0 -24 Td
(PROFESSIONAL SUMMARY) Tj
/F2 9.5 Tf
0 -13 Td
(Electronics and Communication Engineering student with strong skills in Python, JavaScript, SQL, and Frontend) Tj
0 -12 Td
(Development. Experienced in building scalable web applications, retrieval-augmented generation (RAG) systems,) Tj
0 -12 Td
(LLM-powered tools, and workflow automation platforms. Passionate about creating impactful software solutions.) Tj

/F1 12 Tf
0 -20 Td
(EDUCATION) Tj
/F2 9.5 Tf
0 -13 Td
(Bachelor of Engineering (B.E.) in Electronics and Communication Engineering       Batch: Sep 2024 - Jul 2028) Tj
0 -12 Td
(Cambridge Institute of Technology, KR Puram, Bengaluru                                  CGPA: 9.38 / 10) Tj

/F1 12 Tf
0 -20 Td
(TECHNICAL SKILLS) Tj
/F2 9.5 Tf
0 -13 Td
(Programming Languages: Python, JavaScript, SQL, C) Tj
0 -12 Td
(Frontend Development: HTML, CSS, Flexbox, Bootstrap) Tj
0 -12 Td
(Databases & Cloud: Supabase, MongoDB Atlas) Tj
0 -12 Td
(AI & Automation: Retrieval-Augmented Generation (RAG), LLMs, LangChain, n8n, Make, Automation Workflows) Tj
0 -12 Td
(Tools & Platforms: Git, GitHub, VS Code, Vercel) Tj

/F1 12 Tf
0 -20 Td
(FEATURED SOFTWARE PROJECTS) Tj
/F1 10 Tf
0 -14 Td
(1. Edureach - AI-Powered College Intelligence Platform) Tj
/F2 9 Tf
0 -12 Td
(- Built a full-stack college counseling platform with responsive interfaces and cloud database integration.) Tj
0 -11 Td
(- Added retrieval-augmented generation with LangChain & MongoDB Atlas Vector Search for grounded AI answers.) Tj
0 -11 Td
(  Demo: https://edureach-platform-8kaw.vercel.app/   |   Code: github.com/.../edureach-platform) Tj

/F1 10 Tf
0 -14 Td
(2. Taxora AI - Intelligent Tax Assistant (Micro-SaaS)) Tj
/F2 9 Tf
0 -12 Td
(- Built an AI tax assistant in JavaScript with a streamlined dashboard and secure authentication via Supabase.) Tj
0 -11 Td
(  Demo: https://taxoraai-65lw-80td9kfqf-dhanush6.vercel.app/   |   Code: github.com/.../taxoraai) Tj

/F1 10 Tf
0 -14 Td
(3. Intelligent Email Assistant - AI/ML Productivity Tool) Tj
/F2 9 Tf
0 -12 Td
(- Developed an assistant utilizing machine learning to automate email parsing, triage, and daily task management.) Tj
0 -11 Td
(  Demo: https://intelligent-email-assistant-nu.vercel.app/   |   Code: github.com/.../Intelligent_Email_Assistant) Tj

/F1 10 Tf
0 -14 Td
(4. AI Voice Language Tutor - Interactive Speaking Practice Platform) Tj
/F2 9 Tf
0 -12 Td
(- Created an interactive language app using Google Gemini AI, Web Speech API recognition, and TTS speech synthesis.) Tj
0 -11 Td
(  Demo: https://ai-voice-language-tutor.onrender.com/   |   Code: github.com/.../ai-voice-language-tutor) Tj

/F1 12 Tf
0 -20 Td
(VERIFIED CERTIFICATIONS & CO-CURRICULAR ACTIVITIES) Tj
/F2 9 Tf
0 -13 Td
(- Programming Foundations with Python - NxtWave (Apr 2026)) Tj
0 -11 Td
(- AI Workflows and Automation, project completion using Make - NxtWave (Jan 2026)) Tj
0 -11 Td
(- Introduction to Databases - NxtWave (Jun 2025)) Tj
0 -11 Td
(- Build Your Own Responsive Website - NxtWave (Feb 2025)) Tj
0 -11 Td
(- Build Your Own Static Website - NxtWave (Nov 2024)) Tj
0 -11 Td
(- Technical Member, Drones and Robotics Club (Adastra) - Cambridge Institute of Technology) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 7
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000257 00000 n 
0000002930 00000 n 
0000003013 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
3092
%%EOF`;

  const targetPath = path.join(__dirname, '..', 'public', 'resume.pdf');
  fs.writeFileSync(targetPath, content.trim());
  console.log('Resume PDF updated successfully at:', targetPath);
}

generatePDF();
