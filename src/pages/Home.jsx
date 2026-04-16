function Home() {
    return (
        <main>
            {/*Me Section*/}
            <section className="me">
                <h1>Hi, I'm Alex Zamora</h1>
                <p>Aspiring Software Engineer & craeteive thinker</p>
            </section>

            {/*About Section*/}
            <section id="about" className="section">
                <h2>About Me</h2>
                <p>
                    I'm a full time Software Engineering student at CSUSM as well as a nationaly ranked Powerlifter within the USAPL federation. I love learning new technologies and pushing myself physically and mentally. In my free time, I enjoy working on personal projects, exploring the outdoors, and spending time with friends and family.
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
                <p>Email: alexandro.zamora1234@gmail.com</p>
                <p>GitHub: https://github.com/JibAlex</p>
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