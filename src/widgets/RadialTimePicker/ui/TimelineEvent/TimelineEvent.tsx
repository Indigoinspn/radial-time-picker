import React from 'react';
import { EventContainer, EventDescription, EventYear } from './styles';

interface TimelineEventProps {
  year: number;
  description: string;
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({ description, year }) => {
  return (
    <EventContainer>
      <EventYear>{year}</EventYear>
      <EventDescription>{description}</EventDescription>
    </EventContainer>
  );
};
