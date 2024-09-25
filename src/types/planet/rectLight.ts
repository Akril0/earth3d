import {RefObject} from "react";
import * as THREE from "three";

export interface StaticRectAreaLightProps {
    targetRef: RefObject<THREE.Group<THREE.Object3DEventMap>>
}
