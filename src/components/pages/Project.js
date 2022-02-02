import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Project.module.css";
import { api } from "../../Api";

import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";

function Project() {
  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let request = await api.loadProject(id);
      setProjectData(request.data.project);
    }
    fetchData();
    console.log(projectData)
  }, [id]);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const editPost = (project) => {
    console.log(project);
    //let request = api.editProject(project.id);

    //console.log(request);
    //setShowProjectForm(false);
  }

  return (
    <>
      {projectData.project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>Projeto: {projectData.project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "fechar projeto"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {projectData.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> R${projectData.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span> R${projectData.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={projectData}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
