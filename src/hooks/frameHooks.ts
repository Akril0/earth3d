import {useFrame} from "@react-three/fiber";

type FrameCallback = () => void;
export const useThirtyFrame = (callBack: FrameCallback) => {
    let lastFrameTime = 0;
    const desiredFPS = 24;
    const frameDuration = 1000 / desiredFPS;

    return useFrame((state) => {

        const currentTime = state.clock.getElapsedTime() * 1000;

        if (currentTime - lastFrameTime >= frameDuration) {
            lastFrameTime = currentTime;
            callBack();
        }
    })
}