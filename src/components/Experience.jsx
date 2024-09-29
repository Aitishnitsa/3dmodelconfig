import { OrbitControls, Stage } from '@react-three/drei';
import { useConfigurator } from '../context/Configurator';
import { Roof } from './Roof';

export const Experience = () => {
  const { roofWidth, roofLength } = useConfigurator();
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
        <Roof />
        <OrbitControls />
      </Stage>
    </>
  );
};
