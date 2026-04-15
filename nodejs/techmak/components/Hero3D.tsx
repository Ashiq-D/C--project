"use client";

import { useRef, useMemo } from "react";

import { Shield } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Html } from "@react-three/drei";
import * as THREE from "three";

function ApertureRing({
    radius,
    count,
    speed,
    color,
    depth,
    zSpread,
    segments,
}: {
    radius: number;
    count: number;
    speed: number;
    color: string;
    depth: number;
    zSpread: number;
    segments: number;
}) {
    const ref = useRef<THREE.Points>(null);

    const { positions, opacities } = useMemo(() => {
        const pos = [];
        const opc = [];
        const segmentAngle = (Math.PI * 2) / segments;
        const gap = 0.08; // gap between shutter blades

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            
            // Create "shutter blades" by knocking out gaps
            const localAngle = angle % segmentAngle;
            if (localAngle < gap || localAngle > segmentAngle - gap) continue;

            const rOffset = Math.random();
            const r = radius + rOffset * 2.5;
            
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            const z = depth + (Math.random() - 0.5) * zSpread + (rOffset * 2.0);

            pos.push(x, y, z);
            opc.push(1.0 - rOffset * 0.8);
        }

        return {
            positions: new Float32Array(pos),
            opacities: new Float32Array(opc),
        };
    }, [radius, count, depth, zSpread, segments]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.z = state.clock.elapsedTime * speed;
            const scale = 1.0 + Math.sin(state.clock.elapsedTime * 0.5 + depth) * 0.02;
            ref.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-alpha" args={[opacities, 1]} />
            </bufferGeometry>
            <pointsMaterial
                color={new THREE.Color(color)}
                size={0.12}
                transparent
                opacity={0.8}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function CyberneticAperture() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            const mx = (state.pointer.x * Math.PI) / 10;
            const my = (state.pointer.y * Math.PI) / 10;
            
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -my, 0.05);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mx, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            <ApertureRing radius={28} count={8000} speed={0.02} color="#052626" depth={-20} zSpread={6} segments={24} />
            <ApertureRing radius={22} count={6000} speed={-0.04} color="#0ea5c9" depth={-12} zSpread={4} segments={12} />
            <ApertureRing radius={15} count={5000} speed={0.06} color="#38c5e0" depth={-6} zSpread={2} segments={8} />
            <ApertureRing radius={8} count={3500} speed={-0.10} color="#9ff6ff" depth={0} zSpread={1} segments={6} />
            <ApertureRing radius={3} count={1500} speed={0.25} color="#ffffff" depth={2} zSpread={0.5} segments={3} />
            
            <pointLight position={[0, 0, 5]} color="#9ff6ff" intensity={2} distance={30} />

            {/* Shield with Layered Custom Thunder Logo positioned in the center */}
            <Html position={[0, 0, 2]} center transform zIndexRange={[100, 0]}>
                <div className="relative flex items-center justify-center w-32 h-32 group">
                    {/* Glowing Futuristic Shield Outline */}
                    <Shield 
                        className="absolute inset-0 w-full h-full text-[#38c5e0]/60 drop-shadow-[0_0_20px_rgba(56,197,224,0.6)] backdrop-blur-sm" 
                        strokeWidth={1} 
                        fill="rgba(5,38,38,0.7)" 
                    />
                    
                    {/* Layered Custom Thunder Logo matching user reference */}
                    <svg 
                        viewBox="0 0 24 24" 
                        className="relative z-10 w-14 h-14 ml-[2px] mt-[2px] drop-shadow-[0_4px_10px_rgba(250,204,21,0.4)]"
                        style={{ animation: 'pulse 0.15s infinite alternate' }}
                    >
                        {/* Base Dark Shape / Border Outline */}
                        <path 
                            d="M13.5 2 L3.5 14 H12.5 L11.5 22 L21.5 10 H12.5 L13.5 2 Z" 
                            fill="#FACC15" /* Vibrant Yellow Core */
                            stroke="#1F2937" /* Dark Charcoal Outline */
                            strokeWidth="1.5" 
                            strokeLinejoin="round" 
                        />
                        {/* White Highlight on left-facing edges, exactly like the image */}
                        <path 
                            d="M13.5 2 L3.5 14 H12.5" 
                            fill="none" 
                            stroke="#FFFFFF" 
                            strokeWidth="1" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                    </svg>
                </div>
            </Html>
        </group>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#020a0a]">
            {/* Radial vignette mask embedded in DOM over canvas */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#020a0a_80%)]" />
            
            <Canvas
                gl={{
                    antialias: true,
                    alpha: true,
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={55} />
                <ambientLight intensity={0.5} />
                <CyberneticAperture />
            </Canvas>
        </div>
    );
}
