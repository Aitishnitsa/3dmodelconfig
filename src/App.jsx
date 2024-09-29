import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Interface } from './components/Interface';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [5, 5, -10], fov: 25 }}>
        <directionalLight
          shadow
          intensity={3}
          color="white"
          position={[5, 5, 5]}
        />
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
