import * as THREE from "three";
import React, {useEffect, useMemo, useRef} from "react";
import {ParticleMeshProps} from "../types/planet/particles";


const ParticleMesh: React.FC<ParticleMeshProps> = (props) => {


    const dummy = useMemo(() => new THREE.Object3D(), []);

    const meshRef = useRef<THREE.InstancedMesh>(null);

    useEffect(() => {
        if (meshRef.current) {
            props.particles.forEach((particle, i) => {
                dummy.position.set(particle.position.x, particle.position.y, particle.position.z);
                dummy.lookAt(new THREE.Vector3(0, 0, 0));
                dummy.updateMatrix();
                meshRef.current!.setMatrixAt(i, dummy.matrix);

            })
            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    }, [dummy, props.particles]);

    return (
        <instancedMesh
            castShadow={false}
            args={[props.geometry, props.material, props.particles.length]}
            ref={meshRef}
        />
    )

}

export default ParticleMesh;