import { gsap } from 'gsap';
import { useRef, useState } from 'react';

export const useRadialAnimation = (pointsQuantity: number, initialIndex: number = 0, activePointIndex: number) => {
  const [rotation, setRotation] = useState(-60);
  const currentRotationRef = useRef(-60);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const rotateTo = (targetIndex: number) => {
    if (targetIndex === activePointIndex) {
      return;
    }
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const targetAngle = getShortestTargetAngle(targetIndex, pointsQuantity, currentRotationRef.current);

    const animatable = { value: currentRotationRef.current };

    animationRef.current = gsap.to(animatable, {
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        setRotation(targetAngle);
      },
      onUpdate: () => {
        if (animationRef.current && typeof animationRef.current.targets()[0] === 'object') {
          currentRotationRef.current = (animationRef.current.targets()[0] as { value: number }).value;
          setRotation(currentRotationRef.current);
        }
      },
      value: targetAngle,
    });
  };

  return { rotateTo, rotation };
};

const getShortestTargetAngle = (targetIndex: number, pointsQuantity: number, currentAngle: number): number => {
  const anglePerPoint = 360 / pointsQuantity;
  const baseTargetAngle = -targetIndex * anglePerPoint - 60;

  const candidates = [baseTargetAngle, baseTargetAngle + 360, baseTargetAngle - 360];

  let shortestAngle = baseTargetAngle;
  let minDistance = Math.abs(baseTargetAngle - currentAngle);

  for (const candidate of candidates) {
    const distance = Math.abs(candidate - currentAngle);
    if (distance < minDistance) {
      minDistance = distance;
      shortestAngle = candidate;
    }
  }

  return shortestAngle;
};
