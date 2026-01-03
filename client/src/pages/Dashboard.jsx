import { useEffect, useState } from "react";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../services/projectService";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
  });

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
      alert("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create / Update project
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description) {
      alert("Title and description are required");
      return;
    }

    const payload = {
      ...form,
      techStack: form.techStack
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    try {
      if (editingId) {
        await updateProject(editingId, payload);
        setEditingId(null);
      } else {
        await createProject(payload);
      }

      setForm({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
      });

      fetchProjects();
    } catch (error) {
      console.error("Save failed", error);
      alert("Failed to save project");
    }
  };

  // Edit
  const handleEdit = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      techStack: project.techStack.join(", "),
      githubLink: project.githubLink || "",
      liveLink: project.liveLink || "",
    });
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      await deleteProject(id);
      fetchProjects();
    } catch (error) {
      console.error("Delete failed", error);
      alert("Failed to delete project");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading dashboard...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-300 py-12 px-4 m-0 p-0 w-full overflow-x-hidden">
      <div className=" mx-auto text-black bg-amber-300 w-full">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center mb-10 text-slate-800 mt-20">
          Admin Dashboard
        </h1>

        {/* FORM CARD */}
        <div className="bg-blue-100 rounded-2xl shadow-xl p-8 mb-14 animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">
            {editingId ? "Update Project" : "Add New Project"}
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-5">

            <input
              name="title"
              placeholder="Project Title"
              value={form.title}
              onChange={handleChange}
              className="input-style bg-white  to-black h-14"
            />

            <textarea
              name="description"
              placeholder="Project Description"
              value={form.description}
              onChange={handleChange}
              className="input-style h-28  bg-white solid to-black "
            />

            <input
              name="techStack"
              placeholder="Tech stack (React, Node, MongoDB)"
              value={form.techStack}
              onChange={handleChange}
              className="input-style  bg-white  to-black h-14"
            />

            <input
              name="githubLink"
              placeholder="GitHub link"
              value={form.githubLink}
              onChange={handleChange}
              className="input-style  bg-white  to-black h-14"
            />

            <input
              name="liveLink"
              placeholder="Live link"
              value={form.liveLink}
              onChange={handleChange}
              className="input-style  bg-white   to-black h-14"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3
              rounded-lg transition transform hover:scale-105"
            >
              {editingId ? "Update Project" : "Add Project"}
            </button>
          </form>
        </div>

        {/* PROJECT LIST */}
        <h2 className="text-3xl font-bold mb-6 text-black text-center">
          All Projects
        </h2>

        {projects.length === 0 && (
          <p className="text-gray-600">No projects found.</p>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl shadow-lg p-6 transition
              hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-100 text-slate-700 px-3 py-1
                    rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2
                  rounded-lg transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2
                  rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;

