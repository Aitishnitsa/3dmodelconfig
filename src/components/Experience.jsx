import { OrbitControls, Stage } from '@react-three/drei';

export const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: 'accumulative',
          color: '#fff',
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2.5}
      >
        <OrbitControls />
        <mesh castShadow>
          <meshNormalMaterial />
          <boxGeometry />
        </mesh>
      </Stage>
    </>
  );
};
