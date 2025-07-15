import { useEffect, useState } from "react";
import { auth } from "../services/firebase";

const ShowTokenPage = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        setToken(idToken);
        alert(`Firebase ID Token:\n\n${idToken}`);
        console.log("Firebase ID Token:", idToken);
      } else {
        alert("No user is signed in. Please login first.");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Your Firebase ID Token:</h2>
      <textarea
        style={{ width: "100%", height: "200px" }}
        readOnly
        value={token || ""}
      />
    </div>
  );
};

export default ShowTokenPage;
