'use client'

import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Founder & Full Stack Developer (Proyecto Personal)",
    company: "Mi emprendimiento",
    location: "Remote",
    period: "27/01/2026 - Presente",
    achievements: [
      "Diseñé y construí ListoPedido: catálogos digitales multi-tienda con carrito y pedidos vía WhatsApp",
      "Implementé dashboard para vendedores con gestión de productos, pedidos y configuración de tienda",
      "Integré soporte de precios en USD/VES usando la tasa BCV con cache",
      "Desarrollé BCV-API (rates-api) en Node.js/Express para consultar tasas del BCV y exponerlas por HTTP",
      "Preparé despliegue en Vercel con Function + rewrites para operar como servicio de soporte del producto"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "ndsbeautyy",
    location: "Remote",
    period: "2026 - Presente",
    achievements: [
      "Desarrollé e-commerce MVP minimalista con storefront, auth y panel admin (Vue 3 + Vite)",
      "Implementé backend en Supabase (Postgres, Auth, Storage) con RLS y control de acceso admin via RPC is_admin()",
      "Integré pagos con Stripe Checkout y webhook en Supabase Edge Functions para registrar y actualizar orders/payments",
      "Implementé cotización de shipping en tiempo real con Shippo, seleccionando opción más barata y una express si existe",
      "Construí admin interno para CRUD de productos e imágenes con subida multi-imagen y recorte/preview antes de subir"
    ]
  },
  {
    title: "Desarrollador Full Stack & Arquitecto de Software",
    company: "Pingüino Digital",
    location: "Remote",
    period: "2022 - Presente",
    achievements: [
      "Desarrollé el core completo de Pesca y Gana: juego interactivo con lógica de azar y distribución de premios",
      "Implementé sistema de chat propietario con WebSockets para comunicación en tiempo real",
      "Diseñé y programé panel de administración completo para gestión de usuarios y transacciones",
      "Optimicé esquema de base de datos PostgreSQL y consultas SQL para alta performance transaccional",
      "Construí arquitectura escalable con React/Next.js frontend y Node.js/Express backend"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "RDPM2123 Internacional C.A.",
    location: "Remote",
    period: "2022 - Presente",
    achievements: [
      "Desarrollé landing corporativa con Next.js 14 y TypeScript para servicios de logística internacional y agenciamiento aduanal",
      "Implementé navegación por anclajes con scroll suave y header sticky con backdrop blur",
      "Construí formulario de contacto con validación en tiempo real e integración directa a WhatsApp",
      "Diseñé sistema de colores personalizados y animaciones con Framer Motion y TailwindCSS",
      "Optimicé SEO y estructura semántica para producción con metadatos y accesibilidad"
    ]
  },
  {
    title: "Desarrollador Python & Automatización",
    company: "Tienda Naturópata",
    location: "Remote",
    period: "2022",
    achievements: [
      "Desarrollé aplicación sencilla de gestión de pedidos con Python/Flask eliminando procesos manuales",
      "Implementé exportación automática a Excel con Pandas/OpenPyXL reduciendo tiempo de procesamiento en 80%",
      "Creé interfaz responsive con búsqueda inteligente y autocompletado mejorando UX de vendedores",
      "Automaticé flujo completo desde captura hasta entrega incrementando eficiencia operativa"
    ]
  }
]

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-dark-cyan mb-8">
            Experiencia Laboral
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-dark-cyan text-dark-slate font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 animate-bounce"
          >
            {isExpanded ? 'Ocultar Experiencia' : 'Ver Experiencia Completa'}
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-dark-cyan"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Marker */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-dark-cyan rounded-full border-4 border-dark-slate z-10"></div>
                
                {/* Content Card */}
                <div className="ml-12 md:ml-20 flex-1">
                  <div className="bg-dark-slate border border-gray-700 rounded-lg p-6 hover:border-dark-cyan transition-colors duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-off-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-intermediate">
                        <span className="font-medium text-dark-cyan">{exp.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-off-white mb-3">
                        Logros Destacados:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-dark-cyan rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-intermediate leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
