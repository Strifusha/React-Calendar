import { useState, useRef, useContext, useLayoutEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { BLUE_COLOR, CALENDAR_BUTTONS } from '../../utils/constants';
import { formatEvents } from '../../utils/formattedData';
import { calculateModalPosition } from '../../utils/calculateModalPosition';
import { createEventObject } from '../../utils/createEventObject';

import { EventsContext } from '../../contexts/eventsContext';
import { EventModal } from '../EventModal/EventModal';
import './MyCalendar.css';

export default function MyCalendar () {
  const calendarRef = useRef(null);
  const { events, setEvents } = useContext(EventsContext);

  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [selectedEvent, setSelectedEvent] = useState(null);

  const goNext = () => calendarRef.current.getApi().next();
  const goBack = () => calendarRef.current.getApi().prev();

  // memoize the formatted events
  const formattedEvents = useMemo(() => formatEvents(events), [events]);

  useLayoutEffect(() => {
    if (selectedEvent) setShowModal(true);
  }, [selectedEvent]);  

  function handleEventClick(info) {
    setShowModal(false);

    // get coordinates of a time slot
    const rect = info.el.getBoundingClientRect();

    setModalPosition(calculateModalPosition(rect));
    setSelectedEvent(createEventObject(info));
  };

  function handleDateClick(info) {
    setShowModal(false);
    const rect = info.dayEl.getBoundingClientRect();

    setModalPosition(calculateModalPosition(rect, -38, 300)); 

    setSelectedEvent({
      title: '',
      start: info.dateStr,
      end: '',
      description: '',
      color: BLUE_COLOR,
    });
  };

  // drag an event to a new time slot
  function handleEventDrop(info) {
    const updatedEvent = createEventObject(info);

    setEvents(prevEvents => 
      prevEvents.map(event => 
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  }

  return (
    <div>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <FullCalendar
          ref={calendarRef}
          timeZone="local"
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          headerToolbar={{
            left: 'today,customPrev,customNext',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
          }}
          customButtons={{
            customPrev: {
              text: 'Back',
              click: goBack,
            },
            customNext: {
              text: 'Next',
              click: goNext,
            },
          }}
          events={formattedEvents}
          initialDate={new Date()}
          selectable={true}
          editable={true}
          buttonText={CALENDAR_BUTTONS}
          eventContent={({ event }) => (
            // change font color depending on bg-color
            <div
              className="event-title"
              style={{
                color: event.backgroundColor === '#ffffff' ? '#000' : '#fff',
                backgroundColor: event.backgroundColor,
              }}
            >
              {event.title}
            </div>
          )}
          eventDrop={handleEventDrop}
        />

        {showModal && createPortal(
          <div className='event-modal-container'
            style={{
              position: 'absolute',
              top: `${modalPosition.top}px`,
              left: `${modalPosition.left}px`,
            }}
          >
            <EventModal
              onClose={() => setShowModal(false)}
              event={selectedEvent}
            />
          </div>,
          document.body,
        )}
      </div>
    </div>
  );
};
