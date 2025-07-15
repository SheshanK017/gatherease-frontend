import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { auth } from "../services/firebase";

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const idToken = await auth.currentUser.getIdToken();
        const res = await axios.get(`http://localhost:8080/api/events/${id}`, {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });
        setEvent(res.data);
      } catch (err) {
        console.error("Failed to fetch event", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);
  console.log("Fetching:", `http://localhost:8080/api/events/${id}`);

  if (loading) return <p>Loading event details...</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
      <p>{event.description}</p>
      <p><strong>Created By:</strong> {event.createdBy}</p>
    </div>
  );
};

export default EventDetailsPage;
