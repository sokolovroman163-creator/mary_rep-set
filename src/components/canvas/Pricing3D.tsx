"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Text, Float } from "@react-three/drei";

function ThemeCloud() {
    const group = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.15;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    const topics = [
        { text: "Планиметрия", pos: [-1.2, 1, 0.5] as [number, number, number], color: "#38bdf8", size: 0.25 },
        { text: "Стереометрия", pos: [1.5, 0.8, -0.5] as [number, number, number], color: "#818cf8", size: 0.3 },
        { text: "Параметры", pos: [0.2, -1.2, 0.2] as [number, number, number], color: "#f472b6", size: 0.35 },
        { text: "Теория вероятностей", pos: [-1, -0.5, -0.8] as [number, number, number], color: "#34d399", size: 0.2 },
        { text: "Тригонометрия", pos: [1.2, -0.6, 0.8] as [number, number, number], color: "#fbbf24", size: 0.22 },
    ];

    return (
        <group ref={group}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
                {topics.map((t, i) => (
                    <Text key={i} position={t.pos} fontSize={t.size} color={t.color} outlineWidth={0.01} outlineColor="#000">
                        {t.text}
                    </Text>
                ))}
            </Float>
        </group>
    );
}

function HyperbolicParaboloid() {
    const meshRef = useRef<THREE.Mesh>(null);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const size = 30; // resolution
        const vertices = [];
        const indices = [];

        for (let u = 0; u <= size; u++) {
            for (let v = 0; v <= size; v++) {
                // Map u, v [0..size] to [-2..2]
                const x = (u / size - 0.5) * 4;
                const y = (v / size - 0.5) * 4;
                const z = (x * x) / 2 - (y * y) / 2;
                vertices.push(x, z * 0.4, y);
            }
        }

        for (let u = 0; u < size; u++) {
            for (let v = 0; v < size; v++) {
                const a = u * (size + 1) + v;
                const b = u * (size + 1) + v + 1;
                const c = (u + 1) * (size + 1) + v;
                const d = (u + 1) * (size + 1) + v + 1;

                indices.push(a, c, b);
                indices.push(b, c, d);
            }
        }

        geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geo.setIndex(indices);
        geo.computeVertexNormals();
        return geo;
    }, []);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.4;
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
            meshRef.current.rotation.x = Math.PI / 6;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
            <mesh ref={meshRef} geometry={geometry} scale={1.2}>
                <meshStandardMaterial color="#818cf8" wireframe={true} emissive="#4f46e5" emissiveIntensity={0.8} transparent opacity={0.6} />
            </mesh>
        </Float>
    );
}

export default function Pricing3D({ plan }: { plan: "ege" | "uni" | null }) {
    if (!plan) return null;

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 sm:opacity-80 transition-opacity duration-1000 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                {plan === "ege" && <ThemeCloud />}
                {plan === "uni" && <HyperbolicParaboloid />}
            </Canvas>
        </div>
    );
}
