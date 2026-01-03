import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

       
        <h2 className="text-4xl  font-bold text-center mb-14 text-slate-800">
          My Projects
        </h2>

        {projects.length === 0 && (
          <p className="text-center text-gray-500">
            No projects available.
          </p>
        )}

       
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, index) => (
            <div
              key={p._id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden
              transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
           
              <div
                className={`h-2 ${
                  index % 3 === 0
                    ? "bg-gradient-to-r from-orange-400 to-red-500"
                    : index % 3 === 1
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                    : "bg-gradient-to-r from-emerald-500 to-green-600"
                }`}
              />

            
              <div className="p-6 ">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition">
                  {p.title}
                </h3>

                <p className="text-gray-600 text-xl mb-5 line-clamp-3">
                  {p.description}
                </p>

            
                {p.techStack && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-100 text-slate-700 px-3 py-1
                        rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

             
                <div className="flex gap-4">
                  {p.githubLink && (
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-white bg-slate-800
                      px-4 py-2 rounded-lg hover:bg-slate-900 transition"
                    >
                      GitHub
                    </a>
                  )}

                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-white bg-blue-600
                      px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
