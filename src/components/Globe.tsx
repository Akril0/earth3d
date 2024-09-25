import {
    DoubleSide,
    MeshStandardMaterial,
    TextureLoader
} from "three";
import {useLoader} from "@react-three/fiber";
import globeTexture from '../assets/img/globe_texture.webp'
import React, {useRef} from "react";



const Globe = () => {
    const standardMaterialRef = useRef<MeshStandardMaterial>(null);
    const globe = useLoader(TextureLoader, globeTexture);

    return (
        <group>
            <mesh castShadow={false}
                  receiveShadow={false}
            >
                <sphereGeometry
                    args={[2.94, 64, 64]}/>

                <meshStandardMaterial
                    ref={standardMaterialRef}
                    map={globe}
                    transparent={true}
                    side={DoubleSide}
                />
            </mesh>
        </group>
    );
};

export default Globe;
