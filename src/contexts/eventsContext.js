import React, { createContext, useState, useEffect } from 'react';
import { LOCAL_STORAGE_EVENTS, MOCK_EVENTS } from '../utils/constants';

export const EventsContext = createContext(null);

// provider for context
export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    return LOCAL_STORAGE_EVENTS ? JSON.parse(LOCAL_STORAGE_EVENTS) : MOCK_EVENTS;
  });

  // store events in localStorage
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};
