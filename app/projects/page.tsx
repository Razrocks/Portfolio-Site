"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Menu, X } from 'lucide-react'

// Project data
const projects = [
  {
    id: "eduwiki",
    title: "EduWiki Collaborative Learning App",
    tagline: "Making academic writing fun and accessible for students through interactive learning.",
    description:
      "Built a mobile app to teach students professional writing skills using interactive quizzes, video guides, and gamified progress tracking. Designed fun, kid friendly UI with Flutter and integrated Firebase for user authentication and score tracking.",
    outcome: "Successfully launched beta version with full course and quiz flows, validating engagement through student feedback and confirming alignment with academic learning goals.",
    tags: ["Product Management", "Software Dev", "Flutter", "Dart", "Youtube API", "Firebase Firetore", "Text-to-Speech"],
    image: "/edu1.png?height=600&width=800",
    link: "/projects/eduwiki",
    accentColor: "emerald",
  },
  {
    id: "portbet",
    title: "PortBet Crypto Prediction Platform",
    tagline: "The premier portfolio predictions market.",
    description:
      "Led frontend development and contributed to product strategy for PortBet, a platform that enables users to place directional bets on the future value of crypto portfolios. Designed + built core UX, authored internal product specs, and collaborated with co-founders to define contract logic, payouts, and risk models.",
    outcome: "Built and launched internal beta with simulated ETH flow, validated market need through early user testing and aligned team with scalable frontend-backend architecture.",
    tags: ["Product Management", "Software Dev", "Crypto", "React", "Typescript","Javascript","Pricing API", "Trading"],
    image: "/port1.png",
    link: "/projects/portbet",
    accentColor: "purple",
  },
  {
    id: "recipestash",
    title: "RecipeStash Recipe Management App",
    tagline: "The ultimate recipe management app for all your cooking needs.",
    description:
      "Led product development for Recipe Stash, a mobile app that allows users to create, manage, and share personalized recipes across devices. Scoped MVP, designed multi-screen UX, and implemented full-stack functionality using Flutter, SQLite, and Firebase.",
    outcome: "Shipped a polished app with daily tips, customizable themes, camera integration, and local–cloud sync, optimizing for both offline reliability and long term engagement.",
    tags: ["Product Management", "Flutter", "Dart", "Firebase Firetore", "Camera API", "Google Auth", "SQLite", "Share/Print API"],
    image: "/rec1.png",
    link: "/projects/recipestash",
    accentColor: "cyan",
  },
]

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                    item.path === "/projects" ? "text-white" : "text-zinc-400 hover:text-white"
                  } transition-colors`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-500 transition-all duration-300 ${
                      item.path === "/projects" ? "w-full" : "w-0 group-hover:w-full"
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
                  item.path === "/projects" ? "text-white" : "text-zinc-200 hover:text-white"
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
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-300 text-lg md:text-xl max-w-3xl"
          >
            A collection of projects where I've applied my technical and product management skills to solve real-world
            problems.
          </motion.p>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="h-full"
            >
              <Link href={project.link} className="h-full">
                <div className="group h-full">
                  {/* Card with elegant color accent */}
                  <div className="relative h-full flex flex-col bg-zinc-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:translate-y-[-4px]">
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-${project.accentColor}-500/5 pointer-events-none`}
                    ></div>

                    {/* Project Image with rounded corners */}
                    <div className="relative h-56 overflow-hidden rounded-t-xl">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Subtle image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60"></div>
                    </div>

                    {/* Content - Using flex-col and flex-grow to push CTA to bottom */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Title with accent color on hover */}
                      <h3
                        className={`text-xl font-bold mb-2 text-white group-hover:text-${project.accentColor}-400 transition-colors`}
                      >
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-zinc-300 text-sm mb-4">{project.tagline}</p>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm mb-4">{project.description}</p>

                      {/* Outcome with accent color */}
                      <p className={`text-${project.accentColor}-400 text-sm font-medium mb-6`}>{project.outcome}</p>

                      {/* Tags - Show all tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 bg-zinc-700 text-xs rounded-full text-zinc-300 border border-zinc-600 group-hover:border-${project.accentColor}-500/50 transition-colors`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA - Using mt-auto to push to bottom */}
                      <div className={`mt-auto flex items-center text-${project.accentColor}-400 text-sm font-medium`}>
                        View Project
                        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
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