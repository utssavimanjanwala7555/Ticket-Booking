function EventCard({event}) {
    return (
        <>
            <div>
                <h2> {event.name} </h2>

                <img src={event.image}  />
                <p> {event.location} </p>
                <p> {event.date} </p>
                <p> {event.time} </p>
                <p> {event.price} </p>

                <button> Book Now </button>
               
            </div>
        </>
    )
}

export default EventCard