import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

import { api } from "../../Api"

function NewProject() {
  const navigate = useNavigate();

  const createProject = async (project) => {
    //initialize cost and services

    project.cost = 0;
    project.services = [];

    await api.createProject(project);
    navigate("/projects", {
      state: { message: "Projeto criado com sucesso!" },
    });
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços.</p>
      <ProjectForm handleSubmit={createProject} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
