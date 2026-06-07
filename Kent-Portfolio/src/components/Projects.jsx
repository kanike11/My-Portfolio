const projects = [
    {
        title: 'Nebula Commerce',
        description: 'A premium storefront concept with fast navigation, product storytelling, and checkout flow.',
    },
    {
        title: 'Orbit Dashboard',
        description: 'A data-driven operations dashboard built for quick scanning, alerts, and task triage.',
    },
    {
        title: 'Lunar Studio',
        description: 'A creative portfolio system with motion-first presentation and rich case-study layouts.',
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="section__heading">
                <p className="eyebrow">GALAXY OF PROJECTS</p>
                <h3>Projects</h3>
            </div>

            <div className="card-grid">
                {projects.map((project) => (
                    <article className="card" key={project.title}>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}