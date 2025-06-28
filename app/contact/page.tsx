"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  Phone,
  Mail,
  Github,
  User,
  MapPin,
  Linkedin,
  ExternalLink,
  Copy,
  CheckCircle,
  AtSign,
  Briefcase,
} from "lucide-react"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  // Contact information
  const contactInfo = {
    name: "Razeen MeeraAmeer",
    email: "razeenmeerabusiness@gmail.com",
    phone: "+1 (647) 632-9267",
    github: "github.com/Razrocks",
    linkedin: "linkedin.com/in/razeen-meeraameer-644b37291",
    location: "Toronto, Canada",
  }

  // Copy to clipboard function
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  // Floating background elements
  const floatingElements = [
    {
      icon: <AtSign size={22} />,
      color: "text-purple-400",
      position: "top-60 right-[15%]",
    },
    {
      icon: <Mail size={28} />,
      color: "text-cyan-400",
      position: "top-[28rem] right-[18%]",
    },
    {
      icon: <Phone size={24} />,
      color: "text-amber-400",
      position: "top-[38rem] left-[15%]",
    },
    {
      icon: <Github size={22} />,
      color: "text-rose-400",
      position: "top-[48rem] right-[22%]",
    },
    {
      icon: <Briefcase size={26} />,
      color: "text-green-400",
      position: "top-[22rem] left-[30%]",
    },
    {
      icon: <MapPin size={20} />,
      color: "text-blue-300",
      position: "top-[34rem] right-[28%]",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800"></div>

      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <div key={index} className={`fixed ${element.position} ${element.color} opacity-20 z-0`}>
          {element.icon}
        </div>
      ))}

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
                    item.path === "/contact" ? "text-white" : "text-zinc-400 hover:text-white"
                  } transition-colors`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-500 transition-all duration-300 ${
                      item.path === "/contact" ? "w-full" : "w-0 group-hover:w-full"
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
                  item.path === "/contact" ? "text-white" : "text-zinc-200 hover:text-white"
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-300 text-lg md:text-xl max-w-3xl"
          >
            Have a question or want to work together? Feel free to reach out to me.
          </motion.p>
        </div>

        {/* Contact Content - Single Column Layout */}
        <div className="max-w-2xl mx-auto">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <User className="text-emerald-400" />
                <span>Contact Information</span>
              </h2>

              <div className="space-y-6">
                {/* Name */}
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-700/50 p-2 rounded-lg">
                    <User size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-400 mb-1">Name</h3>
                    <p className="text-white font-medium">{contactInfo.name}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-700/50 p-2 rounded-lg">
                    <Mail size={20} className="text-purple-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm text-zinc-400 mb-1">Email</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium">{contactInfo.email}</p>
                      <button
                        onClick={() => copyToClipboard(contactInfo.email, "email")}
                        className="text-zinc-400 hover:text-white transition-colors"
                        aria-label="Copy email"
                      >
                        {copied === "email" ? (
                          <CheckCircle size={16} className="text-emerald-400" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-700/50 p-2 rounded-lg">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm text-zinc-400 mb-1">Phone</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium">{contactInfo.phone}</p>
                      <button
                        onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                        className="text-zinc-400 hover:text-white transition-colors"
                        aria-label="Copy phone"
                      >
                        {copied === "phone" ? (
                          <CheckCircle size={16} className="text-emerald-400" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-700/50 p-2 rounded-lg">
                    <MapPin size={20} className="text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-400 mb-1">Location</h3>
                    <p className="text-white font-medium">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-6">Connect With Me</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* GitHub */}
                <a
                  href={`https://${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-700/30 hover:bg-zinc-700/50 p-4 rounded-lg transition-colors group"
                >
                  <Github size={20} className="text-white" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors">{contactInfo.github}</span>
                  <ExternalLink size={14} className="ml-auto text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-700/30 hover:bg-zinc-700/50 p-4 rounded-lg transition-colors group"
                >
                  <Linkedin size={20} className="text-white" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors">{contactInfo.linkedin}</span>
                  <ExternalLink size={14} className="ml-auto text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>
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
