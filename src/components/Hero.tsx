'use client'

import { ArrowDown, FileText, FolderOpen } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono text-gray-intermediate mb-4">
            Hola, me llamo
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-off-white mb-6">
            Adrian Marin
          </h2>
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans text-off-white leading-relaxed">
            Soy un{' '}
            <span className="text-dark-cyan font-semibold">
              Desarrollador Full Stack
            </span>{' '}
            con experiencia en la construcción de{' '}
            <span className="text-dark-cyan font-semibold">
              software robusto y escalable
            </span>{' '}
            para entornos desktop y mobile
          </h3>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg sm:text-xl text-gray-intermediate max-w-3xl mx-auto leading-relaxed">
            Especializado en la{' '}
            <span className="text-dark-cyan">prevención de errores</span>,{' '}
            <span className="text-dark-cyan">calidad del código</span> y{' '}
            <span className="text-dark-cyan">testing E2E con Playwright</span>.
            Construyo soluciones completas desde el frontend hasta el backend.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex items-center gap-3 px-8 py-4 bg-dark-cyan text-dark-slate font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            <FileText size={20} />
            Revisar CV
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="group flex items-center gap-3 px-8 py-4 border-2 border-dark-cyan text-dark-cyan font-semibold rounded-lg hover:bg-dark-cyan hover:text-dark-slate transition-all duration-300 transform hover:scale-105"
          >
            <FolderOpen size={20} />
            Ver Proyectos
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-dark-cyan hover:text-off-white transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
