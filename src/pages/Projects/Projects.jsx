import { useEffect, useContext } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../context/ThemeProvider";
import github from "../../img/icons/github-white.svg";
import telegram from "../../img/icons/telegram-white.svg";
import Titles from "../../components/Titles/Titles";
import projects from "../../mock/projects";
import "./Projects.scss";


export default function Projects() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section className={classNames("projects", { dark: theme === "dark" })}>
      <Titles
        title="Наши проекты"
        subtitle="Lorem ipsum dolor sit amet consectetur. Porta cursus qu+is blandit orci leo."
      />
      <div className="projects__container">
        {projects !== undefined &&
          projects.map((project) => (
            <div className="projects__cards">
              <div className="projects__card">
                <img src={project.image} alt="project" className="image" />
                <div className="projects__shadow" />

                <div className="projects__header">
                  <h2 className="projects__title">{project.name}</h2>
                  <div className="projects__subtitle">
                    <h3>{project.author}</h3>
                    <h3>{project.date}</h3>
                  </div>
                </div>
              </div>
              <div className="projects__hover">
                <h2 className="projects__titles">{project.name}</h2>
                <div className="projects__title-block">
                  <h3 className="projects__subtitles">
                    Автор проекта: <span>{project.author}</span>
                  </h3>
                  <h3 className="projects__subtitles">
                    Дата создания проекта: <span className="date">{project.date}</span>
                  </h3>
                </div>

                <p className="projects__description">{project.description}</p>

                <div className="projects__skills">
                  {project.skills.map((skill) => (
                    <div className="projects__skill">
                      <p>{skill}</p>
                    </div>
                  ))}
                </div>

                <div className="projects__contact">
                  <a href={project.demo}>
                    <button type="button">Посмотреть проект</button>
                  </a>

                  <div className="projects__icons">
                    <a href={project.socials.github}>
                      <div className="projects__icon">
                        <img src={github} alt="github" />
                      </div>
                    </a>

                    <a href={project.socials.telegram}>
                      <div className="projects__icon">
                        <img src={telegram} alt="telegram" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
