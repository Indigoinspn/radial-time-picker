import React, { useEffect } from 'react';
import { PERIODS } from 'widgets/RadialTimePicker/model/constants';
import { ActivePointIndex, PointDisplayProps } from 'widgets/RadialTimePicker/model/types';
import { TimelineEvent } from '../TimelineEvent';
import { EventsContainer, PeriodLabelMobile, StyledHorizontalLine, TimelineButton, TimelineContainer } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface TimelineEventsProps extends Pick<PointDisplayProps, 'activePointIndex'> {}

export const TimelineEvents: React.FC<TimelineEventsProps> = ({ activePointIndex }) => {
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  const [isVisible, setIsVisible] = React.useState(false);
  const [eventsList, setEventsList] = React.useState(PERIODS[0].events);

  const getActivePeriodId = (index: ActivePointIndex): number => {
    return index + 1;
  };

  const period = PERIODS.find(item => item.id === getActivePeriodId(activePointIndex));

  const swiperRef = React.useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 300);
    }

    setIsVisible(false);
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    const eventsTimer = setTimeout(() => {
      setEventsList(period?.events || PERIODS[0].events);
    }, 500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(eventsTimer);
    };
  }, [activePointIndex]);

  return (
    <TimelineContainer>
      <PeriodLabelMobile $isVisible={isVisible}>{PERIODS[activeSlideIndex].name}</PeriodLabelMobile>
      <StyledHorizontalLine />
      <TimelineButton $position={'Left'} onClick={() => swiperRef.current?.slidePrev()} disabled={isBeginning}>
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </TimelineButton>

      <EventsContainer $isVisible={isVisible}>
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          onSwiper={swiper => (swiperRef.current = swiper)}
          navigation={false}
          loop={false}
          centeredSlides={false}
          freeMode={true}
          watchSlidesProgress={true}
          onActiveIndexChange={swiper => {
            setActiveSlideIndex(swiper.activeIndex);
          }}
          onSlideChange={swiper => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {eventsList.map((item, index) => (
            <SwiperSlide key={item.year} style={{ width: 'auto' }}>
              <TimelineEvent year={item.year} description={item.description} isActive={index === activeSlideIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </EventsContainer>

      <TimelineButton $position={'Right'} onClick={() => swiperRef.current?.slideNext()} disabled={isEnd}>
        <svg viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </TimelineButton>
    </TimelineContainer>
  );
};
