import "../index.css";
// import faceImage from "../assets/ian-dooley-d1UPkiFd04A-unsplash.png";
import faceJurica from "../assets/jurica-koletic-7YVZYZeITc8-unsplash (4).png";
// import faceDooley from "../assets/ian-dooley-d1UPkiFd04A-unsplash.png";

function App() {
  return (
    <div className="w-full py-8 px-6 pt-16">
      <div className=" space-y-8 text-center">
        <div className="relative w-28 h-28 mx-auto">
          <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 ">
            <img src={faceJurica} alt="" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-white font-bold text-2xl">Zaky Abiyyu Andri</div>
          <div className="text-gray-600 text-lg">
            Fullstack Software Engineer
          </div>
          <div className="h-px w-16 bg-gray-200 mx-auto my-4"></div>
          <div className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
            Web developer with frontend and backend experience{" "}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail text-gray-400 "><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <a href="https://github.com" className="hover:text-white text-sm text-gray-600 ">zakyabiyyu2003@gmail.com</a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pinned-icon lucide-map-pinned text-gray-400"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
            <a href="">Yogyakarta, Indonesia</a>
          </div>
          <div className="flex items-center justify-center space-x-2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
