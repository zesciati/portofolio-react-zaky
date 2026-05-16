
function Projects() {
  return (
      <div className=" text-white min-h-screen bg-olive-300 dark:bg-gray-900 border-t">
        <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center  text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* E-Commerce Platform */}
            <div className="group relative aspect-video bg-linear-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden opacity-100">
              <img
                alt="E-Commerce Platform"
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform group-hover:scale-105 absolute h-full w-full inset-0"
                src="/_next/image?url=%2Fcode.jpg&w=3840&q=75"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  A modern e-commerce platform built with Next.js and Stripe
                </p>
                <div className="flex gap-4">
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href="#"
                  >
                    View Project
                  </a>
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href="#"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* AI Chat Application */}
            <div className="group relative aspect-video bg-linear-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden opacity-100">
              <img
                alt="AI Chat Application"
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform group-hover:scale-105 absolute h-full w-full inset-0"
                src="/_next/image?url=%2Flaptop.jpg&w=3840&q=75"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">AI Chat Application</h3>
                <p className="text-gray-300 mb-4">
                  Real-time chat application powered by OpenAI
                </p>
                <div className="flex gap-4">
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href="#"
                  >
                    View Project
                  </a>
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href="#"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Task Management */}
            <div className="group relative aspect-video bg-linear-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden opacity-100">
              <img
                alt="Task Management"
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform group-hover:scale-105 absolute h-full w-full inset-0"
                src="/_next/image?url=%2Fcode.jpg&w=3840&q=75"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">Task Management</h3>
                <p className="text-gray-300 mb-4">
                  Collaborative task management tool with real-time updates
                </p>
                <div className="flex gap-4">
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href="#"
                  >
                    View Project
                  </a>
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href="#"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio Generator */}
            <div className="group relative aspect-video bg-linear-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden opacity-100">
              <img
                alt="Portfolio Generator"
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform group-hover:scale-105 absolute h-full w-full inset-0"
                src="/_next/image?url=%2Flaptop.jpg&w=3840&q=75"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">Portfolio Generator</h3>
                <p className="text-gray-300 mb-4">
                  Dynamic portfolio generator for developers
                </p>
                <div className="flex gap-4">
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href="#"
                  >
                    View Project
                  </a>
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href="#"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Projects;
