import React from 'react';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';
import { recommended } from '../../data';

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={recommended.length}>
      { recommended.map(recomendado => (
        <CardRecomendacion key={recomendado.id} { ...recomendado } />
      )) }
    </CardsContainer>
  );
};

export default CardsRecomendacion;
