import React, { useState } from 'react';
import { DeckGL, ScatterplotLayer } from 'deck.gl';
import { easeBackOut } from 'd3';
import { Typography } from '@material-ui/core';

export default function Layers({ places, radius, viewState }) {
  const [tooltip, setTooltip] = useState({});

  const layers = [
    new ScatterplotLayer({
      id: 'scatterplot-layer',
      data: places,
      // getRadius: 500 * radius,
      getRadius: radius * 5,
      radiusMaxPixels: 15,
      getFillColor: [255, 99, 71],
      transitions: {
        getRadius: {
          duration: 1000,
          easing: easeBackOut,
        },
      },
      pickable: true,
      // onClick: (info) => console.log(info.object),
      autoHighlight: true,
      stroked: false,
      opacity: 0.8,
      onHover: ({ object, x, y }) =>
        setTooltip({
          hoveredObject: object,
          pointerX: x,
          pointerY: y,
        }),
    }),
  ];

  const renderTooltip = ({ hoveredObject, pointerX, pointerY }) => {
    return (
      hoveredObject && (
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            pointerEvents: 'none',
            left: pointerX,
            top: pointerY,
            color: '#fff',
            background: 'rgba(0,0,0,0.8)',
            padding: '4px',
            maxWidth: '300px',
            borderRadius: '2px',
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
          >{`대여소명: ${hoveredObject.name}`}</Typography>
          <Typography
            variant="body1"
            gutterBottom
          >{`주소: ${hoveredObject.address}`}</Typography>
          <Typography
            variant="body1"
            gutterBottom
          >{`거치대수: ${hoveredObject.units}`}</Typography>
        </div>
      )
    );
  };

  return (
    <DeckGL layers={[layers]} viewState={viewState}>
      {renderTooltip(tooltip)}
    </DeckGL>
  );
}
