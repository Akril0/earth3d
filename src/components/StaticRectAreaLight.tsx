import {
    RectAreaLightUniformsLib
} from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import React, { useEffect, useRef} from "react";
import * as THREE from "three";
import {
    StaticRectAreaLightProps
} from "../types/planet/rectLight";

RectAreaLightUniformsLib.init();

const StaticRectAreaLight: React.FC<StaticRectAreaLightProps> = ({targetRef}) => {
    const lightRef = useRef<THREE.RectAreaLight>(null);

    useEffect(() => {
        if (lightRef.current && targetRef.current) {
            const targetPosition = new THREE.Vector3();
            targetRef.current.getWorldPosition(targetPosition);

            lightRef.current.lookAt(targetPosition);
        }
    }, [targetRef]);

    return (
        <rectAreaLight
            ref={lightRef}
            width={6}
            height={6}
            intensity={30}
            color={new THREE.Color(0x662083)}
            position={[-2.2, 2.2, 0]}
            castShadow
        />
    );
};

export default StaticRectAreaLight;