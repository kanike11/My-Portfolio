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
                interactivity: {
                    detectsOn: 'canvas',
                    events: {
                        onHover: {
                            enable: true,
                            mode: ['bubble', 'repulse'],
                        },
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 120,
                            duration: 2,
                            opacity: 1,
                            size: 7,
                            color: '#9be7ff',
                        },
                        repulse: {
                            distance: 80,
                            duration: 0.4,
                        },
                        push: {
                            quantity: 2,
                        },
                    },
                },
                particles: {
                    number: { value: 140, density: { enable: true, area: 950 } },
                    color: { value: '#ffffff' },
                    opacity: { value: { min: 0.25, max: 0.85 } },
                    size: { value: { min: 0.4, max: 1.8 } },
                    move: {
                        enable: true,
                        speed: 0.26,
                        direction: 'none',
                        outModes: { default: 'out' },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}