"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";

function CompassAnimation({ isHovered }: { isHovered: boolean }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            if (isHovered) {
                groupRef.current.rotation.y -= delta * 3;
            } else {
                groupRef.current.rotation.y += delta * 0.5;
            }
        }
    });

    return (
        <group ref={groupRef} rotation={[Math.PI / 8, 0, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Main leg */}
                <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 12]}>
                    <cylinderGeometry args={[0.04, 0.02, 1.8]} />
                    <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Drawing leg */}
                <mesh position={[0.4, 0.5, 0]} rotation={[0, 0, -Math.PI / 8]}>
                    <cylinderGeometry args={[0.03, 0.01, 1.9]} />
                    <meshStandardMaterial color="#38bdf8" metalness={0.6} emissive="#0284c7" emissiveIntensity={0.2} />
                </mesh>

                {/* Joint */}
                <mesh position={[0.2, 1.3, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.2} />
                </mesh>

                {/* Drawn circle hint */}
                {isHovered && (
                    <mesh position={[0, -0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[0.78, 0.8, 64]} />
                        <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} side={THREE.DoubleSide} />
                    </mesh>
                )}
            </Float>
        </group>
    );
}

export default function CompassModel({ isHovered }: { isHovered: boolean }) {
    return (
        <div className="w-full h-48 pointer-events-none transition-transform duration-500 ease-out" style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}>
            <Canvas camera={{ position: [0, 1, 3.5] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 8, 5]} intensity={1.5} />
                <CompassAnimation isHovered={isHovered} />
            </Canvas>
        </div>
    );
}
