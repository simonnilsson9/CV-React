import React, { useState, useEffect } from "react";
import "./CSS/style.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/simonnilsson9/repos"
        );
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <p className="section-text-p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      {loading ? (
        <p>Loading all the content...</p>
      ) : (
        <div className="about-containers">
          {projects.map((project) => (
            <div key={project.id} className="details-container color-container">
              <h2 className="project-title">{project.name}</h2>
              <p>{project.description}</p>
              <p>
                <a
                  a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-color2 project-btn">
                    To The Project
                  </button>
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
