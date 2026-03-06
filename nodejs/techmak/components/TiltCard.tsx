"use client";

import { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function TiltCard({ children, className, ...props }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tiltStyle, setTiltStyle] = useState({});

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();

        // Calculate mouse position relative to the center of the card
        const x = e.clientX - left;
        const y = e.clientY - top;

        const centerX = width / 2;
        const centerY = height / 2;

        // Calculate tilt angles (max 15 degrees)
        const tiltX = -((y - centerY) / centerY) * 15;
        const tiltY = ((x - centerX) / centerX) * 15;

        // Calculate glare position
        const glareX = (x / width) * 100;
        const glareY = (y / height) * 100;

        setTiltStyle({
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`,
            transition: "transform 0.1s ease-out",
        });

        // We could apply glare via a standard CSS variable, but for simplicity, 
        // we'll rely on the parent or children to use this container holding the transform.
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform: `rotateX(0deg) rotateY(0deg) scale(1)`,
            transition: "transform 0.5s ease-out",
        });
    };

    return (
        <div
            ref={cardRef}
            className={cn("perspective-container relative overflow-visible", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <div
                className="w-full h-full tilt-card shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300"
                style={tiltStyle}
            >
                {children}
            </div>
        </div>
    );
}
