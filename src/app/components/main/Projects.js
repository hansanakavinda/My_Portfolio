export default function Projects() {
return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white py-20 px-5">
  {/* Section Title */}
  <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
    My Projects
  </h1>
  <p className="text-base md:text-md lg:text-lg text-gray-300 text-center w-3/4 md:w-1/2 mb-12">
    Here are some of my projects showcasing my skills in web development and AI.
  </p>

  {/* Project Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl text-base md:text-md lg:text-lg">
    
    <a
      href="https://github.com/hansanakavinda/IntelligentItineraryPlanner"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 bg-black/20 shadow-lg"
    >
      <img
        src="/travelio.png"
        alt="Intelligent Itinerary Planner"
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white font-bold text-xl">View Project</span>
      </div>
      <h3 className="mt-4 text-center  font-semibold">Intelligent Itinerary Planner</h3>
    </a>
    {/* Sample Project 1 */}
    <a
      href="https://github.com/hansanakavinda/ObjectDetection"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 bg-black/20 shadow-lg"
    >
      <img
        src="/project1.png"
        alt="Project 1"
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white font-bold text-xl">View Project</span>
      </div>
      <h3 className="mt-4 text-center  font-semibold">Object detection application</h3>
    </a>

    {/* Sample Project 2 */}
    <a
      href="https://github.com/hansanakavinda/Photography_website"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 bg-black/20 shadow-lg"
    >
      <img
        src="/Malcolm.png"
        alt="Project 2"
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white font-bold text-xl">View Project</span>
      </div>
      <h3 className="mt-4 text-center  font-semibold">Photography Website</h3>
    </a>

    {/* Sample Project 3 */}
    <a
      href="https://github.com/hansanakavinda/Data_analysis_system"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 bg-black/20 shadow-lg"
    >
      <img
        src="BurgerHouse.png"
        alt="Project 3"
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white font-bold text-xl">View Project</span>
      </div>
      <h3 className="mt-4 text-center  font-semibold">Data analysis System</h3>
    </a>
  </div>
</section>
);

}