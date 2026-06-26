import "../index.css";
import FaceZaky from "../assets/pixelimage.png";
import PdfCvZaky from "../assets/CV-ZAKY (6).pdf";
import CoreSkill from "../components/CoreSkill";
import Experience from "../components/Experience";
// import Projects from "../components/Projects";
import { useState } from "react";

function Identity() {
  const [isLight, setLight] = useState(false);
  const toggleTheme = () => {
    setLight(!isLight);
  };

  return (
    <div
      className={
        isLight ? "bg-olive-300" : "dark min-h-screen bg-gray-900 text-white"
      }
    >
      <button
        onClick={toggleTheme}
        className="fixed right-8 top-4 border rounded-full z-50 bg-white dark:bg-gray-800 p-1 hover"
      >
        {isLight ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
      <main className="min-h-screen md:h-max flex flex-col bg-olive-300 dark:bg-gray-900 pb-16 sm:pb-0">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
            <div className="w-full py-8 md:py-0 bg-olive-300 dark:bg-gray-900 px-6 pt-16 sm:pt-0">
              <div className="space-y-8 text-center">
                <div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                    <img
                      src={FaceZaky}
                      alt="Profile"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Zaky Abiyyu Andri
                  </h1>
                  <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                    Fullstack Software Engineer
                  </h2>
                  <div className="h-px w-16 bg-gray-200 dark:bg-gray-700 mx-auto my-4"></div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                    Web developer with frontend and backend experience
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-4 h-4 text-gray-600 dark:text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a
                      href="mailto:zakyabiyyu2003@gmail.com"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      zakyabiyyu2003@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-4 h-4 text-gray-600 dark:text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Solo, ID
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 pt-2">
                    <a
                      href="https://github.com/zesciati"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/zaky-abiyyu-andri-390b21281/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 opacity-75 transform-none">
                    <a
                      href={PdfCvZaky}
                      download=""
                      className="group flex items-center gap-2 px-6 py-3 bg-white/25 dark:bg-white/5 rounded-full hover:bg-white/30 dark:hover:bg-white/10 transition-colors w-full sm:w-auto "
                    >
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
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>

                      <span className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        View Resume
                      </span>
                    </a>
                  </div>
                  <a
                    href="https://portfolio-zak.pages.dev/" className="dark:hover:text-orange-300 border rounded-2xl p-2 hover:text-orange-900"
                  >
                    Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col md:justify-center">
            <CoreSkill />
            <Experience />
          </div>
        </div>
      </main>
      {/* <section className="antialiased">
        <Projects />
      </section> */}
    </div>
  );
}

export default Identity;
