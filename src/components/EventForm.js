import { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const idToken = await window.auth.currentUser.getIdToken();

      // ✅ Format the date to ISO (for LocalDateTime in Spring Boot)
      const formattedDate = new Date(date).toISOString();

      const res = await axios.post(
        "http://localhost:8080/api/events",
        {
          title,
          description,
          date: formattedDate,
        },
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("✅ Event created successfully!");
      setTitle("");
      setDescription("");
      setDate("");
    } catch (err) {
      console.error("❌ Error creating event:", err.response);
      alert("❌ Failed to create event: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <br />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
