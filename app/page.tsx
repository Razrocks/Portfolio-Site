"use client"

import { useState } from "react"
import Link from "next/link"
import { Twitter, Linkedin, Github, Mail, Menu, X, Code, LineChart, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import { useTypewriter } from "@/hooks/use-typewriter"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headingText = useTypewriter({
    text: "Hi, I'm Razeen",
    speed: 100,
    delay: 500,
  })

  return (
    <div className="min-h-screen bg-zinc-900 text-white overflow-hidden">
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
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                {item === "Projects" ? (
                  <Link
                    href="/projects"
                    className="text-zinc-400 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ) : (
                  <button className="text-zinc-400 hover:text-white transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                )}
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
            {["About", "Skills", "Projects", "Contact"].map((item) =>
              item === "Projects" ? (
                <Link
                  key={item}
                  href="/projects"
                  className="text-2xl font-bold text-zinc-200 hover:text-white border-b border-zinc-800 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ) : (
                <button
                  key={item}
                  className="text-2xl font-bold text-zinc-200 hover:text-white border-b border-zinc-800 pb-4 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </button>
              )
            )}
          </nav>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-zinc-600 font-mono">&lt;header&gt;</div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">{headingText}</span>
            </h1>

            <div className="text-zinc-600 font-mono">&lt;/header&gt;</div>

            <div className="space-y-2">
              <div className="text-zinc-600 font-mono">&lt;p&gt;</div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-zinc-400 text-xl"
              >
                Technical Product Manager
              </motion.p>
              <div className="text-zinc-600 font-mono">&lt;/p&gt;</div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="inline-block bg-gradient-to-r from-emerald-500 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                Contact me!
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex gap-6 pt-8"
            >
              {[
                { icon: <Twitter size={20} />, label: "Twitter" },
                { icon: <Linkedin size={20} />, label: "LinkedIn" },
                { icon: <Github size={20} />, label: "GitHub" },
                { icon: <Mail size={20} />, label: "Email" },
              ].map((social) => (
                <motion.button
                  key={social.label}
                  aria-label={social.label}
                  whileHover={{ y: -5, color: "#10b981" }}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700">
              <div className="h-full overflow-y-auto custom-scrollbar p-6">
                <div className="flex flex-col">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent sticky top-0 pt-1 pb-3 bg-zinc-900/80 backdrop-blur-sm z-10"
                  >
                    Bridging Technology & Product Vision
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700"
                    >
                      <div className="flex items-center mb-3">
                        <Code className="text-emerald-400 mr-2" size={20} />
                        <h3 className="font-bold">Technical Skills</h3>
                      </div>
                      <ul className="text-sm text-zinc-300 space-y-2">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Full-Stack Development
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Mobile Development (Flutter/React Native)
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Databases (SQL, MongoDB)
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          REST API Design & Integration
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700"
                    >
                      <div className="flex items-center mb-3">
                        <LineChart className="text-purple-400 mr-2" size={20} />
                        <h3 className="font-bold">Product Skills</h3>
                      </div>
                      <ul className="text-sm text-zinc-300 space-y-2">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          Agile Methodologies
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          User Story Mapping
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          Roadmap Planning
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          Stakeholder Management
                        </li>
                      </ul>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="mt-4"
                  >
                    <div className="flex items-center mb-3">
                      <Terminal className="text-zinc-400 mr-2" size={18} />
                      <h3 className="text-sm font-semibold text-zinc-400">TECHNOLOGIES</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React", "Node.js", "TypeScript", "Python", "Java", "Docker", "Flutter",
                        "SQL", "MongoDB", "PostgreSQL", "C++", "Css", "Justinmind", "Figma",
                        "Git", "Word", "Excel", "Slides", "Notion", "Framer", "Slack", "REST APIs"
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-zinc-800 rounded-full text-xs border border-zinc-700 hover:border-emerald-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Razeen. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="text-zinc-500 hover:text-white text-sm">Privacy Policy</button>
            <button className="text-zinc-500 hover:text-white text-sm">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
