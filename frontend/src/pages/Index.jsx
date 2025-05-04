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
import FrontBody from "../components/FrontBody";
import BackBody from "../components/BackBody";
import BodyExercise from "./BodyExercise";

function Index() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coach-category" element={<CoachCategory />} />
        <Route path="/coach-list" element={<CoachList />} />
        <Route path="/coach-profile" element={<CoachProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat-list" element={<ChatList />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/coach-form" element={<CoachForm />} />
        <Route path="/body-exercise/:bodyPart" element={<BodyExercise />} />
      </Routes>
      <Footer />
    </Router>

    // <div>
    //   {/* <Header /> */}
    //   {/* <LandingPage /> */}
    //   {/* <FrontBody /> */}
    //   {/* <CoachCategory /> */}
    //   {/* <CoachProfile/> */}

    //   {/* <Footer /> */}

    // </div>
    
  );
}

export default Index;