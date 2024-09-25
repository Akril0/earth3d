import * as THREE from "three";

interface IParticles{
    position:{
        x: number;
        y: number;
        z: number;
    }
}

export interface ParticleMeshProps {
    particles: IParticles[];
    geometry: THREE.CircleGeometry;
    material: THREE.MeshBasicMaterial;
}