export default function Navbar() {
    return (
        <header className="navbar">
            <a className="brand" href="#home" aria-label="KENT home">
                KENT
            </a>

            <nav aria-label="Primary">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}