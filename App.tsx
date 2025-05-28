
import React from 'react';
import FooterLink from './components/FooterLink';

// User's Information
const YOUR_NAME = "Pandya Shiv Mittal Kumar";
const YOUR_TITLE_TAGLINE = "Software Developer | Ethical Hacker | Tech Enthusiast";
const YOUR_PROFILE_IMAGE_URL = "https://picsum.photos/seed/portfolio/128/128"; // TODO: Replace with your actual image URL

const YOUR_EMAIL = "pandyashiv0867@gmail.com";

// Links - TODO: Replace '#' with actual URLs
const YOUR_INSTAGRAM_URL = "#"; // TODO: Replace with your Instagram URL
const YOUR_GITHUB_URL = "#"; // TODO: Replace with your GitHub URL


const App: React.FC = () => {
  const firstName = YOUR_NAME.split(' ')[0] || 'They';

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-10">
        {/* Profile Section */}
        <div className="text-center">
          <img
            src={YOUR_PROFILE_IMAGE_URL}
            alt="Profile"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-5 shadow-md"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {YOUR_NAME}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-1">
            {YOUR_TITLE_TAGLINE}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
          <p>
            <strong>{YOUR_NAME}</strong> is a passionate developer from Gujarat, proficient in Python, HTML, CSS, and Java.
            With practical experience from real-world projects, such as developing a hospital website during an internship,
            {firstName} also excels in ethical hacking, video editing (Adobe Premiere Pro), photography, and social media management.
            A collaborative team player, {firstName} is committed to tackling challenging projects and continuously advancing
            their technological expertise.
          </p>
          <p>
            As a versatile tech enthusiast, {firstName} applies their skills across a spectrum of domains including
            game development, application creation, website engineering, and IoT & Arduino projects.
            Their approach is characterized by hands-on problem-solving, leveraging a strong foundation in coding and
            ethical hacking to address diverse technical challenges. This expertise is built upon a dedication to
            practical application and continuous learning in software development and cybersecurity principles.
          </p>
          <p>
            {firstName}'s project portfolio highlights significant accomplishments. {firstName} secured 2nd place
            at the Palanpur Hackathon with 'Dharti Putra,' an innovative project focusing on agricultural technology.
            Further practical experience includes the development of a professional hospital website during an internship.
            {firstName} was also selected for the prestigious NASA Human Exploration Rover Challenge (HERC) program,
            a testament to their capabilities, though the team was unfortunately disqualified due to internal issues.
          </p>
          <p>
            Guided by a strong commitment to innovation and effective problem-solving, {firstName} utilizes
            their technical acumen to address real-world challenges and deliver impactful solutions.
            {firstName} firmly believes in the transformative power of technology and is dedicated to honing
            their skills to contribute meaningfully to the tech landscape.
          </p>
          <p>
            Looking ahead, {firstName} envisions a dynamic career path leveraging technology to innovate,
            resolve complex problems, and contribute to significant projects. {firstName} aspires to grow as a
            software developer and tech enthusiast, continuously expanding their knowledge and making a mark in the field.
          </p>
          <p>
            If you're interested in collaborating or learning more about {firstName}'s work,
            please feel free to reach out via email at
            <a href={`mailto:${YOUR_EMAIL}`} className="text-blue-600 hover:underline ml-1">{YOUR_EMAIL}</a>.
          </p>
        </div>

        {/* Links Section */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300 text-gray-600 text-center">
          <div className="flex justify-center space-x-6">
            <FooterLink href={YOUR_INSTAGRAM_URL}>Instagram</FooterLink>
            <FooterLink href={YOUR_GITHUB_URL}>GitHub</FooterLink>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            (Update links with your actual URLs)
          </p>
        </div>
        
        {/* Attribution removed as per request */}
        {/* 
         <div className="text-center text-xs text-gray-400 mt-10 pb-4">
            <p>Inspired by <a href="https://dhruvsaidava.github.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">dhruvsaidava.github.io</a>.</p>
        </div> 
        */}
      </div>
    </div>
  );
};

export default App;
