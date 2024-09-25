import React, {
    useRef,
} from 'react';
import * as THREE from 'three';
import Globe from "./Globe";
import {
    OrbitParticles,
    Particles1, Particles2, Particles3, Particles4,
} from "./Particles";
import StaticRectAreaLight from "./StaticRectAreaLight";
import {useThirtyFrame} from "../hooks/frameHooks";


const GlobeScene = () => {

    const scrollGroupRef = useRef<THREE.Group>(null);
    const groupRef = useRef<THREE.Group>(null);

    useThirtyFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002; // Вращение группы частиц вместе с планетой
        }
    })

    return (
        <group position={[0,0,0]}
               ref={scrollGroupRef}

        >
            <StaticRectAreaLight targetRef={groupRef}/>
            <group
                ref={groupRef}
                rotation={[0, 3, 0]}>

                <group
                    scale={[1, 1.03, 1]}
                >
                    <Particles1/>
                    <Particles2/>
                    <Particles3/>
                    <Particles4/>
                    <OrbitParticles/>
                    <Globe/>
                </group>
            </group>
        </group>

    );
};

export default GlobeScene;


