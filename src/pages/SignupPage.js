import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signed up!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
