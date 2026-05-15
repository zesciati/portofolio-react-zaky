function Experience() {
  return (
    <div>
      <div className="py-6 bg-white dark:bg-gray-900 px-6">
        <div className="space-y-4 max-w-2xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
              Experience
            </h3>
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
          </div>
          <div className="space-y-5">
            <div className="relative">
              <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900 dark:text-white">
                      Senior Software Engineer
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      2020 - Present
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Tech Corp
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Led development of microservices architecture, 40%
                    improvement in system performance
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900 dark:text-white">
                      Software Engineer
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      2017 - 2020
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Innovation Labs
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Architected cloud-native applications, mentored junior
                    developers
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900 dark:text-white">
                      Full Stack Developer
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      2015 - 2017
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    StartUp Inc
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Built scalable web applications using React and Node.js
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
