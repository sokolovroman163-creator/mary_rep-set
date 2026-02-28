"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ChartBars({ isVisible }: { isVisible: boolean }) {
    const bar1Ref = useRef<THREE.Mesh>(null);
    const bar2Ref = useRef<THREE.Mesh>(null);
    const bar3Ref = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (bar1Ref.current && bar2Ref.current && bar3Ref.current) {
            // Lerp to target scales based on visibility
            const targetScale1 = isVisible ? 1 : 0.1;
            const targetScale2 = isVisible ? 1.8 : 0.1;
            const targetScale3 = isVisible ? 2.8 : 0.1;

            bar1Ref.current.scale.y = THREE.MathUtils.lerp(bar1Ref.current.scale.y, targetScale1, 0.05);
            bar1Ref.current.position.y = bar1Ref.current.scale.y / 2;

            bar2Ref.current.scale.y = THREE.MathUtils.lerp(bar2Ref.current.scale.y, targetScale2, 0.04);
            bar2Ref.current.position.y = bar2Ref.current.scale.y / 2;

            bar3Ref.current.scale.y = THREE.MathUtils.lerp(bar3Ref.current.scale.y, targetScale3, 0.03);
            bar3Ref.current.position.y = bar3Ref.current.scale.y / 2;
        }
    });

    return (
        <group position={[0, -1, 0]}>
            <mesh ref={bar1Ref} position={[-0.8, 0.05, 0]}>
                <boxGeometry args={[0.5, 1, 0.5]} />
                <meshStandardMaterial color="#64748b" roughness={0.2} metalness={0.8} />
            </mesh>
            <mesh ref={bar2Ref} position={[0, 0.05, 0]}>
                <boxGeometry args={[0.5, 1, 0.5]} />
                <meshStandardMaterial color="#38bdf8" roughness={0.2} metalness={0.8} />
            </mesh>
            <mesh ref={bar3Ref} position={[0.8, 0.05, 0]}>
                <boxGeometry args={[0.5, 1, 0.5]} />
                <meshStandardMaterial color="#10b981" roughness={0.2} metalness={0.8} emissive="#059669" emissiveIntensity={0.2} />
            </mesh>
        </group>
    );
}

export default function GrowthChartModel({ isVisible }: { isVisible: boolean }) {
    return (
        <div className="w-full h-48 pointer-events-none">
            <Canvas camera={{ position: [2, 1.5, 3] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} />
                <ChartBars isVisible={isVisible} />
            </Canvas>
        </div>
    );
}
