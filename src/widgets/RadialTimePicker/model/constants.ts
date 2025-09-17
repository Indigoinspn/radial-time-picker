import { Period } from './types';

export const backgroundBlockWidth = 80;

export const SVG_WIDTH = 1458;
export const SVG_HEIGHT = 630;

export const BASE_CIRCLE_DIAMETER = 530;
export const BASE_CIRCLE_RADIUS = BASE_CIRCLE_DIAMETER / 2;
export const CENTER = SVG_HEIGHT / 2;
export const CENTER_Y = SVG_HEIGHT / 2;
export const CENTER_X = SVG_WIDTH / 2;

export const DIAL_RADIUS = BASE_CIRCLE_RADIUS;

export const ACTIVE_POINT_RADIUS = 28;
export const INACTIVE_POINT_RADIUS = 3;

export const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius bibendum laoreet.';

export const PERIODS: Period[] = [
  {
    events: [
      { description: dummyDescription, year: 1980 },
      { description: dummyDescription, year: 1981 },
      { description: dummyDescription, year: 1982 },
      { description: dummyDescription, year: 1983 },
      { description: dummyDescription, year: 1984 },
      { description: dummyDescription, year: 1985 },
      { description: dummyDescription, year: 1986 },
    ],
    id: 1,
    name: 'Искусство',
    startYear: 1980,
    endYear: 1986,
  },
  {
    events: [
      { description: dummyDescription, year: 1987 },
      { description: dummyDescription, year: 1988 },
      { description: dummyDescription, year: 1989 },
      { description: dummyDescription, year: 1990 },
      { description: dummyDescription, year: 1991 },
    ],
    id: 2,
    name: 'Кино',
    startYear: 1987,
    endYear: 1991,
  },
  {
    events: [
      { description: dummyDescription, year: 1992 },
      { description: dummyDescription, year: 1993 },
      { description: dummyDescription, year: 1994 },
      { description: dummyDescription, year: 1995 },
      { description: dummyDescription, year: 1996 },
      { description: dummyDescription, year: 1997 },
    ],
    id: 3,
    name: 'Литература',
    startYear: 1992,
    endYear: 1997,
  },
  {
    events: [
      { description: dummyDescription, year: 1998 },
      { description: dummyDescription, year: 1999 },
      { description: dummyDescription, year: 2000 },
      { description: dummyDescription, year: 2001 },
      { description: dummyDescription, year: 2002 },
      { description: dummyDescription, year: 2003 },
      { description: dummyDescription, year: 2004 },
      { description: dummyDescription, year: 2005 },
    ],
    id: 4,
    name: 'Архитектура',
    startYear: 1998,
    endYear: 2005,
  },
  {
    events: [
      { description: dummyDescription, year: 2006 },
      { description: dummyDescription, year: 2008 },
      { description: dummyDescription, year: 2010 },
      { description: dummyDescription, year: 2011 },
      { description: dummyDescription, year: 2012 },
      { description: dummyDescription, year: 2013 },
      { description: dummyDescription, year: 2014 },
    ],
    id: 5,
    name: 'Музыка',
    startYear: 2006,
    endYear: 2014,
  },
  {
    events: [
      { description: dummyDescription, year: 2015 },
      { description: dummyDescription, year: 2016 },
      { description: dummyDescription, year: 2018 },
      { description: dummyDescription, year: 2020 },
      { description: dummyDescription, year: 2021 },
      { description: dummyDescription, year: 2022 },
    ],
    id: 6,
    name: 'Наука',
    startYear: 2015,
    endYear: 2022,
  },
];
