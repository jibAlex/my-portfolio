import headshot from "../assets/headshot.PNG";

function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="me">
                <div className="me-inner">
                    <div className="me-headshot">
                        <img src={headshot} alt="Alex Zamora" className="headshot" />
                    </div>
                    <span className="me-badge">Software Engineer · Powerlifter</span>
                    <h1>Hi, I'm Alex Zamora</h1>
                    <p>Aspiring Software Engineer & creative thinker</p>
                    <div className="me-cta">
                        <a href="#projects" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }} className="btn-primary">View Projects</a>
                        <a href="#contact" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }} className="btn-secondary">Get In Touch</a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section">
                <div className="section-tag">About</div>
                <h2>About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I'm a full-time Software Engineering student at CSUSM as well as a
                            nationally ranked Powerlifter within the USAPL federation. I love learning
                            new technologies and pushing myself physically and mentally. 
                            If you were curious, at my last meet I hit a 622 lb squat, 297 lb bench, and a 622 lb deadlift.

                        </p>
                        <p>
                            In my free time, I enjoy working on personal projects, exploring the
                            outdoors, and spending time with friends and family. I love cooking, I've been in the kitchen since I was a kid and it's one of my favorite hobbies. I also enjoy gaming, especially competitive FPS.
                            Languages I use include JavaScript, Python, C++, React, HTML, CSS, and Java, and I'm always eager to learn more!
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">#22</span>
                            <span className="stat-label">USAPL National Rank</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">CSUSM</span>
                            <span className="stat-label">Software Engineering</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section section-alt">
                <div className="section-tag">Work</div>
                <h2>Projects</h2>
                {/* Fixed: was "projects-grid", CSS uses "project-grid" */}
                <div className="project-grid">
                    <ProjectCard
                        title="Physics Simulator"
                        tag="Web App"
                        desc="In my web development class, we built a physics simulator using JavaScript, HTML, and CSS. It allows users to create and interact with various physical objects in a 2D environment. With several simulations including projectile motion, gravity, and collisions, all the way to more complex scenarios such as black holes and springs. It was a fun project that helped me understand physics concepts while honing my coding skills."
                        link = "https://cis444-physics-simulator.onrender.com/"
                    />
                    <ProjectCard
                        title="EcoCompute"
                        tag="Cloud Computing Tool"
                        desc="In my Cloud Computing class, I worked with my group to develop EcoCompute, a tool designed to help developers optimize their cloud resource usage for both cost and environmental impact. It provides insights into the carbon footprint of different cloud services and offers recommendations for more sustainable alternatives. The project involved integrating APIs from major cloud providers and implementing algorithms to calculate emissions based on resource usage."
                        link = "https://github.com/ThanhDatVu111/ecocompute"
                    />
                    <ProjectCard
                        title="Trading Bot"
                        tag="Algorithmic Trading"
                        desc="Using Data Science and fourier analysis, I helped built a trading bot that analyzes historical stock data to identify patterns and make informed trading decisions. The bot uses machine learning algorithms to predict stock price movements and executes trades automatically based on predefined strategies. It was an exciting project that allowed me to apply my programming skills to the world of finance. This is still a work in prgoress..."
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="section-tag">Contact</div>
                <h2>Get In Touch</h2>
                <p className="contact-intro">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
                <div className="contact-links">
                    <a href="mailto:alexandro.zamora1234@gmail.com" className="contact-link">
                        <span className="contact-icon">✉</span>
                        alexandro.zamora1234@gmail.com
                    </a>
                    <a href="https://github.com/JibAlex" target="_blank" rel="noreferrer" className="contact-link">
                        <span className="contact-icon">⌥</span>
                        github.com/JibAlex
                    </a>
                </div>
            </section>
        </main>
    );
}

function ProjectCard({ title, tag, desc, link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="project-card">
            <span className="project-tag">{tag}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className="project-arrow">→</span>
        </a>
    );
}

export default Home;
