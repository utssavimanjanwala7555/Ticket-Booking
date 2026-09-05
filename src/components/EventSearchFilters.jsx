import {useState} from 'react'
import events from "../data/events";

function EventSearchFilters()
{
    const [category , setCategory] = useState("all");

    function handleFilter(e)
    {
        const filteredEvents = events.filter(function (event)
        {
            return event.category == e.target.value;
        })
        setDisplayEvents(filteredEvents);
    } 

    return(
        <>
            <input type="text" placeholder="search events" onChange={handleFilter} />
            
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all"> All </option>
                <option value="music"> Music </option>
                <option value="stand-up-comedy"> Stand-Up comedy </option>
                <option value="tedex-talk"> TedEx Talk </option>
            </select>
        </>
    )
}

export default EventSearchFilters;