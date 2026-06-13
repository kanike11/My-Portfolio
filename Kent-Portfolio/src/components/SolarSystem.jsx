import '../styles/SolarSystem.css';

export default function SolarSystem() {

    return (
        <div className="solar-system" aria-hidden="true">
            {/* Sun */}
            <div className="solar-sun">
                <div className="solar-sun__core"></div>
                <div className="solar-sun__glow"></div>
            </div>

            {/* Mercury Orbit */}
            <div className="solar-orbit solar-orbit--mercury">
                <div className="solar-planet solar-planet--mercury"></div>
            </div>

            {/* Venus Orbit */}
            <div className="solar-orbit solar-orbit--venus">
                <div className="solar-planet solar-planet--venus"></div>
            </div>

            {/* Earth Orbit */}
            <div className="solar-orbit solar-orbit--earth">
                <div className="solar-planet solar-planet--earth"></div>
            </div>

            {/* Mars Orbit */}
            <div className="solar-orbit solar-orbit--mars">
                <div className="solar-planet solar-planet--mars"></div>
            </div>

            {/* Jupiter Orbit */}
            <div className="solar-orbit solar-orbit--jupiter">
                <div className="solar-planet solar-planet--jupiter"></div>
            </div>

            {/* Saturn Orbit */}
            <div className="solar-orbit solar-orbit--saturn">
                <div className="solar-planet solar-planet--saturn"></div>
                <div className="solar-ring"></div>
            </div>

            {/* Uranus Orbit */}
            <div className="solar-orbit solar-orbit--uranus">
                <div className="solar-planet solar-planet--uranus"></div>
            </div>

            {/* Neptune Orbit */}
            <div className="solar-orbit solar-orbit--neptune">
                <div className="solar-planet solar-planet--neptune"></div>
            </div>
        </div>
    );
}
