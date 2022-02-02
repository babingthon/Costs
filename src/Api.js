import axios from "axios";

export const api = {
  getCategories: async () => {
    try {
      let response = await axios.get(`http://localhost:5000/categories`, {
        headers: { contentType: "application/json" },
      });
      return response;
    } catch (err) {
      alert("Error loading category: " + err);
    }
  },
  createProject: async (project) => {
    try {
      let response = await axios.post(`http://localhost:5000/projects`, {
        project,
      });
      return response;
    } catch (err) {
      alert("Error creating project: " + err);
    }
  },
  loadProjects: async () => {
    try {
      let response = await axios.get(`http://localhost:5000/projects`, {
        headers: { contentType: "application/json" },
      });

      return response;
    } catch (err) {
      alert("Error loading projects: " + err);
    }
  },
  remoteProject: async (id) => {
    try {
      let response = await axios.delete(
        `http://localhost:5000/projects/${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      return response;
    } catch (err) {
      alert("Error deleting project: " + err);
    }
  },
  loadProject: async (id) => {
    try {
      let response = await axios.get(`http://localhost:5000/projects/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (err) {
      alert("Error loading project: " + err);
    }
  },
  editProject: async (project) => {
    try {
      let response = await axios.get(`http://localhost:5000/projects/${project.id}`, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project)
      });

      return response;
    } catch (err) {
      alert("Error editing project: " + err);
    }
  },
};
