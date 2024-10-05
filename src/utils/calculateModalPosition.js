import { WINDOW_HEIGHT, CALENDAR_ELEMENT_WIDTH } from './constants';

// calculate the position depending on the click coordinates 
export const calculateModalPosition = (rect, offsetBottom = 10, offsetTop = 326) => {
  const isCloseToBottom = (WINDOW_HEIGHT - rect.bottom) < 400;

  return {
    top: isCloseToBottom 
      ? rect.top + window.scrollY - offsetTop // Show above
      : rect.bottom + window.scrollY + offsetBottom, // Show under
    left: rect.left + window.scrollX + (rect.width / 2) - (CALENDAR_ELEMENT_WIDTH / 2),
  };
};