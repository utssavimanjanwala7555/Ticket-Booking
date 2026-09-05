function EventCard({event}) {
    return (
        <>
            <h1> Ticket Booking System </h1>

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