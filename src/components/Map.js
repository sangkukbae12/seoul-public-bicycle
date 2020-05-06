import React from 'react';
import MapGL from 'react-map-gl';
import { Spring } from 'react-spring/renderprops';
import Layers from './Layers';

export default function Map({
  width,
  height,
  viewState,
  onViewStateChange,
  places,
  radius,
}) {
  return (
    <MapGL
      width={width}
      height={height}
      viewState={viewState}
      onViewStateChange={onViewStateChange}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      // mapStyle="mapbox://styles/sangkuk/ck9rrb27g2s9f1immf7x9fltn"
    >
      <Spring from={{ radius: 0 }} to={{ radius }}>
        {(springProps) => (
          <Layers
            places={places}
            radius={springProps.radius}
            viewState={viewState}
          />
        )}
      </Spring>
    </MapGL>
  );
}
