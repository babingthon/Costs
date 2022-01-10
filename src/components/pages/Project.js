import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Project.module.css';
import { api } from '../../Api';


function Project() {

    const { id } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let request = await api.loadProject(id);
            setProject(request.data)
            console.log(project)
        }
        fetchData();
    }, [])



    return (
      <div>
        <p>{project.id}</p>
        <label>{project.project.name}</label>
        <br />
        <label>{project.project.budget}</label>
        <br />
        <label>{project.project.category.name}</label>
      </div>
    );
}

export default Project;