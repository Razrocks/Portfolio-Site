"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight, Github } from "lucide-react"

export default function EduWikiCaseStudy() {
  // State for image carousel
  const [currentImage, setCurrentImage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Project screenshots
  const projectImages = [
    "/edu1.png",
    "/edu2.png",
    "/edu3.png",
  ]

  // Tech stack items
  const techStack = [
    { name: "Flutter", category: "Framework" },
    { name: "Dart", category: "Language" },
    { name: "Firebase Firestore", category: "Database" },
    { name: "YouTube API", category: "Integration" },
    { name: "Text-to-Speech Library", category: "Accessibility" },
  ]

  // Handle carousel navigation
  const nextImage = () => {
    setCurrentImage((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1))
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800"></div>

      {/* Back to Projects Button - Fixed Position */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/projects"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 hover:border-emerald-500/50 transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
              EduWiki – Collaborative Academic Learning Platform
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10">Product Manager (and Lead Developer) – Team of 3</p>
            <div className="flex justify-center">
              <motion.a
                href="https://github.com/Razrocks/EduWiki"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                GitHub Repo <Github size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

{/* Image Carousel */}
<section className="relative z-10 py-8 md:py-16 bg-zinc-800/50">
  <div className="container mx-auto px-4">
    <div className="relative max-w-4xl mx-auto">
      <div
        ref={carouselRef}
        className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black"
      >
        {projectImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImage === index ? 1 : 0,
              zIndex: currentImage === index ? 10 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={`Project screenshot ${index + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors z-20"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors z-20"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {projectImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImage === index ? "w-8 bg-emerald-500" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Content Sections */}
      <div className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-block w-12 h-1 bg-emerald-500"></span>
              Overview
            </h2>
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg leading-relaxed">
                EduWiki is a mobile-first academic collaboration platform built to help undergraduates bridge the gap
                between passive classroom learning and the active research, writing, and peer review practices expected
                in higher education. Designed for students transitioning into university-level academics, the app
                simulates a wiki-style environment where users engage in content creation, evaluate peer submissions,
                and build academic writing habits through structured learning modules.
              </p>
              <p className="text-lg leading-relaxed">
                Each course features guided units, citation tutorials, source validation exercises, and feedback loops —
                enabling students to think critically, write effectively, and understand what makes a credible
                contribution to academic discourse. The app was developed with an accessibility-first mindset (e.g.,
                text-to-speech for long-form content) and features gamified progress tracking to maintain engagement and
                reinforce learning outcomes over time.
              </p>
              <p className="text-lg leading-relaxed">
                EduWiki isn't just another study tool — it's an interactive scaffold that mirrors real-world research
                workflows in a format designed for undergrads.
              </p>
            </div>
          </motion.section>

          {/* The Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-block w-12 h-1 bg-purple-500"></span>
              The Problem
            </h2>
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg leading-relaxed">
                First-year university students struggle to adapt to the academic rigor of post-secondary education.
                Challenges like evaluating sources, proper citations, and analytical writing are rarely taught
                interactively. Existing tools are passive and lack real feedback loops.
              </p>
            </div>
          </motion.section>

          {/* My Role & Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-block w-12 h-1 bg-cyan-500"></span>
              My Role & Process
            </h2>
            <div className="space-y-6 text-zinc-300">
              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="pl-2">Led product strategy and scoped MVP features</li>
                <li className="pl-2">Conducted research on academic transition challenges</li>
                <li className="pl-2">Designed peer review + wiki-edit flows</li>
                <li className="pl-2">Built core infrastructure using Flutter & Firebase</li>
                <li className="pl-2">Integrated YouTube API & text-to-speech for learning guides</li>
              </ul>
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-block w-12 h-1 bg-amber-500"></span>
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-emerald-500/30 transition-colors"
                >
                  <h3 className="font-medium text-white">{tech.name}</h3>
                  <p className="text-sm text-zinc-400">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Development Contributions Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-block w-12 h-1 bg-rose-500"></span>
              Core Features
            </h2>
            <div className="space-y-6 text-zinc-300">
              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="pl-2">Wiki-style editable course content</li>
                <li className="pl-2">Peer review system (unlocked post-submission)</li>
                <li className="pl-2">Interactive citation & source validation guides</li>
                <li className="pl-2">Teacher administrator mode</li>
                <li className="pl-2">Interactive Quizzes</li>
                <li className="pl-2">Progress dashboards</li>
                <li className="pl-2">Text-to-speech accessibility</li>
              </ul>
            </div>
          </motion.section>

          {/* Key Challenges & Solutions Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-block w-12 h-1 bg-blue-500"></span>
              Key Challenges & Solutions
            </h2>

            <div className="space-y-8">
              {/* Challenge 1 */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-emerald-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-emerald-400">Low Student Motivation</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">Gamified progress system</p>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-purple-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Lack of Credible Source Awareness</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">Built citation + source guide with quizzes</p>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-cyan-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">Passive Learning Habits</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">Required content creation + feedback to progress</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Impact & Learnings Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-block w-12 h-1 bg-emerald-500"></span>
              Impact & Learnings
            </h2>

            <div className="space-y-6 text-zinc-300">
              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="pl-2">Built working MVP and demoed to academic peers</li>
                <li className="pl-2">Reinforced my ability to own a product from idea to execution</li>
                <li className="pl-2">Learned how to ship accessible UX under scope constraints</li>
              </ul>
            </div>
          </motion.section>

          {/* Back to Projects - Bottom */}
          <div className="flex justify-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700 hover:border-emerald-500/50 transition-all"
            >
              <ArrowLeft size={18} />
              Back to All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
