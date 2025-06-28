"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight, Github, FileText, BarChart } from "lucide-react"

export default function AnalyticsDashboardCaseStudy() {
  // State for image carousel
  const [currentImage, setCurrentImage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Project screenshots
  const projectImages = [
    "/port1.png",
    "/port2.png",
    "/port3.png",
    "/port4.png",
    "/port5.png",
    "/port6.png",
    "/port7.png",
  ]

  // Tech stack items
  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Typescript", category: "Frontend" },
    { name: "Solidity", category: "Backend Logic" },
    { name: "Javascript", category: "Backend Storage" },
    { name: "Apex Charting", category: "Charting" },
    { name: "Axiom", category: "Pricing API" },
    { name: "SQL", category: "Database" },
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
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 hover:border-purple-500/50 transition-all"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
              PortBet Crypto Portfolio Predictions Platform ( In Dev)
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10">Product Manager & Frontend Dev + Integrations </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://github.com/rtagomata/PortBet"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                GitHub Repo <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.notion.so/PortBet-Product-Vision-1d5d7f9566e7804abc5bd2d96b04fbea"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                Product Vision <FileText size={18} />
              </motion.a>
              <motion.a
                href="https://www.notion.so/PortBet-User-Research-Discovery-1d5d7f9566e780f0bc3ecb3e13169b65?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                User Research <BarChart size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="relative z-10 py-8 md:py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            <div
              ref={carouselRef}
              className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
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
                    src={image || "/placeholder.svg"}
                    alt={`Project screenshot ${index + 1}`}
                    fill
                    className="object-cover object-center"
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
                      currentImage === index ? "w-8 bg-purple-500" : "bg-white/50"
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
              <span className="inline-block w-12 h-1 bg-purple-500"></span>
              Overview
            </h2>
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg leading-relaxed">
              PortBet is a crypto speculation platform that lets users place directional bets on whether a portfolio of crypto
              assets will reach a target valuation by a given expiry date. Unlike traditional trading platforms that only support
              leverage based bets on single tokens, PortBet introduces a new category of playing the markets, portfolio based
              contracts.
              </p>
              <p className="text-lg leading-relaxed">
              I led the frontend development and product architecture, collaborating closely with two other co-founders. The platform
              enables users to create or participate in contracts with For/Against positions, define payout logic (Basic or
              Advanced), and optionally exit early or trade positions in a marketplace.
              </p>
              <p className="text-lg leading-relaxed">
              Our goal was to lower the knowledge barrier for crypto speculation while allowing high-upside returns for users with
              smaller capital.
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
              <span className="inline-block w-12 h-1 bg-cyan-500"></span>
              The Problem
            </h2>
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg leading-relaxed">
              Crypto speculation currently relies heavily on margin trading or holding assets outright. This introduces high
              cognitive and capital costs, especially for casual users. Additionally, there is no mechanism to bet on the collective
              performance of a basket of tokens, despite the fact that investors often think in terms of portfolios, not
              individual coins.
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
              <span className="inline-block w-12 h-1 bg-emerald-500"></span>
              My Role & Process
            </h2>
            <div className="space-y-6 text-zinc-300">
              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="pl-2">
                Authored the core technical spec for multi-token portfolio contracts and payout logic (Basic method)
                </li>
                <li className="pl-2">Designed and built the entire frontend in React/TS, upgrading the platform from a single-server monolith to a client-server architecture</li>
                <li className="pl-2">
                Wrote and published Notion-based product documentation for internal alignment
                </li>
                <li className="pl-2">
                Collaborated/designed on logic for For/Against position locking and payouts
                </li>
                <li className="pl-2">
                  Worked with engineers to implement real-time data processing and optimize performance
                </li>
                <li className="pl-2">
                  Managed the project using agile methodology, prioritizing features using the RICE framework
                </li>
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
                  className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-purple-500/30 transition-colors"
                >
                  <h3 className="font-medium text-white">{tech.name}</h3>
                  <p className="text-sm text-zinc-400">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Core Features Section */}
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
                <li className="pl-2">Create or bet on crypto portfolio contracts with defined expiry and target valuation</li>
                <li className="pl-2">For/Against position system that enables directional bets with capped downside</li>
                <li className="pl-2">Early exit functionality with fee-based collateral withdrawal</li>
                <li className="pl-2">Position window mechanics to ensure fair play and incentivize early bets</li>
                <li className="pl-2">Basic payout engine that distributes the losing side’s TVL proportionally</li>
                <li className="pl-2">ERC-20 ETH-based payments and withdrawals</li>
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
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-purple-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Early Bet Disincentive</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">
                  Proposed a contract "position window" to encourage early participation and prevent unfair last-minute betting.
                  Also explored a dynamic pricing formula based on distance from target valuation.
                  </p>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-cyan-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">Frontend Modularity</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">
                  Split the system into frontend and backend servers. Used Next.js with modular components and built re-usable
                  carousel + contract display interfaces.
                  </p>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-emerald-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-emerald-400">Abstracting Betting Logic for Users</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">Solution:</h4>
                  <p className="text-zinc-300">Translated complex smart contract mechanics into understandable UX: e.g., "Will this basket hit $X by Friday?"
                  with toggles for up/down bets, confidence sliders, and simplified ETH commitment inputs.
                  </p>
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
              <span className="inline-block w-12 h-1 bg-purple-500"></span>
              Impact & Learnings
            </h2>

            <div className="space-y-6 text-zinc-300">
              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="pl-2">Validated concept with multiple DeFi users who expressed interest in portfolio betting</li>
                <li className="pl-2">Improved platform modularity by splitting server/frontend, enabling future scalability</li>
                <li className="pl-2">
                Learned to bridge technical execution with user experience clarity in financial products
                </li>
                <li className="pl-2">
                Discovered that most speculation users don’t want control over token-by-token positions
                </li>
                <li className="pl-2">
                Refined internal process using Notion for product specs, vision alignment, and roadmap planning
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Back to Projects - Bottom */}
          <div className="flex justify-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700 hover:border-purple-500/50 transition-all"
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
