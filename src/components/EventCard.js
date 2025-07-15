const EventCard = ({ event }) => {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
      <p><strong>Created By:</strong> {event.createdBy}</p>
    </div>
  );
};

export default EventCard;
