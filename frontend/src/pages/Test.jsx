import React, { useEffect, useState } from "react";
import axios from "axios";

function CoachProfile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("trainerToken");

    axios
      .get("http://localhost:5000/api/trainer/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.response?.data?.message || "Failed to fetch coach profile");
      });
  }, []);

  if (error) {
    return <div className="text-red-600 text-center mt-4">Error: {error}</div>;
  }

  if (!profile) {
    return <div className="text-center mt-4">Loading coach profile...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <h2 className="text-3xl font-bold text-center mb-6">Coach Profile</h2>

      <div className="space-y-4 text-gray-800">
        <p><strong>Name:</strong> {profile.name || "No data available"}</p>
        <p><strong>Type:</strong> {profile.type || "No data available"}</p>

        <div>
          <strong>Profile Photo:</strong><br />
          {profile.profilePhoto ? (
            <img src={`http://localhost:5000${profile.profilePhoto}`} alt="Coach" className="w-32 h-32 object-cover rounded-full mt-2" />
          ) : (
            <p>No profile photo available</p>
          )}
        </div>

        <p><strong>Specialities:</strong> {
          profile.speciality && profile.speciality.length > 0 
            ? profile.speciality.join(", ")
            : "No data available"
        }</p>

        <p><strong>About Me:</strong> {profile.aboutMe || "No data available"}</p>

        <div>
          <strong>Certifications:</strong>
          <ul className="list-disc ml-6">
            {profile.certifications && profile.certifications.length > 0 ? (
              profile.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))
            ) : (
              <li>No data available</li>
            )}
          </ul>
        </div>

        <div>
          <strong>Packages (INR):</strong>
          {profile.packages ? (
            <ul className="list-disc ml-6">
              <li>Monthly: ₹{profile.packages.monthly ?? "N/A"}</li>
              <li>Quarterly: ₹{profile.packages.quarterly ?? "N/A"}</li>
              <li>Half-Yearly: ₹{profile.packages.halfYearly ?? "N/A"}</li>
              <li>Yearly: ₹{profile.packages.yearly ?? "N/A"}</li>
            </ul>
          ) : (
            <p>No data available</p>
          )}
        </div>

        <p><strong>Average Rating:</strong> {profile.averageRating || "No data available"}</p>

        <p><strong>WhatsApp:</strong> <a href="https://wa.me/918864084387" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Message on WhatsApp</a></p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
        {profile.reviews && profile.reviews.length > 0 ? (
          <ul className="space-y-4">
            {profile.reviews.map((review, index) => (
              <li key={index} className="border p-4 rounded">
                <p><strong>User:</strong> {review.userName}</p>
                <p><strong>Rating:</strong> {review.rating} / 5</p>
                <p><strong>Comment:</strong> {review.comment || "No comment"}</p>
                <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
}

export default CoachProfile;
