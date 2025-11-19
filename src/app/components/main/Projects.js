function ProjectCard({ githublink, demolink, image, projectName }) {
  const href = githublink || demolink || '#';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 bg-black/20 shadow-lg"
    >
      <img
        src={image}
        alt={projectName}
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white font-bold text-xl">View Project</span>
      </div>
      <h3 className="mt-4 text-center  font-semibold">{projectName}</h3>
    </a>
  );
}

const projects = [
  {
    githublink: "https://github.com/hansanakavinda/IntelligentItineraryPlanner",
    demolink: null,
    image: "/travelio.png",
    projectName: "Intelligent Itinerary Planner",
  },
  {
    githublink: "https://github.com/hansanakavinda/ObjectDetection",
    demolink: null,
    image: "/project1.png",
    projectName: "Object detection application",
  },
  {
    githublink: "https://github.com/hansanakavinda/MediCare",
    demolink: null,
    image: "/medicare.png",
    projectName: "MediCare",
  },
  {
    githublink: "https://github.com/hansanakavinda/Photography_website",
    demolink: null,
    image: "/Malcolm.png",
    projectName: "Photography Website",
  },
  {
    githublink: "https://github.com/hansanakavinda/Data_analysis_system",
    demolink: null,
    image: "BurgerHouse.png",
    projectName: "Data analysis System",
  },
];

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
    {projects.map((p, idx) => (
      <ProjectCard
        key={`${p.projectName}-${idx}`}
        githublink={p.githublink}
        demolink={p.demolink}
        image={p.image}
        projectName={p.projectName}
      />
    ))}
  </div>
</section>
);

}