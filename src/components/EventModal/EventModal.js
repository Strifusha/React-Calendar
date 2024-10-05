import { useContext, useState } from 'react';
import { EventsContext } from '../../contexts/eventsContext';
import { ReactComponent as CrossIcon } from '../../images/cross-icon.svg';
import { formatEventDate, formatEventTime, calculateEventEndTime } from '../../utils/formattedData';
import { BLUE_COLOR, EMPTY_NAME_ERROR, MAX_SIZE_ERROR } from '../../utils/constants';
import './EventModal.css';

export const EventModal = ({onClose, event}) => {
  const { setEvents } = useContext(EventsContext);

  const [eventName, setEventName] = useState(event?.title || '');
  const [eventNotes, setEventNotes] = useState(event?.description || '');
  const [eventDate, setEventDate] = useState(formatEventDate(event?.start) || '');
  const [eventTime, setEventTime] = useState(formatEventTime(event?.start) || '');
  const [eventColor, setEventColor] = useState(event?.color || BLUE_COLOR);

  const [error, setError] = useState('');

  // check errors in values
  const validateValues = () => {
    if (eventName.length > 30 || eventNotes.length > 30) {
      setError(MAX_SIZE_ERROR);
      return false;
    } ;

    if(eventName.trim() === '') {
      setError(EMPTY_NAME_ERROR);
      return false;
    };
    return true;
  };

  const createEvent = () => {
    const newEvent = {
      id: event?.id || String(Date.now()),
      title: eventName,
      start: `${eventDate}T${eventTime}:00`,
      end: calculateEventEndTime(event),
      description: eventNotes,
      color: eventColor,
    };

     // add new event to the EventContext
    setEvents(prevEvents => {
      const filteredEvents = event ? prevEvents.filter(e => e.id !== event?.id) : prevEvents;
      return [...filteredEvents, newEvent];
    });
  };

  // delete event
  const handleCancel = () => {
    if (event?.id) {
      setEvents(prevEvents => prevEvents.filter(e => e.id !== event.id));
    }
    onClose();
  }

  const handleSave = () => {
    if (validateValues()) {
      createEvent();
      setError('');
      onClose();
    };
  };

  return (
    <>
      <div className='cross-icon-container'>
        <CrossIcon onClick={onClose} />
      </div>
      <div className='inputs-container'>
        <label>
          event name
          <input
            type='text'
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            />
        </label>
        <label>
          event date
          <input
            type='date'
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </label>
        <label>
          event time
          <input
            type='time'
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </label>
        <label>
          notes
          <input
            type='text'
            value={eventNotes}
            onChange={(e) => setEventNotes(e.target.value)}
          />
        </label>
        <label>
          Color
          <input
            type='color'
            value={eventColor}
            onChange={(e) => setEventColor(e.target.value)}
          />
        </label>
        {error && <div className='error-message'>{error}</div>}
      </div>

      <div className='modal-buttons-container'>
        <button
          onClick={handleCancel}
          className='cancel-btn'
        >
          {event.title ? 'Discard' : 'Cancel'}
        </button>
        <button className='save-btn' onClick={handleSave}>
          {event.title ? 'Edit' : 'Save'}
        </button>
      </div>
    </>
  )
}