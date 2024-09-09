// ParticleScene.tsx
import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import {OrbitControls} from "@react-three/drei";

const ParticlesOnSphere = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Загружаем текстуру вашей карты
    const texture = useLoader(TextureLoader, '/imgonline-com-ua-Replace-color-HlSV4zWNlgBBhAfj 1 (1) 1 (1) (1).png');

    const particles = useMemo(() => {
        const particlesArray: { position: THREE.Vector3 }[] = [];
        const numParticles = 50000; // Количество частиц
        const radius = 5; // Радиус сферы

        // Создаём canvas для обработки текстуры
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return [];

        const image = texture.image as HTMLImageElement;
        canvas.width = image.width;
        canvas.height = image.height;

        // Отрисовываем текстуру на canvas
        ctx.drawImage(image, 0, 0);

        // Получаем данные изображения
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Создаём частицы только на основе белых пикселей текстуры
        for (let i = 0; i < numParticles; i++) {
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = 2 * Math.PI * Math.random();
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            // Преобразуем координаты x, y в UV-координаты
            const u = 0.5 + Math.atan2(z, x) / (2 * Math.PI);
            const v = 0.5 - Math.asin(y / radius) / Math.PI;

            // Преобразуем UV-координаты в координаты изображения
            const ix = Math.floor(u * canvas.width);
            const iy = Math.floor(v * canvas.height);

            // Получаем цвет пикселя
            const index = (iy * canvas.width + ix) * 4;

            // Если пиксель белый (или почти белый), добавляем частицу
            if (imageData.data[index + 3] > 0) {
                const position = new THREE.Vector3(x, y, z);

                particlesArray.push({
                    position: position,
                });
            }
        }
        return particlesArray;
    }, [texture]);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002; // Вращение группы частиц вместе с планетой
        }
    });

    return (
        <group ref={groupRef}>
            {particles.map((particle, index) => (
                <mesh key={index} position={particle.position} ref={(mesh) => mesh?.lookAt(0, 0, 0)}>
                    <circleGeometry args={[0.02, 32]} />
                    <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide}/>
                </mesh>
            ))}
        </group>
    );
};


const ParticleScene = () => {
    return (
        <Canvas camera={{position: [0, 0, 5]}}>
            <ambientLight/>
            <ParticlesOnSphere/>
            <OrbitControls/>
        </Canvas>
    );
};

export default ParticleScene;
