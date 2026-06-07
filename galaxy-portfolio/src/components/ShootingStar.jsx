import { useEffect, useState } from 'react';

export default function ShootingStar() {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        let mounted = true;

        function createRocket() {
            if (!mounted) return;
            const id = Math.random().toString(36).slice(2, 9);
            const top = Math.floor(Math.random() * 60) + 8; // 8% - 68%
            const scale = (Math.random() * 0.45 + 0.8).toFixed(2);
            const duration = (Math.random() * 1.2 + 2.4).toFixed(2); // 2.4s - 3.6s
            const drift = (Math.random() * 22 - 11).toFixed(1); // -11vh to 11vh

            setRockets((current) => [...current, { id, top, scale, duration, drift }]);

            // remove after animation
            setTimeout(() => {
                setRockets((current) => current.filter((rocket) => rocket.id !== id));
            }, Number(duration) * 1000 + 200);
        }

        // create first rocket shortly after mount
        const firstTimeout = setTimeout(createRocket, 900);

        // then create rockets at intervals
        const interval = setInterval(() => {
            createRocket();
        }, 4200);

        return () => {
            mounted = false;
            clearInterval(interval);
            clearTimeout(firstTimeout);
        };
    }, []);

    return (
        <div className="rocket-field" aria-hidden="true">
            {rockets.map((rocket) => (
                <div
                    key={rocket.id}
                    className="rocket"
                    style={{
                        top: `${rocket.top}%`,
                        '--rocket-scale': rocket.scale,
                        '--rocket-drift': `${rocket.drift}vh`,
                        animationDuration: `${rocket.duration}s`,
                    }}
                >
                    <span className="rocket__trail" />
                    <span className="rocket__body" />
                    <span className="rocket__flame" />
                </div>
            ))}
        </div>
    );
}
