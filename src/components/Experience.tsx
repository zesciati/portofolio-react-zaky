interface Experience {
    id: number;
    title: string;
    company: string;
    startYear: number | string;
    endYear: number | string;
    description: string;
}

const experiences: Experience[] = [
  // angka ID paling besar maka muncul paling pertama di Experience section
  {
    id: 1,
    title: "Frontend Dev",
    company: "PT Lumintu Logic",
    startYear: "Sep 2024",
    endYear: "Feb 2025",
    description:
      "Developing UI/UX and Functionality Fronted on tourism website yogyakarta (radyakartiyasa)",
  },
  {
    id: 2,
    title: "Frontend Dev & QA",
    company: "PT Unisia Tera Medika",
    startYear: "Feb 2026",
    endYear: "May 2026",
    description:
      "Designing Frontend admin website for JIH Hospital & making testcase for employee mobile application ",
  },
  {
    id: 3,
    title: "Frontend Dev",
    company: "CV Dexza Purnama",
    startYear: "June 2026",
    endYear: "Present",
    description:
      "Developed an online registration system for the Department of Tourism & Culture, building validated multi-step forms (ID, phone, certificate uploads) and admin pages with reactive forms for managing registration data, while ensuring data consistency and UI/UX quality across both sides. ",
  }
  
  
];

function Experience() {
  return (
    <section>
      <div className="py-6 bg-olive-400 dark:bg-gray-900 px-6">
        <div className="space-y-4 max-w-2xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
              Experience
            </h3>
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
          </div>
          <div className="space-y-5">
            {experiences
            .sort((a, b) => b.id - a.id) //ID Logic
            .map((exp) => (
              <div className="relative" key={exp.id}>
                <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-1.25 top-2.5 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="space-y-1" >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h4 className="text-md font-medium text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.startYear} - {exp.endYear}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
