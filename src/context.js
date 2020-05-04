import React, { useState, createContext, useEffect } from 'react';
import * as Locations from './locations';
import { districts } from './locations';
import { FlyToInterpolator } from 'react-map-gl';
import { csv } from 'd3';

export const MapContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [viewState, setViewState] = useState(Locations.seoul);
  const [places, setPlaces] = useState([]);
  const [radius, setRadius] = useState(15);
  const [district, setDistrict] = useState([]);

  useEffect(() => {
    csv('/data/seoul_public_bicycle.csv', (d) => ({
      place: d.place,
      name: d.name,
      address: d.address,
      position: [+d['longitude'], +d['latitude']],
      units: d.numOfUnits,
    }))
      .then((places) => places.filter((d) => d.name !== null))
      .then(setPlaces);
  }, []);

  useEffect(() => {
    const NewDistrict = districts.reduce((acc, d) => {
      acc[d.sig_kor_nm] = {
        latitude: +d.lat,
        longitude: +d.lng,
        zoom: 13,
        pitch: 40,
        bearing: 0.7,
      };
      return acc;
    }, []);
    setDistrict(NewDistrict);
  }, []);

  const handleChangeViewState = ({ viewState }) => setViewState(viewState);

  const handleFlyTo = (destination) =>
    setViewState({
      ...viewState,
      ...destination,
      transitionDuration: 2000,
      transitionInterpolatior: new FlyToInterpolator(),
    });

  const contextValue = {
    viewState,
    setViewState,
    handleChangeViewState,
    handleFlyTo,
    Locations,
    places,
    radius,
    district,
  };

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};

export default ContextProvider;
