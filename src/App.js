import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthContext";
import ShowTokenPage from "./pages/ShowTokenPage";
import Dashboard from "./pages/Dashboard";
import EventList from "./components/EventList";

import EventDetailsPage from "./components/EventDetailsPage";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/show-token' element={<ShowTokenPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
         
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
           <Route
            path="/events"
            element={
              <ProtectedRoute>
                <EventList />
              </ProtectedRoute>
            }
          />
          <Route
  path="/events/:id"
  element={
    <ProtectedRoute>
      <EventDetailsPage />
    </ProtectedRoute>
  }
/>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
