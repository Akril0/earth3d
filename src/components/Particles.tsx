import React, {
    useMemo,
} from 'react';
import particles3
    from "../data/continent_particles3.json";
import particles1
    from '../data/continent_particles1.json';
import particles2
    from '../data/continent_particles2.json';
import particles4
    from '../data/continent_particles4.json'
import orbit_particles
    from '../data/orbit_particles.json'
import * as THREE from "three";
import ParticleMesh from "./ParticleMesh";




export const Particles1 = () => {

    const geometry = useMemo(() => new THREE.CircleGeometry(0.01, 6), []);
    const material = useMemo(() => new THREE.MeshBasicMaterial({
        color: 'white',
        side: 2
    }), []);


    return (
        <group>
            <ParticleMesh
                geometry={geometry}
                material={material}
                particles={particles1}
            />
        </group>
    );
};

export const Particles2 = () => {


    const geometry = useMemo(() => new THREE.CircleGeometry(0.008, 6), []);
    const material = useMemo(() => new THREE.MeshBasicMaterial({
        color: '#89639A',
        side: 2
    }), []);

    return (
        <group>
            <ParticleMesh
                geometry={geometry}
                material={material}
                particles={particles2}
            />

        </group>
    );
};
export const Particles3 = () => {



    const geometry = useMemo(() => new THREE.CircleGeometry(0.007, 6), []);
    const material = useMemo(() => new THREE.MeshBasicMaterial({
        color: '#B45ADB',
        side: 2,
    }), []);

    return (
        <group scale={1.01}>
            <ParticleMesh
                geometry={geometry}
                material={material}
                particles={particles3}
            />
        </group>
    );
};


export const Particles4 = () => {

    const geometry = useMemo(() => new THREE.CircleGeometry(0.007, 6), []);
    const material = useMemo(() => new THREE.MeshBasicMaterial({
        color: '#B45ADB',
        side: 2
    }), []);

    return (
        <group>
            <ParticleMesh
                geometry={geometry}
                material={material}
                particles={particles4}
            />
        </group>
    );
};

export const OrbitParticles = () => {

    const geometry = useMemo(() => new THREE.CircleGeometry(0.007, 6), []);
    const material = useMemo(() => new THREE.MeshBasicMaterial({
        color: '#AE99FF',
        side: 2,
    }), []);
    return (
        <group>
            <ParticleMesh
                geometry={geometry}
                material={material}
                particles={orbit_particles}
            />
        </group>
    );
};