'use client'

import { ExternalLink, Github, Truck, GraduationCap, Gamepad2, ClipboardList, Linkedin, Mail, Zap } from 'lucide-react'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
  icon: React.ReactNode
  highlights: string[]
}

const projects: Project[] = [
  {
    title: "Pesca y Gana - Gaming Platform",
    description: "Plataforma de juego interactiva de alto rendimiento con lógica de azar, sistema transaccional y panel de administración completo.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "WebSockets", "Express"],
    demoUrl: "https://pescaygana.com",
    icon: <Gamepad2 className="text-dark-cyan" size={32} />,
    highlights: [
      "Core de juego con lógica de azar y distribución de premios",
      "Sistema de chat en tiempo real con WebSockets",
      "Panel administrativo para gestión de usuarios y transacciones",
      "Arquitectura de base de datos optimizada para alta concurrencia"
    ]
  },
  {
    title: "RDPM2123 Logistics & Learning Platform",
    description: "Plataforma web end-to-end que integra gestión de envíos internacionales y un sistema de e-learning completo para capacitaciones.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Express", "Playwright", "Docker"],
    demoUrl: "https://rdpm2123.com",
    icon: <Truck className="text-dark-cyan" size={32} />,
    highlights: [
      "Sistema de tracking en tiempo real para envíos internacionales",
      "Plataforma LMS con certificaciones y progreso de estudiantes",
      "API RESTful robusta con validación completa",
      "Cobertura de pruebas del 95% con Playwright"
    ]
  },
  {
    title: "E-Commerce Catalog",
    description: "Catálogo e-commerce completo construido con Vue.js 3 y TypeScript. para demostracion de habilidades frontend con gestión de estado moderna y UX optimizada.",
    technologies: ["Vue.js 3", "TypeScript", "Pinia", "Tailwind CSS", "Vite", "Vue Router"],
    demoUrl: "https://ecommerce-frontend-phi-eight.vercel.app/",
    codeUrl: "https://github.com/Pyrodex1/ecommerce-frontend",
    icon: <GraduationCap className="text-dark-cyan" size={32} />,
    highlights: [
      "Composition API con TypeScript completo y Pinia para gestión de estado",
      "Sistema avanzado de búsqueda, filtros y ordenamiento en tiempo real",
      "Carrito con persistencia, variantes de producto y cálculos automáticos",
      "Responsive design mobile-first con animaciones CSS personalizadas"
    ]
  },
  {
    title: "Gestor de Pedidos",
    description: "Aplicación web que automatiza la creación de pedidos para empresa naturista, eliminando procesos manuales en Excel y mejorando la eficiencia operativa.",
    technologies: ["Python", "Flask", "Pandas", "OpenPyXL", "JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://order-flow-two.vercel.app/",
    codeUrl: "https://github.com/Pyrodex1/OrderFlow",
    icon: <ClipboardList className="text-dark-cyan" size={32} />,
    highlights: [
      "Exportación automática a Excel con Pandas/OpenPyXL eliminando trabajo manual",
      "Interfaz responsive con búsqueda inteligente y autocompletado en tiempo real",
      "Automatización completa del flujo de pedidos desde captura hasta entrega",
      "Solución que incrementó eficiencia operativa de vendedores"
    ]
  },
  {
    title: "Pokédex",
    description: "Pokédex interactiva construida con React y JavaScript, featuring efectos glassmorphism modernos y integración completa con PokeAPI para datos en tiempo real.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "PokeAPI", "CSS3", "Responsive Design"],
    demoUrl: "https://pokedex-nine-psi.vercel.app/",
    codeUrl: "https://github.com/Pyrodex1/Pokedex",
    icon: <Zap className="text-dark-cyan" size={32} />,
    highlights: [
      "Diseño glassmorphism con efectos de vidrio modernos usando backdrop-filter",
      "Búsqueda inteligente por nombre o ID con integración completa de PokeAPI",
      "Estadísticas visuales con barras de estadisticas animadas y colores dinámicos por tipo",
      "Interfaz responsive mobile-first con animaciones CSS suaves y loading states"
    ]
  }
]

export default function Projects() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleEmailClick = () => {
    const email = 'adrianmarin060523@gmail.com'
    
    // Intentar abrir el cliente de email
    window.location.href = `mailto:${email}`
    
    // copiar al portapapeles silenciosamente
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000) // Ocultar después de 2 segundos
      }).catch(() => {
        // Si falla, mostrar el email para que lo copien manualmente
        prompt('Copia este email:', email)
      })
    } else {
      // para navegadores más antiguos
      prompt('Copia este email:', email)
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-slate">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-dark-cyan mb-16 text-center">
          Lo que he Construido
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-dark-cyan transition-all duration-300 transform hover:scale-105"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-off-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-intermediate leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-off-white mb-3">
                    Características Destacadas:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-dark-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-intermediate">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-off-white mb-3">
                    Stack Tecnológico:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 bg-dark-slate text-dark-cyan text-xs font-mono rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-cyan text-dark-slate font-semibold rounded hover:bg-opacity-90 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      {project.codeUrl ? 'Ver Demo' : 'Ver Proyecto'}
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-dark-cyan text-dark-cyan font-semibold rounded hover:bg-dark-cyan hover:text-dark-slate transition-colors duration-300 text-sm"
                    >
                      <Github size={16} />
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div id="contact" className="text-center mt-16">
          <h3 className="text-2xl font-bold text-off-white mb-4">
            Dime Hola 👋
          </h3>
          <p className="text-lg text-gray-intermediate mb-8 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me especializo en crear soluciones robustas y escalables 
            que generen valor real para tu negocio. Colaboremos para hacer realidad tu visión.
          </p>
          <button className="px-8 py-4 bg-dark-cyan text-dark-slate font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 mb-8">
            Hablemos
          </button>
          
          {/* Email Copied Notification */}
          {emailCopied && (
            <div className="mb-4 px-4 py-2 bg-dark-cyan text-dark-slate rounded-lg text-sm font-medium animate-pulse">
              ✓ Email copiado al portapapeles
            </div>
          )}
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Pyrodex1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full text-dark-cyan hover:bg-dark-cyan hover:text-dark-slate transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-marin-3bb64139a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full text-dark-cyan hover:bg-dark-cyan hover:text-dark-slate transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ae15fc89f992b9e2?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full text-dark-cyan hover:bg-dark-cyan hover:text-dark-slate transition-colors duration-300"
              aria-label="Upwork"
            >
              <div className="text-xl font-bold">Up</div>
            </a>
            <a
              href="https://discord.com/users/1125847000659804301"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full text-dark-cyan hover:bg-dark-cyan hover:text-dark-slate transition-colors duration-300"
              aria-label="Discord"
            >
              <svg 
                className="w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.1 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.063 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.128 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.1c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.956-2.42 2.157-2.42 1.21 0 2.176 1.1 2.157 2.42 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.1 2.157 2.42 0 1.334-.956 2.42-2.157 2.42z"/>
              </svg>
            </a>
            <button
              onClick={handleEmailClick}
              className="p-3 bg-gray-800 rounded-full text-dark-cyan hover:bg-dark-cyan hover:text-dark-slate transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
