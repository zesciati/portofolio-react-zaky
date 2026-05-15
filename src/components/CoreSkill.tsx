const languages = ["Typescript", "Javascript", "Html", "CSS"];
const backends = ["Node.js", "Express.js"];
const tools = [
  "Github",
  "Gitlab",
  "VsCode",
  "TailwindCSS",
  "BootstrapCSS",
  "SCSS",
  "React",
];

function CoreSkill() {
  return (
    <div className="">
      <div className="py-6 bg-white dark:bg-gray-900 px-6">
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
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9DA2AF"
                  stroke-width="2"
                >
                  <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3"></path>
                </svg>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((language) => (
                  <span className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9DA2AF"
                  stroke-width="2"
                >
                  <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                </svg>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Backend
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {backends.map((backend) => (
                  <span className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700">
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
                  className="size-4 text-gray-400"
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
                  <span className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreSkill;
