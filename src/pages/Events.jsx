import events from "../data/events";
import EventCard from "../components/EventCard";

function Events() {
  return (
    <div>
      <h1>Events</h1>

      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Events;