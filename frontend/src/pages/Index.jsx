import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import CoachCategory from "./CoachCategory";
import LandingPage from "./LandingPage";
import CoachList from "./CoachList";
import CoachProfile from "./CoachProfile";
import Signup from "./Signup";
import Login from "./Login";
import ChatList from "./ChatList";
import Chat from "./chat";
import CoachForm from "./CoachForm";
import BodyExercise from "./BodyExercise";
import SignupChoice from "./SignupChoice";
import UserProfile from "./UserProfile";

// New Pages
import About from "./About";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy"; // ✅ Add this import

function Index() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/coach-category" element={<CoachCategory />} />
        <Route path="/coach-list" element={<CoachList />} />
        <Route path="/coach-profile" element={<CoachProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat-list" element={<ChatList />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/coach-form" element={<CoachForm />} />
        <Route path="/signup-choice" element={<SignupChoice />} />
        <Route path="/body-exercise/:bodyPart" element={<BodyExercise />} />


        <Route path="user-profile" element={<UserProfile />} /> 

        {/* chat */}

        {/* New Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* ✅ Added */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default Index;
