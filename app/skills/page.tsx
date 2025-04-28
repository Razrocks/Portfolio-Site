"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, LineChart, Code, BookOpen, Lightbulb, Users } from "lucide-react"

export default function SkillsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Product Management Skills
  const productSkills = [
    "Roadmapping & Prioritization (RICE, MoSCoW)",
    "Feature Specification & User Story Writing",
    "Product Discovery & User Interviews",
    "A/B Testing and Experiment Design",
    "Agile/Scrum Practices",
    "Stakeholder Communication & Alignment",
  ]

  // Technical Skills
  const technicalSkills = [
    "Flutter (Intermediate)",
    "Dart (Intermediate)",
    "Firebase (Authentication, Firestore, Hosting)",
    "REST APIs (Integrations with YouTube API)",
    "Git/GitHub (Version Control)",
    "Text-to-Speech (TTS) API Implementation",
  ]

  // Relevant Coursework
  const relevantCoursework = [
    "Software Engineering Fundamentals (Agile, Requirements Analysis)",
    "Human-Computer Interaction (User Research, UX/UI Design Principles)",
    "Advanced Web Development (API Development, Frontend/Backend Integration)",
    "Data Management Systems (Database Design, SQL)",
    "Embedded Systems (Systems Thinking, Hardware/Software Interaction)",
  ]

  // Currently Learning
  const currentlyLearning = [
    "UX Research Techniques",
    "Advanced Product Metrics (North Star Metrics, Retention Analysis)",
    "SQL for Data Analysis",
  ]

  // Soft Skills & Tools
  const softSkills = [
    "Empathetic Communication",
    "Problem-Solving Mindset",
    "Collaborative Teamwork",
    "Notion (Project Management)",
    "Figma (Wireframing & Prototyping)",
    "Slack, Zoom (Remote Collaboration)",
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 flex items-center justify-center"
            >
              <span className="text-xl font-bold">R</span>
            </motion.div>
            <span className="font-bold text-xl">Razeen MeeraAmeer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {[
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={item.path}
                  className={`relative group ${
                    item.path === "/skills" ? "text-white" : "text-zinc-400 hover:text-white"
                  } transition-colors`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-500 transition-all duration-300 ${
                      item.path === "/skills" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-zinc-900 pt-20"
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {[
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-2xl font-bold border-b border-zinc-800 pb-4 text-left ${
                  item.path === "/skills" ? "text-white" : "text-zinc-200 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        {/* Page Header */}
        <div className="mb-16 md:mb-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent inline-block"
          >
            Skills & Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-300 text-lg md:text-xl max-w-3xl"
          >
            Here's a snapshot of my technical skills, product management knowledge, and the tools I use to bring ideas
            to life. I believe in continuous learning and building practical solutions.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Management Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex items-center gap-3 border-b border-zinc-700">
              <div className="text-emerald-400">
                <LineChart size={24} />
              </div>
              <h2 className="text-2xl font-bold">Product Management Skills</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {productSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></span>
                    <span className="text-zinc-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex items-center gap-3 border-b border-zinc-700">
              <div className="text-purple-400">
                <Code size={24} />
              </div>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></span>
                    <span className="text-zinc-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex items-center gap-3 border-b border-zinc-700">
              <div className="text-cyan-400">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-bold">Relevant Coursework</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {relevantCoursework.map((course, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    <span className="text-zinc-300">{course}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex items-center gap-3 border-b border-zinc-700">
              <div className="text-amber-400">
                <Lightbulb size={24} />
              </div>
              <h2 className="text-2xl font-bold">Currently Learning</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {currentlyLearning.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></span>
                    <span className="text-zinc-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Professional Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex items-center gap-3 border-b border-zinc-700">
              <div className="text-rose-400">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-bold">Professional Development</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></span>
                  <span className="text-zinc-300">Product Management Workshop - Stanford d.school</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></span>
                  <span className="text-zinc-300">UX Research Fundamentals - Nielsen Norman Group</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></span>
                  <span className="text-zinc-300">Agile Development Bootcamp - Scrum Alliance</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Soft Skills & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex items-center gap-3 border-b border-zinc-700">
              <div className="text-blue-400">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-bold">Soft Skills & Tools</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span className="text-zinc-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Razeen MeeraAmeer. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="text-zinc-500 hover:text-white text-sm">Privacy Policy</button>
            <button className="text-zinc-500 hover:text-white text-sm">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
