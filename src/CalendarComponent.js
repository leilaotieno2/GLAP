import React, { useEffect, useState } from 'react';
import { GoogleCalendarProvider, Calendar as GoogleCalendar } from 'react-google-calendar-api';

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        await GoogleCalendarProvider.init({
          apiKey: 'AIzaSyAdyQ9H_M2qc__85RNiUpiEDYRSvgpG9No',
          clientId: '832869521374-h9v4ln6gca17i1g9nlbndp8tl9jhu8um.apps.googleusercontent.com',
          scope: 'https://www.googleapis.com/auth/calendar',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        });

        const eventsResponse = await GoogleCalendarProvider.listUpcomingEvents();

        if (eventsResponse && eventsResponse.result.items) {
          setEvents(eventsResponse.result.items);
        }
      } catch (error) {
        console.error('Error loading Google Calendar events:', error);
      }
    };

    loadEvents();
  }, []);

  return (
    <div>
      <h1>Google Calendar</h1>
      <GoogleCalendar events={events} />
    </div>
  );
};

export default CalendarComponent;
