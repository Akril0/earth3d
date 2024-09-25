import React, {
    lazy,
    Suspense,
} from 'react';
import {Canvas} from "@react-three/fiber";


const GlobeScene = lazy(() => import("./GlobeScene"));

const CanvasScene = () => {

    return (
        <>
            <Canvas
                shadows={false}
                style={ { width: '100%',height: '100%',}}>
                <ambientLight/>
                <Suspense fallback={<></>}>
                    <GlobeScene/>
                </Suspense>
            </Canvas>
        </>

    );
};

export default React.memo(CanvasScene);