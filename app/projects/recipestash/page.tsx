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
    "/rec1.png",
    "/rec2.png",
    "/rec3.png",
  ]

  // Tech stack items
  const techStack = [
    { name: "Flutter", category: "Framework" },
    { name: "Dart", category: "Language" },
    { name: "Firebase Firestore", category: "Database" },
    { name: "SQLite", category: "Local Storage	" },
    { name: "Camera + Images", category: "Media Access" },
    { name: "HTTP Requests", category: "Networking" },
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
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 hover:border-cyan-500/50 transition-all"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              RecipeStash – All In One Recipe Management App
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10">Product Manager & Developer – Team of 3</p>
            <div className="flex justify-center">
              <motion.a
                href="https://github.com/Razrocks/RecipestashApp.git"
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
                currentImage === index ? "w-8 bg-cyan-500" : "bg-white/50"
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
              <span className="inline-block w-12 h-1 bg-cyan-500"></span>
              Overview
            </h2>
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg leading-relaxed">
                Recipe Stash is a mobile-first recipe management platform built to address the fragmented experience home cooks face when storing and organizing culinary content.
                 Designed with scalability and offline-first access in mind, the app combines robust local storage with cloud synchronization to ensure seamless access to personalized recipe data across devices.

              </p>
              <p className="text-lg leading-relaxed">
                The App offers structured user flows for creating, editing, and categorizing recipes, complete with image uploads, theme customization, and shareable outputs. 
                Built using Flutter and integrated with both SQLite and Firebase Firestore, Recipe Stash provides a performant cross-platform experience with real-time
                cloud syncing and reliable offline functionality.
                To maintain engagement, the app features daily cooking tips, randomized recipe suggestions, and contextual notifications.
                A focus on accessibility and responsive UI ensures usability across a diverse user base, while snackbars and dialogs reinforce consistent user feedback.
              </p>
              <p className="text-lg leading-relaxed">
                Recipe Stash is more than a digital archive — it’s a scalable and interactive tool that supports the evolving needs of modern home cooks.
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
                Home cooks often struggle to keep track of recipes scattered across physical notes, web bookmarks, and screenshots.
                Most existing apps lack personalization, offer clunky UX, or make syncing across devices unreliable. 
                There's a need for a clean, accessible, and dynamic solution that brings everything into one well put together app.
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
                <li className="pl-2">Led product strategy and scoped core features for MVP</li>
                <li className="pl-2">Designed UI/UX for multi-screen navigation and flow</li>
                <li className="pl-2">Developed frontend and backend using Flutter & Firebase</li>
                <li className="pl-2">Implemented data syncing between local (SQLite) and cloud (Firestore)</li>
                <li className="pl-2">Added daily engagement features, including tips and recipe suggestions</li>
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
                  className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-cyan-500/30 transition-colors"
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
                <li className="pl-2">Multi-screen navigation with bottom nav bar</li>
                <li className="pl-2">Recipe creation, editing, and detailed view</li>
                <li className="pl-2">Local + cloud storage with syncing</li>
                <li className="pl-2">Share and print functionality</li>
                <li className="pl-2">Snackbars and confirmation dialogs for key actions</li>
                <li className="pl-2">Account management (login, switch account)</li>
                <li className="pl-2">Theme customization with color picker and dark mode</li>
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
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-cyan-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">Scattered Data Storage</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">Implemented reliable local storage via SQLite with Firestore syncing for cloud backup and device switching.</p>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-purple-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-purple-400">User Engagement & Retention</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">Added daily recipe suggestions and cooking tips, along with snackbars and notifications for key interactions.</p>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-emerald-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-emerald-400">Personalization Needs</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">Included theme customization via color picker and seamless photo addition through camera and gallery support.</p>
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
              <span className="inline-block w-12 h-1 bg-cyan-500"></span>
              Impact & Learnings
            </h2>

            <div className="space-y-6 text-zinc-300">
              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="pl-2">Successfully built and tested MVP across devices</li>
                <li className="pl-2">Strengthened my ability to ship full-stack Flutter apps</li>
                <li className="pl-2">Learned how to create seamless syncing between local and cloud storage</li>
                <li className="pl-2">Reinforced UX design principles by building intuitive flows for diverse users</li>
              </ul>
            </div>
          </motion.section>

          {/* Back to Projects - Bottom */}
          <div className="flex justify-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-all"
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
