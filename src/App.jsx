import { useState } from "react";
import Events from "./pages/Events";
import EventSearchFilters from "./components/EventSearchFilters";

function App() 
{
  const [displayEvents, setDisplayEvents] = useState();

  return ( 
    <>
      <EventSearchFilters />
      <Events />
    </>
  )
}

export default App;