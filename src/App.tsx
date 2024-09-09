import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParticleScene from "./components/ParticleScene";
import {OrbitControls} from "@react-three/drei";

function App() {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <ParticleScene/>

        </div>
    );
}

export default App;
