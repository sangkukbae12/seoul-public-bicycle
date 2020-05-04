import React, { useContext } from 'react';
import Map from './components/Map';
import Controls from './components/Controls';
import { MapContext } from './context';
import './App.css';

function App() {
  const { viewState, handleChangeViewState, places, radius } = useContext(
    MapContext
  );

  return (
    <div className="App">
      <Map
        width="100vw"
        height="100vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
        places={places}
        radius={radius}
      />
      <Controls />
    </div>
  );
}

export default App;
