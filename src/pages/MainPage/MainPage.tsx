import React, { useEffect, useState } from 'react';
import { RadialTimePicker } from 'widgets/RadialTimePicker';
import { Background, Layout, Lines, LinesContainer } from './styles';
import { StubPage } from '../StubPage';

export const MainPage = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const [linesQuantity, setLinesQuantity] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setLinesQuantity(Math.floor(1920 / 80));
  }, [viewportWidth]);

  return (
    <>
      <Background>
        <LinesContainer>
          {Array.from({ length: linesQuantity + 1 }, (_, i) => (
            <Lines key={i + 1} />
          ))}
        </LinesContainer>

        <Layout>
          <RadialTimePicker pointsQuantity={6} initialActiveIndex={0} />
        </Layout>
      </Background>

      <StubPage />
    </>
  );
};
