"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, LineChart, Code, BookOpen, Lightbulb, Users } from "lucide-react"

export default function SkillsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { title: "Product Management Skills", icon: LineChart, color: "emerald", items: [
      "Roadmapping & Prioritization (RICE, MoSCoW)",
      "Feature Specification & User Story Writing",
      "Product Discovery & User Interviews",
      "A/B Testing and Experiment Design",
      "Agile/Scrum Practices",
      "Stakeholder Communication & Alignment",
    ]},
    { title: "Technical Skills", icon: Code, color: "purple", items: [
      "Flutter, React, Node.js (Intermediate)",
      "Dart, Python, C++, Java (Intermediate)",
      "Firebase (Authentication, Firestore, Hosting)",
      "REST APIs (Integrations with YouTube API)",
      "Git/GitHub (Version Control)",
      "Text-to-Speech (TTS) API Implementation",
    ]},
    { title: "Relevant Coursework", icon: BookOpen, color: "cyan", items: [
      "Software Engineering Fundamentals (Agile, Requirements Analysis)",
      "Human-Computer Interaction (User Research, UX/UI Design Principles)",
      "Advanced Web Development (API Development, Frontend/Backend Integration)",
      "Data Management Systems (Database Design, SQL)",
      "Embedded Systems (Systems Thinking, Hardware/Software Interaction)",
    ]},
    { title: "Currently Learning", icon: Lightbulb, color: "amber", items: [
      "UX Research Techniques",
      "Advanced Product Metrics (North Star Metrics, Retention Analysis)",
      "AI Apps and Integrations (including pipelines)",
    ]},
    { title: "Soft Skills & Tools", icon: Users, color: "blue", items: [
      "Empathetic Communication",
      "Problem-Solving Mindset",
      "Collaborative Teamwork",
      "Notion, Microsoft 360 Suite (Project Management)",
      "Figma, Justinmind, Framer (Wireframing & Prototyping)",
      "Slack, Zoom (Remote Collaboration)",
      "Facebook Advertisements",
    ]},
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="relative w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 flex items-center justify-center">
              <span className="text-xl font-bold">R</span>
            </motion.div>
            <span className="font-bold text-xl">Razeen MeeraAmeer</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {"About Skills Projects Contact".split(" ").map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-zinc-900 pt-20">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {"About Skills Projects Contact".split(" ").map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-2xl font-bold text-zinc-200 hover:text-white border-b border-zinc-800 pb-4" onClick={() => setIsMenuOpen(false)}>
                {item}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800"></div>

        {/* Page Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-16 md:mb-20">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Experience
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-zinc-300 text-lg md:text-xl max-w-3xl">
              Here's a snapshot of my technical skills, product management knowledge, and the tools I use to bring ideas to life.
            </motion.p>
          </div>

          {/* Skills Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }} className="bg-zinc-800 rounded-xl overflow-hidden">
                <div className="p-6 flex items-center gap-3 border-b border-zinc-700">
                  <div className={`text-${section.color}-400`}>
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-1.5 w-2 h-2 bg-${section.color}-400 rounded-full flex-shrink-0`}></span>
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
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
