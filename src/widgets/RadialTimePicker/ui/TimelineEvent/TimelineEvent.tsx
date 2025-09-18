import React from 'react';
import { EventContainer, EventDescription, EventYear } from './styles';

interface TimelineEventProps {
  year: number;
  description: string;
  isActive: boolean;
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({ description, year, isActive }) => {
  return (
    <EventContainer className="event" $isFirst={isActive}>
      <EventYear>{year}</EventYear>
      <EventDescription>{description}</EventDescription>
    </EventContainer>
  );
};
