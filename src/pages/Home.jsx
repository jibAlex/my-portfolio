function Home() {
    return (
        <main>
            {/*Me Section*/}
            <section className="me">
                <h1>Hi, I'm John Doe</h1>
                <p>Aspiring web developer & craeteive thinker</p>
            </section>

            {/*About Section*/}
            <section id="about" className="section">
                <h2>About Me</h2>
                <p>
                    I'm a student learning web developoment. i love building things with code and exploring new technologies. Currently studing at CSUSM.
                </p>
            </section>

            {/*Projects Section*/}
            <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="projects-grid">
                    <ProjectCard
                        title="Project 1"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <ProjectCard
                        title="Project 2"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <ProjectCard
                        title="Project 3"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </div>
            </section>

            {/*Contact Section*/}
            <section id="contact" className="section">
                <h2>Contact Me</h2>
                <p>Feel free to reach out if you have any questions or would like to collaborate!</p>
            </section>
        </main>
    );
}

function ProjectCard({ title, desc }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default Home;