import Particles from '@tsparticles/react';

export default function Stars() {
    return (
        <Particles
            id="starfield"
            className="starfield"
            options={{
                fullScreen: { enable: false },
                background: { color: { value: 'transparent' } },
                fpsLimit: 60,
                particles: {
                    number: { value: 120, density: { enable: true, area: 900 } },
                    color: { value: ['#ffffff', '#9be7ff', '#7c6bff'] },
                    opacity: { value: { min: 0.25, max: 0.85 } },
                    size: { value: { min: 0.6, max: 2.2 } },
                    move: {
                        enable: true,
                        speed: 0.18,
                        direction: 'none',
                        outModes: { default: 'out' },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}