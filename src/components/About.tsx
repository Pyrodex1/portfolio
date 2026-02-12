'use client'

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-slate">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-dark-cyan mb-12 text-center">
          Sobre Mí
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-intermediate leading-relaxed">
              Soy un <span className="text-dark-cyan font-semibold">desarrollador Full Stack</span> de 22 años 
              especializado en la construcción de aplicaciones web y móviles robustas y escalables. 
              Mi enfoque principal está en la <span className="text-dark-cyan">calidad del código</span> y 
              la <span className="text-dark-cyan">prevención de errores</span> desde las primeras etapas del desarrollo.
            </p>
            
            <p className="text-lg text-gray-intermediate leading-relaxed">
              Tengo experiencia manejando el <span className="text-dark-cyan">ciclo completo de desarrollo</span>, 
              desde el diseño de la arquitectura hasta el despliegue en producción. Me especializo en 
              <span className="text-dark-cyan"> React, Vue.js, Next.js, TypeScript, Node.js, Python</span> y bases de datos relacionales y NoSQL.
            </p>
            
            <p className="text-lg text-gray-intermediate leading-relaxed">
              Una de mis fortalezas distintivas es la implementación de 
              <span className="text-dark-cyan"> pruebas End-to-End con Playwright</span>, 
              garantizando que las aplicaciones funcionen correctamente en todos los escenarios de uso real.
            </p>
            
            <div className="pt-6">
              <p className="text-xl text-off-white font-semibold mb-4">
                Tecnologías que domino:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'React', 'Vue.js 3', 'Next.js (App Router)', 'TypeScript', 'Node.js', 'Python',
                  'Pinia', 'Zustand', 'Tailwind CSS', 'shadcn/ui', 'PostgreSQL', 'MySQL',
                  'Supabase', 'Supabase Auth', 'Supabase Storage', 'Supabase Edge Functions',
                  'Zod', 'WebSockets', 'Playwright',
                  'Stripe', 'Shippo',
                  'Express', 'Axios', 'Cheerio', 'dotenv', 'Vercel',
                  'Flask', 'Docker', 'MongoDB'
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-gray-800 px-3 py-2 rounded-md text-dark-cyan text-sm font-mono text-center border border-gray-700 hover:border-dark-cyan transition-colors duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-dark-cyan to-gray-800 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-dark-slate rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-mono text-dark-cyan mb-4">{'</>'}</div>
                  <p className="text-lg font-mono text-off-white">Full Stack</p>
                  <p className="text-sm font-mono text-gray-intermediate">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-off-white mb-6">
            ¿Tienes un proyecto en mente? ¡Colaboremos juntos!
          </p>
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-dark-cyan text-dark-slate font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Contactar
          </button>
        </div>
      </div>
    </section>
  )
}
