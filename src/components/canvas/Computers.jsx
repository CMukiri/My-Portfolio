import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Adjusted hemisphere light for overall scene brightness */}
      <hemisphereLight intensity={0.6} groundColor="lightgray" />

      <pointLight intensity={2} />
      
      {/* Adjusted spotlight for focused lighting */}
      <spotLight
        position={[-20, 50, 10]}
        angle={Math.PI / 6}
        penumbra={0.5}
        intensity={2.5} // Increased intensity for brighter light
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Additional point light for ambient illumination */}
      <pointLight intensity={1.0} position={[10, 10, 10]} />

      {/* Adding ambient light for overall illumination */}
      <ambientLight intensity={0.5} />

      {/* Render the 3D model with adjusted scale and position */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.7} // Adjusted scale to make slightly smaller
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Adjusted position
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
