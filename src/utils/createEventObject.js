export const createEventObject = (info) => ({
  id: info.event.id,
  title: info.event.title,
  start: info.event.start,
  end: info.event.end,
  description: info.event.extendedProps.description,
  color: info.event.backgroundColor,
});