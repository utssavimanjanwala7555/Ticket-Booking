import events from "../data/events";
import EventCard from "../components/EventCard";

function Events() {
  return (
    <div>
      
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Events;