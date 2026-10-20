
export default function Event() {
    const events = [
        {
            title: "Reading competition",
            date: "10-11-2026",
            description: "This event is designed to test the reading speed and comprehension."
    },
        {
            title: "Storytelling session",
            date: "20-11-2026",
            description: "This is designed for people to tell stories."
    },
        {
            title: "Community Literacy Workshop",
            date: "1-11-2026",
            description: "This is to help the community to be able to read"
    },
]

  return (
    <section className="events">
        <p>Upcoming events</p>
        {events.map(event => <div className="event-card"><p className="event-header"><span>{event.title}</span><span>Date: {event.date}</span></p><p>{event.description}</p></div>)}
    </section>
  )
}
