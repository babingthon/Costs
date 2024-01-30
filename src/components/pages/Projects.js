import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { api } from "../../Api";
import Loading from "../layout/Loading";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        let request = await api.loadProjects();
        setProjects(request.data);
        setRemoveLoading(true);
      }
      fetchData();
    }, 300);
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  const removeProject = async (id) => {
    let request = await api.remoteProject(id);

    if (request.status === 200) {
      setProjects(projects.filter((project) => project.id !== id));
      setProjectMessage("Projeto removido com Sucesso.");
    }
  };

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projetos" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
