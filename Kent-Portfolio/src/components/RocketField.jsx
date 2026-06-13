const ROCKETS = [
    { top: '24%', scale: 1, drift: '-2vh', delay: '0s' },
    { top: '52%', scale: 1.08, drift: '1.5vh', delay: '3s' },
    { top: '36%', scale: 1.02, drift: '-1vh', delay: '6s' },
];

export default function RocketField() {
    return (
        <div className="rocket-field" aria-hidden="true">
            {ROCKETS.map((rocket, index) => (
                <div
                    key={`${rocket.top}-${index}`}
                    className="rocket"
                    style={{
                        top: rocket.top,
                        '--rocket-scale': rocket.scale,
                        '--rocket-drift': rocket.drift,
                        animationDuration: '3s',
                        animationDelay: rocket.delay,
                        animationIterationCount: 1,
                    }}
                >
                    <span className="rocket__trail" />
                    <span className="rocket__flame" />
                    <span className="rocket__body" />
                </div>
            ))}
        </div>
    );
}