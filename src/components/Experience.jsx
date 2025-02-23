"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "DanLabs",
    companyLink: "https://www.danlabs.xyz",
    duration: "Jan 2024 - Present",
    description:
      "Developing and maintaining scalable web applications and backend systems.",
  },
  {
    title: "FullStack Developer",
    company: "Zoth.io",
    companyLink: "https://zoth.io",
    duration: "Aug 2024 - Oct 2024",
    description:
      "Implemented responsive user interfaces and optimized performance across projects.",
  },
  {
    title: "Backend Intern",
    company: "Mera Kal",
    companyLink: "https://merakal.in",
    duration: "April 2024 - July 2024",
    description:
      "Assisted in various software development tasks and contributed to agile projects.",
  },
  {
    title: "Machine Learning Intern",
    company: "Seigritech",
    companyLink: "https://segritech.com",
    duration: "Jan 2024 - July 2024",
    description:
      "Assisted in various software development tasks and contributed to agile projects.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
             
            >
              <div  className="relative flex flex-col md:flex-row items-center md:items-start p-6 rounded-xl shadow-md border-l-4 border-indigo-500 bg-white/5 backdrop-blur-lg overflow-hidden hover:bg-white/10 transition-all">
              <div className="flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-full shadow-md md:mr-6">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                  {exp.title} 
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 flex items-center gap-1 hover:text-indigo-300 transition-all"
                  >
                    @ {exp.company} <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>
                <p className="text-gray-400 flex items-center gap-2 mt-1">
                  <Calendar className="w-5 h-5" /> {exp.duration}
                </p>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  {exp.description}
                </p>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;