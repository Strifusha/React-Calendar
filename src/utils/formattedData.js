// format into 'YYYY-MM-DD'
export function formatEventDate(date) {
  return date ? new Date(date).toISOString().substr(0, 10) : '';
}  

// formatting 'Fri Oct 04 2024 12:00:00' into '12:00'
export const formatEventTime = (eventStart) => {
  const dateObject = new Date(eventStart);
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');
  
  return `${hours}:${minutes}`;
};

export const calculateEventEndTime = (event) => {
  const startDate = new Date(event.start); 

  // add 1 hour
  const endDate = formatEventTime(startDate.getTime() + 60 * 60 * 1000);

  return {
    ...event,
    end: endDate, 
  };
};

export const formatEvents = (events) => {
  return events.map((event) => ({
    ...calculateEventEndTime(event),
    backgroundColor: event.color,
  }));
};