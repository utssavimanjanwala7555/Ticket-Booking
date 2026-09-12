import { useState } from "react";
import Events from "./pages/Events";
import EventSearchFilters from "./components/EventSearchFilters";
import events from "./data/events";

function App() 
{
  const [displayEvents, setDisplayEvents] = useState(events);

  return ( 
    <>
      <EventSearchFilters setDisplayEvents={setDisplayEvents} />
      <Events events={displayEvents} />
    </>
  )
}

export default App;