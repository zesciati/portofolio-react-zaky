const languages = ["Typescript", "Javascript", "Html", "CSS"];
const backends = ["Node.js", "Express.js", "MySQL", "Directus"];
const tools = [
  "Github",
  "Git",
  "Gitlab",
  "VsCode",
  "TailwindCSS",
  "BootstrapCSS",
  "SCSS",
  "React",
];

function CoreSkill() {
  return (
    <section className="">
      <div className="py-6 bg-olive-400 dark:bg-gray-900 px-6">
        <div className="space-y-4 max-w-2xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
              Core Skills
            </h3>
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 text-gray-700 dark:text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>

                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((language) => (
                  <span className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700" key={language}>
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
              

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 text-gray-700 dark:text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>

                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Backend
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {backends.map((backend) => (
                  <span className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700" key={backend}>
                    {backend}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 text-gray-700 dark:text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>

                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Tools
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((tool) => (
                  <span className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreSkill;
