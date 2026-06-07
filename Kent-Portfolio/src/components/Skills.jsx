const skills = ['React', 'Node.js', 'Express', 'MongoDB', 'Three.js', 'UI Motion'];

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="section__heading">
                <p className="eyebrow">TECH CONSTELLATION</p>
                <h3>Skills</h3>
            </div>

            <div className="chips">
                {skills.map((skill) => (
                    <span className="chip" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}