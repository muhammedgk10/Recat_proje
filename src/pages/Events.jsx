import React from 'react';
import styled from 'styled-components';

const EventsContainer = styled.div`
  padding: 2rem;
`;

const EventsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Events = () => {
  return (
    <EventsContainer>
      <EventsTitle>Etkinlikler</EventsTitle>
      <p>Burada tüm etkinlikler listelenecek.</p>
    </EventsContainer>
  );
};

export default Events;
