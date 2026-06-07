import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Planet() {
    return (
        <div className="planet-shell" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 2, 2]} intensity={2.5} />
                <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1.2}>
                    <Sphere args={[1, 96, 96]} scale={1.15}>
                        <MeshDistortMaterial
                            color="#7bd9ff"
                            roughness={0.25}
                            metalness={0.55}
                            distort={0.35}
                            speed={1.5}
                        />
                    </Sphere>
                </Float>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.4} />
            </Canvas>
        </div>
    );
}