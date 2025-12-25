import React, { useEffect, useRef } from 'react';

interface TouchControllerProps {
  onSwipe: (direction: 'left' | 'right' | 'up' | 'down') => void;
  onPinch: (scale: number) => void;
}

export const TouchController: React.FC<TouchControllerProps> = ({ onSwipe, onPinch }) => {
  const touchStartRef = useRef<{ x: number; y: number; distance?: number } | null>(null);
  const SWIPE_THRESHOLD = 50; // minimum pixels to trigger swipe
  const PINCH_THRESHOLD = 0.1; // minimum scale change to trigger pinch

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      } else if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        touchStartRef.current = {
          x: (touch1.clientX + touch2.clientX) / 2,
          y: (touch1.clientY + touch2.clientY) / 2,
          distance,
        };
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartRef.current && e.changedTouches.length === 1) {
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStartRef.current.x;
        const deltaY = touch.clientY - touchStartRef.current.y;

        // Determine swipe direction
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
          onSwipe(deltaX > 0 ? 'right' : 'left');
        } else if (Math.abs(deltaY) > SWIPE_THRESHOLD) {
          onSwipe(deltaY > 0 ? 'down' : 'up');
        }
      }
      touchStartRef.current = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && touchStartRef.current && touchStartRef.current.distance) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const scale = currentDistance / touchStartRef.current.distance;

        if (Math.abs(scale - 1) > PINCH_THRESHOLD) {
          onPinch(scale);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [onSwipe, onPinch]);

  return null; // This is a headless controller
};
