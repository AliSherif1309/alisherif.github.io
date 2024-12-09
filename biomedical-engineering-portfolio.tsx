import React, { useState } from 'react';
import { Home, Wrench, Server, BookOpen, Contact } from 'lucide-react';

// Project data - you can modify this with your actual projects and experiences
const projectsData = [
  {
    id: 1,
    title: 'Medical Equipment Installation',
    description: 'Successful deployment of advanced MRI diagnostic equipment at Regional Medical Center',
    category: 'Installation',
    challenges: [
      'Complex equipment calibration',
      'Ensuring precise electromagnetic shielding',
      'Coordinating with hospital IT infrastructure'
    ],
    solutions: [
      'Developed custom alignment protocols',
      'Implemented advanced calibration techniques',
      'Seamless integration with existing hospital systems'
    ]
  },
  {
    id: 2,
    title: 'Troubleshooting Biomedical Imaging System',
    description: 'Resolved critical performance issues with digital radiography equipment',
    category: 'Troubleshooting',
    challenges: [
      'Intermittent signal interference',
      'Image resolution degradation',
      'Software compatibility issues'
    ],
    solutions: [
      'Conducted comprehensive signal analysis',
      'Recalibrated imaging sensors',
      'Developed custom driver update'
    ]
  }
];

const TechnicalSkills = [
  'Medical Equipment Installation',
  'Diagnostic System Calibration',
  'Equipment Maintenance',
  'Troubleshooting Protocols',
  'Biomedical Systems Integration'
];

const BiomedicalPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Biomedical Engineering Portfolio</h1>
          <div className="flex space-x-4">
            <a href="#home" className="flex items-center hover:text-blue-200"><Home className="mr-2"/> Home</a>
            <a href="#projects" className="flex items-center hover:text-blue-200"><Wrench className="mr-2"/> Projects</a>
            <a href="#skills" className="flex items-center hover:text-blue-200"><Server className="mr-2"/> Skills</a>
            <a href="#contact" className="flex items-center hover:text-blue-200"><Contact className="mr-2"/> Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-8">
        {/* Hero Section */}
        <section id="home" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Biomedical Engineering Solutions</h2>
          <p className="text-xl text-gray-600">
            Specializing in Medical Equipment Installation, Calibration, and Advanced Troubleshooting
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Professional Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map(project => (
              <div 
                key={project.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
                <h4 className="text-2xl font-bold mb-4">{selectedProject.title}</h4>
                <p className="mb-4">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2">Challenges:</h5>
                    <ul className="list-disc pl-5">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Solutions:</h5>
                    <ul className="list-disc pl-5">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {TechnicalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border rounded"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea 
                id="message" 
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        © 2024 Biomedical Engineering Portfolio
      </footer>
    </div>
  );
};

export default BiomedicalPortfolio;
