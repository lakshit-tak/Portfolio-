const projects = [

    {
        number: "01",
        title: "Portfolio",
        description:
            "A responsive personal portfolio website showcasing my skills, projects and contact information with dark mode and light mode theme support.",
        technologies: ["React", "CSS", "Responsive Design"]
    },

    {
        number: "02",
        title: "Weather Application",
        description:
            "A weather application that searches cities and displays weather information using an API.",
        technologies: ["React", "API", "CSS"]
    },

    {
        number: "03",
        title: "Movie Search",
        description:
            " A movie search application that fetches movie details using an API, including poster, release year, rating and plot summaries etc.",
        technologies: ["Html", "CSS", "JavaScript", "API"]
    },

    {
        number: "04",
        title: "Expense Tracker",
        description:
            "An expense management application with search, filter and LocalStorage functionality.",
        technologies: ["React", "LocalStorage", "JavaScript", "CSS"]
    },

    {
        number: "05",
        title: "Notes Application",
        description:
            "A notes application with create, edit, delete, search and LocalStorage features.",
        technologies: ["React", "CSS", "LocalStorage"]
    },

    {
        number: "06",
        title: "Todo Application",
        description:
            " A responsive task management application to add, complete, delete, save in LocalStorage and manage daily tasks.",
        technologies: ["React", "CSS", "Local Storage"]
    }
    
];

function Projects() {
    return (

        <section className="section projects" id="projects">

            <div className="section-title">

                <p>
                    <span className="section-dot"></span>

                    PROJECTS
                </p>

                <h2>
                    Things I've
                    <span> Built.</span>
                </h2>


            </div>


            <div className="project-container">

                {projects.map((project) => (

                    <article className="project-card" key={project.title}>

                        <div className="project-num">

                            {project.number}

                        </div>

                        <h4>{project.title}</h4>

                        <p>
                            {project.description}
                        </p>


                        <div className="project-tags">

                            {project.technologies.map((technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Projects;