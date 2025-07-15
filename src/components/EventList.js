import { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../services/firebase";
import { Link } from "react-router-dom";
const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const idToken = await auth.currentUser.getIdToken();
        const res = await axios.get("http://localhost:8080/api/events", {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });
        setEvents(res.data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;

  if (!events.length) return <p>No events found.</p>;

  return (
    <div>
      <h2>All Events</h2>
      <ul>
        {events.map((event) => (
         <li key={event.id}>
  <Link to={`/events/${event.id}`}>
    <strong>{event.title}</strong>
  </Link> — {new Date(event.date).toLocaleString()}
  <p>{event.description}</p>
</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
