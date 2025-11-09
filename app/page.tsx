'use client'

import { useState, useEffect } from 'react'
import ContactForm from '@/components/ContactForm'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'

// Sample projects data - in production, this would come from an API or CMS
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/api/placeholder/400/250',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    imageUrl: '/api/placeholder/400/250',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts and interactive maps.',
    technologies: ['Next.js', 'TypeScript', 'OpenWeather API', 'TailwindCSS'],
    imageUrl: '/api/placeholder/400/250',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
]

// Sample skills data
const skills = [
  { name: 'JavaScript', level: 90, category: 'Language' },
  { name: 'TypeScript', level: 85, category: 'Language' },
  { name: 'React', level: 88, category: 'Framework' },
  { name: 'Next.js', level: 85, category: 'Framework' },
  { name: 'Node.js', level: 82, category: 'Backend' },
  { name: 'Express', level: 80, category: 'Backend' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'PostgreSQL', level: 70, category: 'Database' },
  { name: 'TailwindCSS', level: 90, category: 'Styling' },
  { name: 'Git', level: 85, category: 'Tools' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-white">
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm a{' '}
            <span className="text-primary-600">Web Developer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            I build modern, responsive web applications with a focus on user
            experience and performance.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

