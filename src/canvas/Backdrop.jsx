import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      position={[0, 0, -0.1]}
      ref={shadows}
      frames={60}
      temporal={0.5}
      alphaTest={0.15}
      scale={8}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={5}
        radius={6}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={5}
        radius={6}
        intensity={0.45}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
