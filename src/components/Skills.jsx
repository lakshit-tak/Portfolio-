const skills = [
    {
        number: "01",
        title: "HTML5",
        img: "/image/html.webp",
        description: "Semantic and structured web pages"
    },
    {
        number: "02",
        title: "CSS3",
        img: "/image/css.webp",
        description: "Responsive layouts and animations"
    },
    {
        number: "03",
        title: "JavaScript",
        img: "/image/js.webp",
        description: "Modern JavaScript and DOM"
    },
    {
        number: "04",
        title: "React.js",
        img: "/image/react.webp",
        description: "Components, Hooks and State"
    },
    {
        number: "05",
        title: "REST API",
        img: "/image/api.webp",
        description: "Fetch API and API integration"
    },
    {
        number: "06",
        title: "Git / GitHub",
        img: "/image/github.webp",
        description: "Version control and projects"
    },
    {
        number: "07",
        title: "Node.js",
        img: "/image/node.webp",
        description: "Learning server-side JavaScript and backend development with Node.js."
    },
    {
        number: "08",
        title: "Express.js",
        img: "/image/express.webp",
        description: "Learning to build web servers and REST API using Express.js."
    },
    {
        number: "09",
        title: "MongoDB",
        img: "/image/mongoDB.webp",
        description: "Learning NoSQL database concepts and managing application data using MongoDB."
    }
];

function Skills() {
    return (
        <section className="section" id="skills">

            <div className="section-title">

                <p>
                    <span className="section-dot"></span>

                    SKILLS
                </p>

                <h2>

                    What I use to build

                    <span> websites.</span>

                </h2>

            </div>


            <div className="skills-grid">

                {skills.map((skill) => (

                    <div className="skill-card" key={skill.title}>

                        <span className="skill-number">
                            {skill.number}
                        </span>

                        <h3>
                            {skill.title}
                            <img className="symbol" src={skill.img} />
                        </h3>

                        <p>{skill.description}</p>

                        <div className="card-line"></div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;