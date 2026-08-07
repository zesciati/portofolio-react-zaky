import projects from '../data/project.json'


function Projects() {
  return (
      <div className=" text-white min-h-screen bg-olive-300 dark:bg-gray-900 border-t">
        <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center  text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) =>(
            <div className="group relative aspect-video bg-linear-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden opacity-100" key={project.title}>
              <img
                alt="E-Commerce Platform"
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform group-hover:scale-105 absolute h-full w-full inset-0"
                src={project.thumbnail}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2"> {project.title}</h3>
                <p className="text-gray-300 mb-4">
                  
                  {project.desc}
                </p>
                <div className="flex justify-between">

                <div className="flex gap-3">
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href={project.link_deploy}
                  >
                    View Project
                  </a>
                  <a
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    href={project.link_github}
                  >
                    GitHub
                  </a>
                </div>
                
                <div className="flex gap-3 ">
                  <a
                    className="text-sm px-4 py-2 bg-[#59BFD7]/30 hover:bg-[#59BFD7]/80 rounded-full transition-colors "
                  >
                    {project.Programming_language} 
                  </a>
                  {/* <a
                    className="text-sm px-4 py-2 bg-black/30 hover:bg-black/80 rounded-full transition-colors "
                  >
                    {project.Programming_language['language-2']} 
                    
                  </a> */}
                </div>
                </div>
              </div>
            </div>
            ))}
            
          </div>
        </section>
      </div>
  );
}

export default Projects;
