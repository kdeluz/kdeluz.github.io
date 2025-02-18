import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Customer Relationship Manager",
      period: "AUG 2024 - DEC 2024",
      tech: ["React", "Next.js", "JavaScript", "Tailwind"],
      description: "Developed an on-going project within the Red River College's ACE Project Space, with a Manitoban client, looking to build from the ground up, a new CRM."
    },
    {
      title: "YouYugioh",
      period: "JUL 2024 - AUG 2024",
      tech: ["Ruby", "Rails", "Bulma", "Stripe", "ActiveAdmin", "Devise"],
      description: "Solo developed a Ruby project using Bulma CSS as its framework, to create a YuGiOh market website that utilises accurate and up to date market pricing on their products. Integrated with YGOProDeck API and Stripe for payments."
    },
    {
      title: "LolItemShop",
      period: "JUN 2024 - JUL 2024",
      tech: ["Ruby", "Rails", "Bulma"],
      description: "Created a Rails project using Riot Games' API to fill a database with League of Legends Items and display it on a website using Bulma as its framework."
    },
    {
      title: "OneAnime",
      period: "MAR 2024 - APR 2024",
      tech: ["Apache", "PHP", "HTML", "CSS", "SQL"],
      description: "Developed a solo project, utilising data retrieval from a public API to store on a database for users to add and comment on. Implemented CRUD operations using PHP and developed database using PHPMyAdmin."
    }
  ];

  const skills = {
    backend: ["Python", "SQL", "PHP", "Ruby", "Java", "Rails", "Next.js", "React"],
    frontend: ["HTML", "CSS", "JavaScript", "React", "Bulma", "Tailwind"],
    other: ["Git", "Ubuntu", "Debian"]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-800">Kyle Jordan Deluz</h1>
          <div className="flex items-center space-x-4 mt-4">
            <a href="mailto:kjdeluz@gmail.com" className="flex items-center text-gray-600 hover:text-gray-800">
              <Mail className="w-5 h-5 mr-2" />
              kjdeluz@gmail.com
            </a>
            <a href="tel:2048068665" className="flex items-center text-gray-600 hover:text-gray-800">
              <Phone className="w-5 h-5 mr-2" />
              (204) 806-8665
            </a>
            <a href="https://github.com/kdeluz" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kdeluz/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Other</h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Diploma - Full Stack Web Development</h3>
                <p className="text-gray-600">Red River College Polytechnic</p>
                <p className="text-gray-600 mt-2">GPA: 3.8</p>
              </div>
              <span className="text-gray-500">AUG 2023 - JAN 2025</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;