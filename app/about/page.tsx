"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = [
    "User-first product thinking and discovery",
    "Agile execution (Scrum, iterative delivery)",
    "Strong technical fluency (Flutter, Firebase, APIs)",
    "Cross-functional collaboration with engineering and design teams",
    "Data-driven prioritization and outcome-focused building",
    "Passion for continuous learning and self-improvement",
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
          {/* About Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-6">
              <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </motion.h1>

              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-700">
                <Image src="/pfp2.png" alt="Razeen's portrait" fill className="object-cover" />
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-4 text-zinc-300 text-lg">
              <p>
                I'm Razeen, a technical product builder based in Toronto, passionate about creating solutions at the intersection of technology, business needs, and user experience.
              </p>
              <p>
                With a foundation in software development and a growing focus on product management, I enjoy turning ideas into user centered products through iterative execution and collaboration.
              </p>
              <p>
                I believe that great products come from understanding real user problems, building iteratively, and relentlessly focusing on delivering meaningful outcomes.
              </p>
            </motion.div>
          </div>

          {/* What I Bring Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Zap className="text-emerald-400" size={24} />
              <span>What I Bring</span>
            </h2>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 * index }} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></span>
                  <span className="text-zinc-300 text-lg">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Personal Interests Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4">Beyond Work</h2>
              <p className="text-zinc-300 text-lg">
                Outside of tech, I enjoy fitness, staying on top of emerging technologies, keeping up with web3 and crypto products, as well as Swimming.
              </p>
            </div>
          </motion.section>
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