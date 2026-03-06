"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

/* ─── flowing arc curve ribbon ─── */
function FlowingArc({
    points,
    color,
    speed,
    opacity,
    width,
}: {
    points: THREE.Vector3[];
    color: string;
    speed: number;
    opacity: number;
    width: number;
}) {
    const ref = useRef<THREE.Points>(null);
    const count = 300;

    const { positions, offsets } = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
        const pos = new Float32Array(count * 3);
        const off = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            const t = i / count;
            const pt = curve.getPoint(t);
            pos[i * 3] = pt.x + (Math.random() - 0.5) * width;
            pos[i * 3 + 1] = pt.y + (Math.random() - 0.5) * width;
            pos[i * 3 + 2] = pt.z + (Math.random() - 0.5) * 0.2;
            off[i] = Math.random();
        }
        return { positions: pos, offsets: off };
    }, [points, width]);

    useFrame((state) => {
        if (ref.current) {
            const mat = ref.current.material as THREE.PointsMaterial;
            const t = state.clock.elapsedTime * speed;
            // Shift particle along curve by animating opacity in wave
            mat.opacity = opacity * (0.7 + Math.sin(t) * 0.3);
            ref.current.rotation.z += 0.0003 * speed;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
                color={color}
                size={0.09}
                transparent
                opacity={opacity}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

/* ─── scene ─── */
function Scene() {
    // Left large arc — sweeps from bottom-left to top-right
    const leftArc = useMemo(
        () => [
            new THREE.Vector3(-18, -10, -5),
            new THREE.Vector3(-14, -4, -2),
            new THREE.Vector3(-8, 2, 0),
            new THREE.Vector3(-2, 6, 1),
            new THREE.Vector3(4, 8, -1),
            new THREE.Vector3(10, 6, -3),
        ],
        []
    );

    // Right large arc — sweeps from top-left to bottom-right
    const rightArc = useMemo(
        () => [
            new THREE.Vector3(18, 10, -5),
            new THREE.Vector3(14, 4, -2),
            new THREE.Vector3(8, -2, 0),
            new THREE.Vector3(2, -6, 1),
            new THREE.Vector3(-4, -8, -1),
            new THREE.Vector3(-10, -6, -3),
        ],
        []
    );

    // Inner glow arc — tight center loop
    const innerArc = useMemo(
        () => [
            new THREE.Vector3(-8, -6, 2),
            new THREE.Vector3(-4, 0, 3),
            new THREE.Vector3(0, 4, 2),
            new THREE.Vector3(5, 2, 1),
            new THREE.Vector3(8, -3, 2),
            new THREE.Vector3(4, -7, 1),
            new THREE.Vector3(-2, -6, 2),
        ],
        []
    );

    // Accent arc — bottom sweep
    const bottomArc = useMemo(
        () => [
            new THREE.Vector3(-16, -12, -6),
            new THREE.Vector3(-6, -9, -4),
            new THREE.Vector3(0, -8, -3),
            new THREE.Vector3(8, -9, -4),
            new THREE.Vector3(16, -12, -6),
        ],
        []
    );

    return (
        <group>
            {/* Primary arcs — teal/cyan gradient feel */}
            <FlowingArc points={leftArc} color="#2ad4ff" speed={0.8} opacity={0.55} width={0.3} />
            <FlowingArc points={leftArc} color="#1ab8d4" speed={0.5} opacity={0.3} width={0.8} />

            <FlowingArc points={rightArc} color="#1ec8e0" speed={0.7} opacity={0.5} width={0.3} />
            <FlowingArc points={rightArc} color="#0ea5c9" speed={0.4} opacity={0.25} width={0.9} />

            {/* Inner accent */}
            <FlowingArc points={innerArc} color="#38d8f5" speed={1.2} opacity={0.35} width={0.2} />

            {/* Bottom sweep */}
            <FlowingArc points={bottomArc} color="#1682a0" speed={0.6} opacity={0.2} width={0.5} />
        </group>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                gl={{
                    antialias: true,
                    alpha: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.1,
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 22]} fov={55} />
                <ambientLight intensity={0.1} />
                <Scene />
            </Canvas>
        </div>
    );
}
