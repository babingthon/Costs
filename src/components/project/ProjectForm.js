import { useState, useEffect } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButtuon from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

import { api } from "../../Api";

function ProjectForm({ handleSubmit, btnText, projectData }) {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect( () => {
    async function fetchData() {
      let request = await api.getCategories();
      setCategories(request.data);
    }
    fetchData();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project)
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  };

  const handleCategory = (e) => {
    setProject({
      ...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      }
    });
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select
        name="category_id"
        text="Selecione a Categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButtuon text={btnText} />
    </form>
  );
}

export default ProjectForm;
