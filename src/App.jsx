import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
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
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Interface />
      <Loader
        containerStyles={{ backgroundColor: 'rgb(64, 64, 64)' }}
        innerStyles={{
          backgroundColor: 'white',
          width: '12rem',
          height: '0.5rem',
          borderRadius: '1rem',
        }}
        barStyles={{
          backgroundColor: '#1976d2',
          width: '12rem',
          height: '0.5rem',
          borderRadius: '1rem',
        }}
        dataStyles={{ fontSize: '1rem', color: 'white' }}
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
      />
    </>
  );
}

export default App;
