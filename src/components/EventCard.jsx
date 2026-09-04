function EventCard({ event}) {
    return (
        <>
            <div>
                <h2> {event.name} </h2>

                <p> {event.location} </p>
                <p> {event.date} </p>
                <p> {event.time} </p>
                <p> {event.price} </p>
               
            </div>
        </>
    )
}

export default EventCard