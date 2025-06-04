import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // or "trainerToken" if coach

    axios
      .get("http://localhost:5000/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`, // important to add Bearer prefix
        },
      })
      .then((res) => {
        console.log("Profile data:", res.data);
        setProfile(res.data);
      })
      .catch((err) => {
  console.error("Full error object:", err);
  console.error("Error response data:", err.response?.data);
  console.error("Error status:", err.response?.status);
  setError(err.response?.data?.message || "Failed to fetch profile");
});

  }, []); // empty dependency array = runs once on mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {profile.username}</p>
      {/* Render other profile details */}
    </div>
  );
}

export default UserProfile;
