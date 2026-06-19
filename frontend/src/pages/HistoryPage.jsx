import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllItineraries } from "../services/itineraryService";

function HistoryPage() {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const res = await getAllItineraries();

        console.log("ITINERARIES:", res);

        setItineraries(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading itineraries...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-50 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          My Itineraries ✈️
        </h1>

        {itineraries.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow">
            No itineraries found
          </div>
        ) : (
          <div className="grid gap-4">
            {itineraries.map((item) => (
              <Link
                key={item._id}
                to={`/itinerary/${item._id}`}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="font-semibold text-lg text-sky-700">
                  Trip #{item._id.slice(-6)}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Created: {new Date(item.createdAt).toLocaleDateString()}
                </p>

                <p className="text-gray-600 mt-3 line-clamp-2">
                  {item.extractedData?.extractedText?.substring(0, 120)}
                  ...
                </p>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}


export default HistoryPage