import "../index.css";
// import faceImage from "../assets/ian-dooley-d1UPkiFd04A-unsplash.png";
import faceJurica from "../assets/jurica-koletic-7YVZYZeITc8-unsplash (4).png";
// import faceDooley from "../assets/ian-dooley-d1UPkiFd04A-unsplash.png";

function App() {
  return (
    <div>
      <div className="border-b border-gray-200/25">
        <div className="w-full py-8 px-6 pt-16">
          <div className=" space-y-8 text-center">
            <div className="relative w-28 h-28 mx-auto">
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 ">
                <img src={faceJurica} alt="" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-white font-bold text-2xl">
                Zaky Abiyyu Andri
              </div>
              <div className="text-gray-600 text-lg">
                Fullstack Software Engineer
              </div>
              <div className="h-px w-16 bg-gray-200 mx-auto my-4"></div>
              <div className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                Web developer with frontend and backend experience
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail-icon lucide-mail text-gray-400 "
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <a
                  href="https://gmail.com"
                  className="hover:text-white text-sm text-gray-600 "
                >
                  zakyabiyyu2003@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-map-pinned-icon lucide-map-pinned text-gray-400"
                >
                  <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                  <circle cx="12" cy="8" r="2" />
                  <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                </svg>
                <span className="text-sm text-gray-600">
                  Yogyakarta, Indonesia
                </span>
              </div>
              <div className="flex items-center justify-center space-x-4 pt-2 ">
                <a
                  href="https://github.com"
                  className="p-2 hover:text-white text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 432 416"
                    fill="currentColor"
                  >
                    <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" />
                  </svg>
                </a>
                <a href="" className="p-2 hover:text-white text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545v5.238ZM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44Zm1.484 10.85h-2.97V7.5h2.97v9.543ZM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="py-6 bg-gray-900 px-6">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-white text-center">
                  Core Skills
                </h3>
                <div className="h-px w-full bg-gray-700 mt-2"></div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      viewBox="0 0 1024 851"
                      width="20"
                      height="20"
                      fill="none"
                    >
                      <path
                        d="M877.552 1.13467L297.437 0L284.949 10.212L283.814 24.9627H224.78L217.969 28.3667L211.157 39.7133V49.9253L196.399 48.7907L188.452 53.3293L183.911 76.0227H168.018L160.071 80.5613L156.665 87.3693V103.255H141.907L132.825 108.928L129.419 115.736V131.621L113.525 130.487L105.579 135.025L102.173 141.833L103.308 157.719L86.2794 158.853L76.0621 170.2V208.779L63.5743 211.048L53.357 220.125L52.2217 260.973L38.5987 262.108L28.3814 272.32L26.1109 315.437L7.94678 318.841L0 331.323L1.13525 601.373L12.4878 611.585L27.2461 612.72L28.3814 653.568L36.3282 661.511L48.816 662.645L49.9512 673.992L56.7627 684.204L65.8448 688.743H78.3326L79.4678 705.763L89.6851 714.84L102.173 715.975L103.308 729.591L110.12 738.668L122.608 743.207H156.665L157.8 809.017L164.612 815.825L183.911 818.095V832.845L192.993 847.596L199.805 851H210.022L217.969 845.327H834.412L841.224 849.865L854.847 848.731L868.47 830.576L869.605 797.671L866.2 770.439L958.155 769.304L968.372 757.957L969.508 743.207L980.86 742.072L989.942 734.129L995.619 723.917V715.975L1013.78 713.705L1020.59 706.897L1022.86 641.087L1020.59 577.545L1024 569.603V559.391L1019.46 551.448L1012.65 548.044H993.348L995.619 532.159L993.348 418.692L996.754 400.537L988.807 390.325L969.508 389.191V196.297L961.561 186.085L942.262 184.951V65.8107L939.991 56.7333L933.18 49.9253L916.151 48.7907L915.016 32.9053L910.474 24.9627L892.31 21.5587L887.769 7.94267L877.552 1.13467Z"
                        fill="#E9EEEB"
                      />
                      <path
                        d="M977.455 566.199L976.319 567.333V568.468V695.551L975.184 696.685H974.049H949.073V722.783H950.208H951.344H976.319V697.82H979.725H980.86H983.131H987.672H989.942H996.754H997.889H999.024H1001.29H1002.43L1003.57 696.685V566.199H977.455Z"
                        fill="#0C1019"
                      />
                      <path
                        d="M384.851 94.1774V142.968V300.687V305.225V309.764V330.188V333.592L407.557 334.727V493.58H897.987L899.122 492.445V355.151H873.011V152.045H848.035V95.312L846.9 94.1774H458.643H457.508H384.851Z"
                        fill="#0C1019"
                      />
                      <path
                        d="M412.098 331.323L434.803 333.592H435.938L437.073 461.809H868.47V411.884L845.765 410.749L844.63 205.375L823.06 204.24L821.925 203.105V123.679H412.098V331.323Z"
                        fill="#BECFCB"
                      />
                      <path
                        d="M712.94 351.747L711.805 352.881V354.016V382.383V383.517H712.94H737.916H739.051V351.747H712.94Z"
                        fill="#0C1019"
                      />
                      <path
                        d="M564.222 351.747V357.42V364.228V366.497V368.767V383.517L590.333 384.652V410.749V411.884L591.468 413.019H711.805V384.652V383.517H591.468V352.881V351.747H564.222Z"
                        fill="#0C1019"
                      />
                      <path
                        d="M643.69 240.549V241.684V334.727H644.825H670.936H672.071L673.206 333.592V332.457V241.684V240.549H672.071H643.69Z"
                        fill="#0C1019"
                      />
                      <path
                        d="M702.723 184.951V280.263H708.399H709.534H733.375V184.951H717.481H716.346H708.399H704.993H702.723Z"
                        fill="#0C1019"
                      />
                      <path
                        d="M531.299 184.951V186.085L532.435 280.263H533.57H535.84H536.976H538.111H544.922H554.004H561.951V184.951H560.816H559.681H558.545H554.004H551.734H535.84H534.705H532.435H531.299Z"
                        fill="#0C1019"
                      />
                      <path
                        d="M303.113 43.1173V18.1547H873.011V38.5787V43.1173L899.122 44.252V69.2147H925.233V73.7533V91.908V93.0427V106.659V107.793V110.063V111.197V119.14V121.409V123.679V125.948V128.217V130.487V131.621V132.756V133.891V139.564V140.699V147.507V152.045V174.739V179.277V180.412V182.681L926.368 201.971L947.938 203.105H950.208L951.344 408.48H976.319V566.199H971.778H949.073L947.938 408.48H943.397H936.585H926.368H925.233L924.098 407.345V203.105H897.987V73.7533V70.3493H870.741V48.7907V46.5213L330.359 48.7907V52.1947V54.464V55.5987V64.676V65.8107V68.08V69.2147L307.654 70.3493L305.384 69.2147L304.248 70.3493V152.045L330.359 153.18V163.392V164.527V200.836V201.971V207.644V209.913V217.856V218.991V234.876V237.145V254.165V255.3V272.32V273.455V274.589V275.724V276.859V279.128V280.263V282.532V291.609V292.744V300.687V301.821V302.956V305.225V309.764V310.899V312.033V313.168V315.437V319.976V325.649V326.784V334.727V335.861V336.996V338.131V344.939V346.073V354.016V358.555V359.689V360.824V361.959V373.305V405.076V406.211V408.48V409.615L331.494 410.749H336.035H338.306H340.576H341.712H345.117H354.2H358.741V697.82H331.494V722.783H949.073V723.917V750.015H849.171L848.035 827.172V828.307H844.63H206.616H203.211V827.172L202.075 799.94H200.94H181.641H177.1H175.965L174.829 722.783H123.743L122.608 697.82H108.984H107.849H99.9024H98.7672L97.6319 670.588H72.6563H71.521L70.3858 645.625H44.2749V593.431H18.1641L17.0288 592.296V518.543V512.869V511.735V510.6V508.331V507.196V417.557V416.423V334.727H18.1641H44.2749V333.592V281.397L45.4102 280.263H70.3858L71.521 241.684V240.549V239.415V237.145V233.741V232.607V228.068V226.933H97.6319V177.008L98.7672 175.873L122.608 173.604V167.931V153.18L123.743 152.045H148.718V120.275H174.829V95.312L175.965 94.1773H181.641H187.317H199.805L202.075 93.0427V82.8307V70.3493L228.186 69.2147L229.321 68.08V44.252H230.457H231.592L303.113 43.1173Z"
                        fill="#0C1019"
                      />
                      <path
                        d="M331.494 751.149V752.284L332.63 801.075H817.384H818.519H819.654L821.925 799.94V798.805V781.785V777.247V776.112V773.843V771.573V754.553V752.284V751.149H331.494Z"
                        fill="#E9EEEB"
                      />
                      <rect
                        x="412"
                        y="589"
                        width="25"
                        height="67"
                        fill="#0C1019"
                      />
                      <rect
                        x="497"
                        y="589"
                        width="25"
                        height="67"
                        fill="#0C1019"
                      />
                      <rect
                        x="437"
                        y="566"
                        width="60"
                        height="23"
                        fill="#0C1019"
                      />
                      <rect
                        x="437"
                        y="656"
                        width="60"
                        height="23"
                        fill="#0C1019"
                      />
                      <rect
                        x="842"
                        y="589"
                        width="25"
                        height="67"
                        fill="#0C1019"
                      />
                      <rect
                        x="927"
                        y="589"
                        width="25"
                        height="67"
                        fill="#0C1019"
                      />
                      <rect
                        x="867"
                        y="566"
                        width="60"
                        height="23"
                        fill="#0C1019"
                      />
                      <rect
                        x="867"
                        y="656"
                        width="60"
                        height="23"
                        fill="#0C1019"
                      />
                    </svg>
                    <h4 className="text-sm font-medium text-gray-400">
                      Languages
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300 rounded-full ring-1 ring-gray-700  ">
                      JavaScript
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300 rounded-full ring-1 ring-gray-700  ">
                      Html
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300 rounded-full ring-1 ring-gray-700  ">
                      Css
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300 rounded-full ring-1 ring-gray-700  ">
                      React
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    {/* <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="#fff"
                          d="M19.158.751H4.842l-4.09 4.09V23.25h22.497V4.842z"
                        />
                        <path
                          fill="#bbd8ff"
                          d="M23.249 8.42H.75v2.557h22.5zm0 6.137H.75v2.556h22.5zm0 6.135H.75v2.557h22.5z"
                        />
                        <path
                          stroke="#092f63"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M23.249 4.842H.75v6.135h22.5zM19.158.751H4.842l-4.09 4.09h22.497zm1.022 6.136v2.045m-2.044-2.045v2.045M16.09 6.887v2.045m7.159 2.045H.75v6.136h22.5zm-3.069 2.046v2.045m-2.044-2.045v2.045m-2.046-2.045v2.045m7.159 2.045H.75v6.136h22.5zm-3.069 2.045v2.045m-2.044-2.045v2.045m-2.046-2.045v2.045"
                        />
                        <path
                          stroke="#092f63"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.097 6.63L3.82 7.91l1.278 1.278l1.279-1.279zm.001 6.136l-1.279 1.279l1.278 1.278l1.279-1.278zm0 6.136l-1.279 1.279l1.279 1.278l1.278-1.278z"
                        />
                      </g>
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                      />
                    </svg>

                    <h4 className="text-sm font-medium text-gray-400">
                      Backend
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300  rounded-full ring-1 ring-gray-700">
                      Node.js
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300  rounded-full ring-1 ring-gray-700">
                      Express.js
                    </span>
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
                      className="size-5 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                      />
                    </svg>

                    <h4 className="text-sm font-medium text-gray-400">Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300  rounded-full ring-1 ring-gray-700">
                      Github
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300  rounded-full ring-1 ring-gray-700">
                      Gitlab
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-800 text-gray-300  rounded-full ring-1 ring-gray-700">
                      VS Code
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Disini mulai mengikuti secara lengkap */}
        <div>
          <div className="py-6 dark:bg-gray-900 bg:white px-6">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-white text-center ">
                  Experience
                </h3>
                <div className="h-px w-full bg-gray-700 mt-2"></div>
              </div>
              <div className="space-y-5">
                <div className="relative">
                  <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                    <div className="absolute -left-1.25 top-2.5 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
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
                        improvement in system performance lore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                    <div className="absolute -left-1.25 top-2.5 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
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
                    <div className="absolute -left-1.25 top-2.5 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
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
      </div>
    </div>
  );
}

export default App;
