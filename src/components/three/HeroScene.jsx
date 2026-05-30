/*import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import FloatingOrb from "./FloatingOrb";

const HeroScene = () => {
  return (
    <div className="w-full h-[500px]">

      <Canvas camera={{ position: [0, 0, 4] }}>

        <ambientLight intensity={1.5} />

        <directionalLight position={[2, 2, 5]} intensity={2} />

        <FloatingOrb />

        <Environment preset="city" />

      </Canvas>

    </div>
  );
};

export default HeroScene;*/
import { Canvas } from "@react-three/fiber";

import {
  Environment,
  Sparkles,
} from "@react-three/drei";

import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import FloatingOrb from "./FloatingOrb";

const HeroScene = () => {
  return (
    <div className="w-full h-[650px]">

      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>

        {/* LIGHTS */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={3}
          color="#3b82f6"
        />

        {/* PARTICLES */}
        <Sparkles
          count={80}
          scale={10}
          size={2}
          speed={0.3}
        />

        {/* MAIN OBJECT */}
        <FloatingOrb />

        {/* ENVIRONMENT */}
        <Environment preset="night" />

        {/* POST PROCESSING */}
        <EffectComposer>

          <Bloom
            intensity={1.2}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
          />

        </EffectComposer>

      </Canvas>

    </div>
  );
};

export default HeroScene;