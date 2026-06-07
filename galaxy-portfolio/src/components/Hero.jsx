import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Stars from './Stars';
import ShootingStar from './ShootingStar';
import Planet from './Planet';
import profileImage from '../assets/profile_picture.png';

export default function Hero() {
    useEffect(() => {
        const handleMove = (event) => {
            const x = event.clientX / window.innerWidth;
            const y = event.clientY / window.innerHeight;

            document.documentElement.style.setProperty('--mouse-x', `${x * 20}px`);
            document.documentElement.style.setProperty('--mouse-y', `${y * 20}px`);
        };

        window.addEventListener('mousemove', handleMove);

        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero__galaxy" aria-hidden="true" />
            <div className="star-glow" aria-hidden="true" />
            <Stars />
            <ShootingStar />

            <div className="hero__content">
                <motion.div
                    className="hero__copy"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <p className="eyebrow">MISSION PROFILE</p>
                    <h1>KENT LEONEL SEVELLINO</h1>
                    <h2>FULL STACK DEVELOPER</h2>
                    <p className="hero__lede">Creating digital experiences across the universe.</p>

                    <div className="hero__actions">
                        <a className="button button--primary" href="#projects">
                            Explore Projects
                        </a>
                        <a className="button button--ghost" href="#contact">
                            Contact Mission Control
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
                >
                    <Planet />
                    <div className="hero__portrait">
                        <img src={profileImage} alt="KENT portrait" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}