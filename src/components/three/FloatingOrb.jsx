/*import { Float, MeshDistortMaterial } from "@react-three/drei";

const FloatingOrb = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh>
        <sphereGeometry args={[1.4, 128, 128]} />

        <MeshDistortMaterial
          color="#3b82f6"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
};

export default FloatingOrb;*/
/*import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const FloatingOrb = () => {
  const mainSphere = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const wireframe = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    mainSphere.current.rotation.y = t * 0.4;

    ring1.current.rotation.x = t * 0.7;
    ring1.current.rotation.y = t * 0.3;

    ring2.current.rotation.z = t * 0.5;
    ring2.current.rotation.y = t * 0.2;

    wireframe.current.rotation.y = -t * 0.3;
  });

  return (
    <Float
      speed={3}
      rotationIntensity={2}
      floatIntensity={3}
    >

      // CORE SPHERE 
      <mesh ref={mainSphere}>
        <icosahedronGeometry args={[1.3, 32]} />

        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#2563eb"
          emissiveIntensity={2}
          distort={0.45}
          speed={3}
          roughness={0}
          metalness={1}
        />
      </mesh>

      // OUTER WIREFRAME 
      <mesh ref={wireframe} scale={1.4}>
        <icosahedronGeometry args={[1.3, 1]} />

        <meshBasicMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      // RING 1 
      <mesh ref={ring1} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[2.1, 0.02, 16, 100]} />

        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={4}
        />
      </mesh>

      // RING 2
      <mesh ref={ring2} rotation={[1.2, 0, 0]}>
        <torusGeometry args={[2.6, 0.015, 16, 100]} />

        <meshStandardMaterial
          color="#a855f7"
          emissive="#9333ea"
          emissiveIntensity={4}
        />
      </mesh>

    </Float>
  );
};

export default FloatingOrb;*/
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const FloatingOrb = () => {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    group.current.rotation.y = t * 0.2;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.1;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <group ref={group}>

        {/* CENTER CORE */}
        <mesh>
          <sphereGeometry args={[0.6, 64, 64]} />

          <meshStandardMaterial
            color="#ffffff"
            emissive="#3b82f6"
            emissiveIntensity={3}
            metalness={1}
            roughness={0}
          />
        </mesh>

        {/* GLASS OUTER SHELL */}
        <mesh scale={1.8}>
          <sphereGeometry args={[0.7, 64, 64]} />

          <meshPhysicalMaterial
            color="#60a5fa"
            transparent
            opacity={0.08}
            roughness={0}
            metalness={0}
            transmission={1}
            thickness={1.5}
          />
        </mesh>

        {/* MAIN RING */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.015, 16, 100]} />

          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={6}
          />
        </mesh>

        {/* SECOND RING */}
        <mesh rotation={[0.4, 1, 0]}>
          <torusGeometry args={[2.1, 0.01, 16, 100]} />

          <meshStandardMaterial
            color="#a855f7"
            emissive="#9333ea"
            emissiveIntensity={5}
          />
        </mesh>

        {/* THIRD RING */}
        <mesh rotation={[1, 0.2, 1]}>
          <torusGeometry args={[2.7, 0.01, 16, 100]} />

          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={2}
          />
        </mesh>

      </group>
    </Float>
  );
};

export default FloatingOrb;