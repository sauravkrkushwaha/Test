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
    return (
      <div className="text-red-600 text-center mt-6 text-lg font-semibold">
        Error: {error}
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center mt-6 text-lg font-medium text-gray-600">
        Loading coach profile...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
        Coach Profile
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Profile Image Section */}
        <div className="flex-shrink-0 flex justify-center mb-6 md:mb-0">
          {profile.profilePhoto ? (
            <img
              src={`http://localhost:5000${profile.profilePhoto}`}
              alt="Coach"
              className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
            />
          ) : (
            <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-semibold text-lg">
              No Photo
            </div>
          )}
        </div>

        {/* Profile Details */}
        <div className="flex-grow space-y-6 text-gray-800">
          <p className="text-xl">
            <strong>Name:</strong> {profile.name || "No data available"}
          </p>

          <p className="text-xl">
            <strong>Type:</strong> {profile.type || "No data available"}
          </p>

          <p className="text-xl">
            <strong>Specialities:</strong>{" "}
            {profile.speciality && profile.speciality.length > 0
              ? profile.speciality.join(", ")
              : "No data available"}
          </p>

          <p className="text-xl">
            <strong>About Me:</strong> {profile.aboutMe || "No data available"}
          </p>

          <div>
            <strong className="text-xl">Certifications:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-lg">
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
            <strong className="text-xl">Packages (INR):</strong>
            {profile.packages ? (
              <ul className="list-disc ml-6 mt-2 space-y-1 text-lg">
                <li>Monthly: ₹{profile.packages.monthly ?? "N/A"}</li>
                <li>Quarterly: ₹{profile.packages.quarterly ?? "N/A"}</li>
                <li>Half-Yearly: ₹{profile.packages.halfYearly ?? "N/A"}</li>
                <li>Yearly: ₹{profile.packages.yearly ?? "N/A"}</li>
              </ul>
            ) : (
              <p className="mt-2">No data available</p>
            )}
          </div>

          <p className="text-xl">
            <strong>Average Rating:</strong>{" "}
            {profile.averageRating || "No data available"}
          </p>

          <p className="text-xl">
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/918864084387"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline hover:text-green-800 transition"
            >
              Message on WhatsApp
            </a>
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-900">Reviews</h3>
        {profile.reviews && profile.reviews.length > 0 ? (
          <ul className="space-y-6 max-h-96 overflow-y-auto pr-2">
            {profile.reviews.map((review, index) => (
              <li
                key={index}
                className="border border-gray-300 p-5 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg">
                  <strong>User:</strong> {review.userName}
                </p>
                <p className="text-lg">
                  <strong>Rating:</strong> {review.rating} / 5
                </p>
                <p className="text-lg">
                  <strong>Comment:</strong> {review.comment || "No comment"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Date:</strong>{" "}
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-600">No reviews available</p>
        )}
      </div>
    </div>
  );
}

export default CoachProfile;
